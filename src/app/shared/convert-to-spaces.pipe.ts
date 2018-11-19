import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToSpaces'
})

export class ConvertToSpaces implements PipeTransform {
    transform(value: string, char: string){
        return value.replace(char, ' ');
    }
}