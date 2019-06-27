import { Injectable } from '@angular/core';
import { Enquiry } from './domain';

@Injectable({
  providedIn: 'root'
})
export class CommuniccationService {

  private enquiry : Enquiry = {} as Enquiry
  
  constructor() { }

  setFirstPageValues(obj : {}) {
    this.enquiry.customerType = obj['customerType']
    this.enquiry.title = obj['title']
    this.enquiry.firstName = obj['firstName']
  }

  setSecondPageValues( obj : {}) {
    this.enquiry.equipmentMake = obj['equipmentMake']
    this.enquiry.ptoDrivenEq = obj['ptoDrivenEq']
    this.enquiry.stateMake = obj['stateMake']
  }

  printEnquiry() {
    console.log(this.enquiry)
  }
}
