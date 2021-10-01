import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'ConvertToDash',
})
export class ConvertToDash implements PipeTransform{

    transform(value: string, character: string) {
       return value.replace(character,'-');
    }

}