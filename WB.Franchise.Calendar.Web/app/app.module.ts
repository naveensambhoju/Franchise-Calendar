import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'rxjs/add/operator/map';

import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from "@angular/http";

import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { AdminContentComponent } from './admincontent/admin-content.component';

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(APP_ROUTES), HttpModule],
    declarations: [AppComponent, AdminContentComponent],
    bootstrap: [AppComponent],
})
export class AppModule{ OnInit(){

    console.log("Init")
}}
