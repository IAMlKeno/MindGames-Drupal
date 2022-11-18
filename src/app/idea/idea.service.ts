import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Idea } from "./idea";

@Injectable({
  providedIn: 'root'
})

export class IdeaService {

  private ideaUrl = 'http://localhost/api/mindgames?_format=json';

  constructor(private http: HttpClient) {}

  getIdeas(): Observable<Idea[]> {
    return this.http.get<Idea[]>(this.ideaUrl);
  }
}