import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { SkillComponent } from './components/sidebar/skill/skill.component';
import { DialComponent } from './components/main/dial/dial.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    SkillComponent,
    DialComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
