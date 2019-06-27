import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirstFormData, Food, Enquiry } from '../domain';
import { CommuniccationService } from '../communiccation.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})

export class EnquiryComponent implements OnInit {

  createEnq: FormGroup

  selectedCustomerType: {}
  customerTypes: any[]
  titles: any[]

  constructor(
    private fb: FormBuilder,
    private comSv: CommuniccationService,
    private data: DataService,
    private router : Router
  ) { }

  ngOnInit() {
    this.customerTypes = this.data.customerTypes
    this.titles = this.data.titles
    this.createEnquiryForm()
  }

  createEnquiryForm() {
    this.createEnq = this.fb.group({
      customerType: [],
      title: [],
      firstName: []
    })
  }

  onClick() {
    console.log(this.createEnq.value)
    this.comSv.setFirstPageValues(this.createEnq.value)

    this.router.navigate(['enq2'])
  }
}
