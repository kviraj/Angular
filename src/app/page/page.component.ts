import { Component, OnInit } from '@angular/core';
import { CommuniccationService } from '../communiccation.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  machineDetail : FormGroup

  ptoEquipments: any[]
  stateMakes : any[]
  equipmentMake : any[]

  constructor(
    private comSv : CommuniccationService,
    private frmBld : FormBuilder,
    private data: DataService,
    private router : Router
    
  ) { }

  ngOnInit() {

    this.ptoEquipments = this.data.ptoEquipments
    this.stateMakes = this.data.stateMakes
    this.equipmentMake = this.data.equipmentMake
    this.comSv.printEnquiry()

    this. machineDetailsForm() 
  }

  machineDetailsForm() {
    this.machineDetail = this.frmBld.group({
      equipmentMake: [],
      ptoDrivenEq: [],
      stateMake: []
    })
  }

  pageClick() {
    console.log(this.machineDetail.value)
    this.comSv.setSecondPageValues(this.machineDetail.value)
  }

  onPrvClick(){
    this.router.navigate([''])
  }

}
