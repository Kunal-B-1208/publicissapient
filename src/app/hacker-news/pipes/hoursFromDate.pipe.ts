import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'getHoursFromDate'})
export class GetHoursFromDate implements PipeTransform {

  transform(value : string): string {
   
    var today = new Date();
    var input = new Date(value);
    var diffMs = (today.getTime() - input.getTime()); // milliseconds between now & Christmas
    var diffDays = Math.floor(diffMs / 86400000); // days
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

    var years = Math.floor(diffDays/365);
    var months = Math.floor(diffDays/12);

    if(years> 0){
        return years + " Years ago";
    }
    if(months >0){
        return months + " Months ago";
    }

    if(diffDays > 0){
        return diffDays + " Days ago";
    }
    if(diffHrs > 0){
        return diffHrs + " Hours ago";
    }
    if(diffMins > 0){
        return diffMins + " Mins ago";
    }

  }
}