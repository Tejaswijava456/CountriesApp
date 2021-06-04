import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Country, CountryAdapter} from "./country.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CountryService {
  private baseUrl = "https://restcountries.eu/rest/v2/";

  constructor(private http: HttpClient, private adapter: CountryAdapter) {}
  all(): Observable<Country[]> {
    const url = this.baseUrl+"all";
    return this.http
      .get<Country[]>(url)
  }

}
