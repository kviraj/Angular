import { Title } from '@angular/platform-browser';

export interface Enquiry{
    customerType :string
    title :string
    firstName:string

    ptoDrivenEq:string
    stateMake:string
    equipmentMake:string
}

export interface Food {
    value: string;
    viewValue: string;
  };
  
  export interface FirstFormData {
    enquiryDate : string
  }