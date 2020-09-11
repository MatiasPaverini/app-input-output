import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private url = environment.countryUrl;
  public user;

  constructor(private http: HttpClient) { }

  /**
   * getCountry
   */
  public getCountry() {
    return this.http.get(this.url);
  }
}
