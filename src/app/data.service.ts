import { Injectable } from '@angular/core';
import { Food } from './domain';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  options: string[] = ['One', 'Two', 'Three'];

  customerTypes: any[] = [
    { value: 'hot', viewValue: 'Hot' },
    { value: 'cold', viewValue: 'Cold' },
    { value: 'normal', viewValue: 'Normal' }
  ];

  titles: any[] = [
    { value: 'mr', viewValue: 'Mr' },
    { value: 'miss', viewValue: 'Miss' },
    { value: 'mrs', viewValue: 'Mrs' }
  ];

  ptoEquipments: any[] = [
    { value: 'police', viewValue: 'police' },
    { value: 'teacher', viewValue: 'teacher' },
    { value: 'doctor', viewValue: 'doctor' }
  ];

  stateMakes: any[] = [
    { value: 'solid', viewValue: 'solid' },
    { value: 'liquid', viewValue: 'liquid' },
    { value: 'gas', viewValue: 'gas' }
  ];

  equipmentMake: any[] = [
    { value: 'stick', viewValue: 'stick' },
    { value: 'chalk', viewValue: 'chalk' },
    { value: 'injections', viewValue: 'injections' }
  ];

  
  states: string[] = [
    'Mahrashtra', 'Punjab', 'Tamil Nadu'
  ];

  districts: string[] = [
    'Pune', 'Dhule', 'Nashik'
  ];

  taluka: string[] = [
    'mulshi', 'baramati', 'bhor', 'daund'
  ];

  cities: string[] = [
    'washington', 'mumbai', 'pimri-chinchwad'
  ];

  
  constructor() { }
}
