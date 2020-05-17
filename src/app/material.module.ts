import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field/';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';



@NgModule({
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSidenavModule,
        MatListModule
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSidenavModule,
        MatListModule
    ]
})

export class MaterialModule { }
