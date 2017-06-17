import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HumanComponent } from './human/human.component';
import { SaiyanComponent } from './saiyan/saiyan.component';
import { SupSaiyanComponent } from './sup-saiyan/sup-saiyan.component';
// import { SupSaiyanOneComponent } from './sup-saiyan-one/sup-saiyan-one.component';
import { SupSaiyanTwoComponent } from './sup-saiyan-two/sup-saiyan-two.component';
import { SupSaiyanThreeComponent } from './sup-saiyan-three/sup-saiyan-three.component';
import { SupSaiyanFourComponent } from './sup-saiyan-four/sup-saiyan-four.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HumanComponent,
    SaiyanComponent,
    SupSaiyanComponent,
    // SupSaiyanOneComponent,
    SupSaiyanTwoComponent,
    SupSaiyanThreeComponent,
    SupSaiyanFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
