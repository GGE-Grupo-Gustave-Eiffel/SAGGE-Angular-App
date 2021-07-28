import { AbstractControl, ValidatorFn } from "@angular/forms";

export function UsernameValidator(control : AbstractControl) : {[key : string] : any} {
    return {username : true};
}
