import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Idea } from "./idea";
import { Feature } from "../feature/feature";
import { IdeaModel } from "../idea-form/idea-model";

@Injectable({
  providedIn: 'root'
})

export class IdeaService {
  private url = 'http://mindgames_cms:8086';
  private ideaUrl = `${this.url}/api/mindgames?_format=json`;
  private ideaAndFeaturesUrl = `${this.url}/api/mindgames/details?_format=json`;
  private ideaInsertUrl = `${this.url}/jsonapi/node/idea`;
  private featureInsertUrl = `${this.url}/jsonapi/node/feature`;
  private featureByIdeaUuid = `${this.url}/jsonapi/node/feature?filter[field_idea.id]=`

  constructor(private http: HttpClient) { }

  getIdeas(): Observable<Idea[]> {
    const response = this.http.get<Idea[]>(this.ideaAndFeaturesUrl);

    return response;
  }

  async insertNewIdeaAndFeatures(idea: IdeaModel) {
    // drupal idea service to insert idea
    const insertedIdea: any = this._insertIdea(idea)
      .subscribe({
        next: (data: any) => {
          idea.field_features.forEach(feature => {
            // uuid of the idea
            feature.field_idea = data.data.id;
            const insertedFeature = this._insertFeature(feature)
              .subscribe(data => { console.log(data) });
          });
        },
        error: (e) => console.log(e),
        complete: () => console.log('done')
      });
  }

  updateIdea(idea: Idea) {
    console.log(idea);
    const body = {
      "data": {
        "type": "node--idea",
        "id": idea.uuid,
        "attributes": {
          "title": idea.title,
          "field_description": idea.field_description
        }
      }
    };
    const options = {
      headers: {
        'Content-Type': 'application/vnd.api+json',
        'Accept': 'application/vnd.api+json',
        'Authorization': 'Basic anNfdXNlcjpqc191c2Vy'
      }
    };

    // Update the idea
    this.http.patch(`${this.ideaInsertUrl}/${idea.uuid}`, body, options)
      .subscribe({
        error: (e) => console.debug(`Failed to update the idea with id: ${idea.nid}`)
      });

      
      // update the features
      if (idea.field_features.length <= 0)
      return;
      
    idea.field_features.forEach((feature: Feature) => {
      // if a feature does not have field_idea, its a new feature.
      if (feature.nid == undefined) {
        feature.field_idea = idea.uuid;
        console.log(feature);
        this._insertFeature(feature).subscribe({
          error: (e) => { console.log(`An error occurred inserting new feature during update`); },
          complete: () => { console.log(`Completed the attempt to insert new feature during update`); }
        });
        return;
      }
      const body = {
        "data": {
          "type": "node--feature",
          "id": feature.uuid,
          "attributes": {
            "title": feature.title,
            "field_description": feature.field_description
          }
        }
      };
      const options = {
        headers: {
          'Content-Type': 'application/vnd.api+json',
          'Accept': 'application/vnd.api+json',
          'Authorization': 'Basic anNfdXNlcjpqc191c2Vy'
        }
      };
      // update the features
      this.http.patch(`${this.featureInsertUrl}/${feature.uuid}`, body, options)
        .subscribe({
          error: e => console.log(`Failed to update the feature ${feature.nid}`)
        });
    });
    console.log("Done updating idea");
  }

  deleteIdea(uuid: string) {
    console.debug(`deleting uuid: ${uuid}`);
    this._getFeaturesByIdeaUuid(uuid)
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

  private _getFeaturesByIdeaUuid(uuid: string): Observable<Feature[]> {
    return this.http.get<Feature[]>(`${this.featureByIdeaUuid}${uuid}`);
  }

}