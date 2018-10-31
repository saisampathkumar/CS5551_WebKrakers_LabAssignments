import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [ 
    FormsModule, 
    MbscModule,
    IonicPageModule.forChild(RegisterPage),
  ],
})
export class RegisterPageModule {}
