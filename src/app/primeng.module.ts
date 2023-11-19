import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';

@NgModule({
  imports: [
    AccordionModule,
    DropdownModule,
    CardModule
  ],
  exports: [
    AccordionModule,
    DropdownModule,
    CardModule
  ],
  declarations: [],
  providers: [],
})
export class PrimengModule {}
