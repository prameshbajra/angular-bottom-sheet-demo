import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatFormFieldModule } from '@angular/material/form-field/';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSidenavModule,
        MatListModule,
        MatBottomSheetModule,
        MatPaginatorModule
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSidenavModule,
        MatListModule,
        MatBottomSheetModule,
        MatPaginatorModule
    ]
})

export class MaterialModule { }
