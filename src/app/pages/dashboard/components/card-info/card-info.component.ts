import { Component, OnInit } from '@angular/core';
import { PrimengModule } from 'src/app/primeng.module';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-card-info',
  templateUrl: 'card-info.component.html',
})
export class CardInfoComponent implements OnInit {
  constructor(private staffServices:StaffService) {}

  ngOnInit() {

  }
}
