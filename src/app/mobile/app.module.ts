// required modules
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { NavController, Platform, Loading } from 'ionic-angular';


// component modules
import { MyApp } from './app.component';

// sub modules
import { MobileInfoModule } from './../../pages/mobile/mobile.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    MobileInfoModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    
  ]
})
export class MobileModule { }