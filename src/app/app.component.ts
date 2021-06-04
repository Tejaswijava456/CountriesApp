import {Component, OnInit} from '@angular/core';
import {Country} from "./api/country.model";
import {CountryService} from "./api/country.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Countries';
  countryName = "";
  countries: Country[];
  cashCountries: Country[];
  regionList: string[];
  showCountryTableContent: Boolean = true;
  selectedCountry : any;

  constructor(private countryService: CountryService) {
    this.countries = [];
    this.regionList = [];
    this.cashCountries = [];
    this.selectedCountry = null;
  }

  ngOnInit(): void {
    this.countryService.all().subscribe((countries: Country[]) => {
      this.countries = countries;
      this.cashCountries = countries;
      console.log("In AppComponent")
      countries.forEach(c => {
        if (c.region != null && c.region.length > 0 && !this.regionList.includes(c.region)) {
          this.regionList.push(c.region)
        }
      })
    })
  }

  filterRegions(filterVal: any) {
    if (filterVal.value == "0")
      this.countries = this.cashCountries;
    else
      this.countries = this.cashCountries.filter((item) => item.region == filterVal.value);
  }

  onSelect(county: any) {
    console.log("Click on county : ")
    console.log(county)
    this.showCountryTableContent = false;
    this.selectedCountry = county;
  }

  showCountryComponent() {
    this.showCountryTableContent = true;
  }
}
