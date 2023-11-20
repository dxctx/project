import { Component, Input, OnInit } from '@angular/core';
import { Person, StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-card-info',
  templateUrl: 'card-info.component.html',
})
export class CardInfoComponent implements OnInit {
  @Input() persons: Person[] = [];

  idUser!: number;
  infectionNote: string = '';
  medicalNote: string = '';

  showMedicalBakground: boolean = false;
  showInfectionControl: boolean = false;
  constructor(private staffService: StaffService) {}

  ngOnInit() {}

  showMedicalBakgroundForm() {
    this.showMedicalBakground = true;
  }
  showInfectionControlForm() {
    this.showInfectionControl = true;
  }

  addShowInfectionControl(id: number) {
    this.staffService.addClinicalNotes(id, this.infectionNote);
    this.infectionNote = '';
    this.showInfectionControl = false;
  }
  addMedicalBackground(id: number) {
    this.staffService.editMedicalBackground(id, this.medicalNote);
    this.medicalNote = '';
    this.showMedicalBakground = false;
  }
}
