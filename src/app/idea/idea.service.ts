import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Idea } from "./idea";
import { Feature } from "../feature/feature";
import { IdeaModel } from "../idea-form/idea-model";
import { waitForAsync } from "@angular/core/testing";

@Injectable({
  providedIn: 'root'
})

export class IdeaService {

  private ideaUrl = 'http://localhost/api/mindgames?_format=json';
  private ideaInsertUrl = 'http://localhost/jsonapi/node/idea';
  private featureInsertUrl = 'http://localhost/jsonapi/node/feature';
  private featureByIdeaUuid = 'http://localhost/jsonapi/node/feature?filter[field_idea.id]='

  constructor(private http: HttpClient) {}

  getIdeas(): Observable<Idea[]> {
    return this.http.get<Idea[]>(this.ideaUrl);
  }

  async insertNewIdeaAndFeatures(idea: IdeaModel) {
    // drupal idea service to insert idea
    const insertedIdea: any = this._insertIdea(idea)
      .subscribe({
        next: (data: any) => {
          idea.field_features.forEach(feature => {
            feature.field_idea = data.data.id;
            const insertedFeature = this._insertFeature(feature)
              .subscribe(data => {console.log(data)});
          });
        },
        error: (e) => console.log(e),
        complete: () => console.log('done')
      });
  }

  private _insertIdea(idea: Partial<Idea>): Observable<Idea> {
    return this.http.post<Idea>(this.ideaInsertUrl,
      {
        "data": {
          "type": "node--idea",
          "attributes": {
            "title": idea.title,
            "field_description": idea.field_description
          }
        }
      }, //body
      {
        headers: {
          'Content-Type': 'application/vnd.api+json',
          'Accept': 'application/vnd.api+json',
          'Authorization': 'Basic anNfdXNlcjpqc191c2Vy'
        }
      }); // options
  }

  private _insertFeature(feature: Feature): Observable<Feature> {
    return this.http.post<Feature>(this.featureInsertUrl,
      {
        "data": {
          "type": "node--feature",
          "attributes": {
            "title": feature.title,
            "field_description": feature.field_description
          },
          "relationships": {
            "field_idea": {
              "data": {
                "type": "node--idea",
                "id": feature.field_idea
              }
            }
          }
        }
      }, //body
      {
        headers: {
          'Content-Type': 'application/vnd.api+json',
          'Accept': 'application/vnd.api+json',
          'Authorization': 'Basic anNfdXNlcjpqc191c2Vy'
        }
      }); // options
  }

  updateIdea(uuid: string) {
    // const body = {
    //   "data": {
    //       "type": "node--idea",
    //       "id": uuid,
    //       "attributes": {
    //           "title": "Super Cool Idea modified with Patch"
    //       }
    //   }
    // }
  }

  deleteIdea(uuid: string) {
    console.debug(`deleting uuid: ${uuid}`);
    this.http.get(`${this.featureByIdeaUuid}${uuid}`)
      .subscribe({
        next: (data: any) => {
          // delete features
          data.data.forEach((feature: any) => {
            this.http.delete(`${this.featureInsertUrl}/${feature.id}`, {
              headers: {
                'Content-Type': 'application/vnd.api+json',
                'Accept': 'application/vnd.api+json',
                'Authorization': 'Basic anNfdXNlcjpqc191c2Vy'
             }
            })
            .subscribe({
              next: (d) => console.log('deleted feature'),
              error: (e) => console.log(`failed to delete a feature with id ${feature.id} \n ${e}`)
            });
          });
          // then delete idea
          this.http.delete(`${this.ideaInsertUrl}/${uuid}`, {
            headers: {
              'Content-Type': 'application/vnd.api+json',
              'Accept': 'application/vnd.api+json',
              'Authorization': 'Basic anNfdXNlcjpqc191c2Vy'
           }
          })
          .subscribe({
            next: d => console.log('deleted idea'),
            error: e => console.log(`Failed to delete the idea with id ${uuid} \n ${e}`)
          });
        },
        error: (e) => console.debug(e),
        complete: () => console.log('deletion of idea and features is complete')
      });
  }

}