import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManipulatePage } from './manipulate';

@NgModule({
  declarations: [
    ManipulatePage,
  ],
  imports: [
    IonicPageModule.forChild(ManipulatePage),
  ],
})
export class ManipulatePageModule {}
