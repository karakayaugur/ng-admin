import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  providers: [],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ButtonComponent
  ],
  exports: [
    ButtonComponent
  ],
})
export class SharedModule { }
