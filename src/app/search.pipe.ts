import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'countryFilter'
})
export class CountryFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((country: { name: string; }) => {
      return (country.name.toLocaleLowerCase().includes(args));
    })

  }

}
