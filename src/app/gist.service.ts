import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GistService {
  url: string;

  constructor(private http: Http) { }

  getGistData(gistId: string): Promise<any> {
    this.url = `https://api.github.com/gists/${gistId}`;
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.get(this.url, headers)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
