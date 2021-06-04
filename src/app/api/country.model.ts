import {Injectable} from "@angular/core";

export class Country {
  constructor(
    public name: string,
    public capital: string,
    public code: string,
    public region: string,
    public subregion: string,
    public population: number,
    public flag: string,
    public cioc:string
  ) {}
}

@Injectable({
  providedIn: "root"
})
export class CountryAdapter {
  adapt(item: any): Country {
    return new Country(item.name, item.capital, item.code, item.region, item.subregion, item.population, item.flag,item.cioc);
  }
}
