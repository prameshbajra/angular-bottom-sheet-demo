import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { getMatFormFieldDuplicatedHintError } from '@angular/material/form-field';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

    constructor(private _bottomSheet: MatBottomSheet) { }

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


    ngOnInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }


    ELEMENT_DATA: any[] = [
        {
            houseNumber: 7475, ownerName: 'Dev Bajracharya', phoneNumber: 9851050430, email: 'H',
            fullAddress: 'Pasang Lahmu Salik, Chuchepati, Chabahil',
            familyDetails: [{
                'name': 'Poonam Shakya Bajracharya',
                'email': 'poonam2@gmail.com',
                'phoneNumber': 123456789
            }, {
                'name': 'Diya Bajracharya',
                'email': 'deeya2@gmail.com',
                'phoneNumber': 123456789
            }, {
                'name': 'Eku Bajracharya',
                'email': 'eku@gmail.com',
                'phoneNumber': 123456789
            }],
            rentDetails: [{
                'name': 'Person 1',
                'email': 'person1@gmail.com',
                'phoneNumber': 123456789
            }, {
                'name': 'Person 2',
                'email': 'person3@gmail.com',
                'phoneNumber': 123456789
            }, {
                'name': 'Person 3',
                'email': 'person3@gmail.com',
                'phoneNumber': 123456789
            }]
        },
        {
            houseNumber: 2, ownerName: 'Gopal Uncle', phoneNumber: 1151452435, email: 'He',
            fullAddress: 'Pasang Lahmu Salik, Chuchepati, Chabahil',
            familyDetails: [{
                'name': 'Gopal Uncle ko Budi',
                'email': 'gopal2@gmail.com',
                'phoneNumber': 123456789
            }, {
                'name': 'Kripa',
                'email': 'deeya2@gmail.com',
                'phoneNumber': 123456789
            }],
            rentDetails: [{
                'name': 'Person 1',
                'email': 'person1@gmail.com',
                'phoneNumber': 123456789
            }, {
                'name': 'Person 3',
                'email': 'person3@gmail.com',
                'phoneNumber': 123456789
            }]
        },
        { houseNumber: 3, ownerName: 'Gopal Uncle Ko bhai', phoneNumber: 2345245941, email: 'Li', fullAddress: 'Pasang Lahmu Salik, Chuchepati, Chabahil' },
        { houseNumber: 4, ownerName: 'Amar Shrestha', phoneNumber: 9980980122, email: 'Be', fullAddress: 'Pasang Lahmu Salik, Chuchepati, Chabahil' },
        { houseNumber: 5, ownerName: 'Susish haru ko ghar', phoneNumber: 10891634811, email: 'B', fullAddress: 'Pasang Lahmu Salik, Chuchepati, Chabahil' },
        { houseNumber: 6, ownerName: 'Naresh Mama ko ghar', phoneNumber: 121238740107, email: 'C', fullAddress: 'Pasang Lahmu Salik, Chuchepati, Chabahil' },
        { houseNumber: 7, ownerName: 'Dorje ko ghar', phoneNumber: 1498710067, email: 'N', fullAddress: 'Pasang Lahmu Salik, Chuchepati, Chabahil' },
        { houseNumber: 8, ownerName: 'Devendra Mama ko ghar', phoneNumber: 1518729994, email: 'O', fullAddress: 'Pasang Lahmu Salik, Chuchepati, Chabahil' },
        { houseNumber: 9, ownerName: 'Siva uncle ko ghar', phoneNumber: 181289374984, email: 'F', fullAddress: 'Pasang Lahmu Salik, Chuchepati, Chabahil' },
        { houseNumber: 10, ownerName: 'Ramesh Uncle ko ghar', phoneNumber: 201293641797, email: 'Ne', fullAddress: 'Pasang Lahmu Salik, Chuchepati, Chabahil' },
    ];

    displayedColumns: string[] = ['houseNumber', 'ownerName', 'phoneNumber', 'email', 'fullAddress'];
    dataSource = new MatTableDataSource(this.ELEMENT_DATA);

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    showRowData(row: any): void {
        this._bottomSheet.open(BottomSheetComponent, {
            data: row,
        });
    }
}
