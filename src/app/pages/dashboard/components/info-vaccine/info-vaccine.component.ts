import { Component, Input, OnInit } from '@angular/core';
import { Vaccine } from 'src/app/services/staff.service';

@Component({
  selector: 'app--info-vaccine',
  templateUrl: 'info-vaccine.component.html',
})
export class InfoVaccineComponent implements OnInit {
  @Input() vaccines: Vaccine[] = [];
  constructor() {}

  ngOnInit() {}
}
