import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCard } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule, MatSelect } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatSortModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';

const MATERIAL_MODULES = [
    CommonModule,
    MatTabsModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSortModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatDividerModule,
    MatMenuModule,
    FlexLayoutModule,
    MatProgressSpinnerModule
];

@NgModule({
    imports: [
        MATERIAL_MODULES
    ],
    exports: [
        MATERIAL_MODULES
    ],
})
export class MaterialModule {
}
