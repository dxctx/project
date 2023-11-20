import { Component } from '@angular/core';
import { Person, StaffService, Vaccine } from 'src/app/services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent {
  termPeople: string = '';
  termVaccine: string = '';
  persons!: Person[];
  vaccines!: Vaccine[];

  constructor(private staffServices: StaffService) {}

  searchPeople() {
    this.persons = this.staffServices.searchPeoplePerName(this.termPeople);
    console.log(this.termPeople,this.persons);
    
  }
  searchVaccine() {
    this.vaccines = this.staffServices.searchVaccinesByName(this.termVaccine);
    console.log(this.termVaccine,this.vaccines);
  }
}
