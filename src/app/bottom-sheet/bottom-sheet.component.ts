import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
    selector: 'app-bottom-sheet',
    templateUrl: './bottom-sheet.component.html',
    styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnInit {

    constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>) { }

    ngOnInit(): void {
    }

}
