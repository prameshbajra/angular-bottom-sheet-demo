import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
    selector: 'app-bottom-sheet',
    templateUrl: './bottom-sheet.component.html',
    styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnInit {

    public familyDetails: any[] = [];
    public rentDetails: any[] = [];
    constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
        this.familyDetails = data.familyDetails;
        this.rentDetails = data.rentDetails;
    }

    ngOnInit(): void {
    }

}
