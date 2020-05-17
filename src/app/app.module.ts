import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BottomSheetComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
    ],
    entryComponents: [
        BottomSheetComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
