import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { TextComponent } from './textbox/text.component';
import { LoaderComponent } from './loader/loader.component';
import { FormComponent } from './form/form.component';
import { TabuleiroComponent } from './tabuleiro/tabuleiro.component';
import { PecaComponent } from './peca/peca.component';
import { AddIssueComponent } from './pages/page-adm/app/components/add-issue/add-issue.component';
import { EditIssueComponent } from './pages/page-adm/app/components/edit-issue/edit-issue.component';
import { IssueListComponent } from './pages/page-adm/app/components/issue-list/issue-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BugService } from './shared/services/bug.service';
import { LoginComponent } from './login/login.component';
import { AdmPageComponent } from './adm-page/adm-page.component';
import { Carousel03Component } from './rules/rules.component';
import { SlidesComponent } from './slides/slides.component';
import { CarouselModule } from '@coreui/angular';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import {IvyCarouselModule} from 'carousel-angular';
import { LottieModule } from 'ngx-lottie'; // add this line

export function playerFactory() { // add this line
  return import('lottie-web'); // add this line
} // add this line


@NgModule({
  declarations: [
    AppComponent,
    AddIssueComponent,
    EditIssueComponent,
    IssueListComponent,
    ButtonComponent,
    TextComponent,
    LoaderComponent,
    FormComponent,
    TabuleiroComponent,
    PecaComponent,
    LoginComponent,
    AdmPageComponent,
    Carousel03Component,
    SlidesComponent,
  ],
  imports: [
    LottieModule.forRoot({ player: playerFactory}),
    IvyCarouselModule,
    MdbCarouselModule,
    CarouselModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [BugService],
  bootstrap: [AppComponent,CarouselModule, Carousel03Component,ButtonComponent,TextComponent, LoaderComponent,FormComponent,TabuleiroComponent,PecaComponent],
})
export class AppModule { }