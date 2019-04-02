import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParseService } from '../services/parse.service';
import { PrepodService } from '../services/prepod.service';
import {
  MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule,
  MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule,
  MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule,
  MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule,
  MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule,
  MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SprPrepodComponent } from './spr-prepod/spr-prepod.component';
import { RouterModule } from '@angular/router';
import { KafedrService } from '../services/kafedr.service';
import { SprPrepodDialogComponent } from './spr-prepod-dialog/spr-prepod-dialog.component';
import { SprKafedrComponent } from './spr-kafedr/spr-kafedr.component';
import { SprKafedrDialogComponent } from './spr-kafedr-dialog/spr-kafedr-dialog.component';
import { FakultService } from '../services/fakult.service';
import { SprFakultComponent } from './spr-fakult/spr-fakult.component';
import { SprFakultDialogComponent } from './spr-fakult-dialog/spr-fakult-dialog.component';
import { SprGroupComponent } from './spr-group/spr-group.component';
import { SprGroupDialogComponent } from './spr-group-dialog/spr-group-dialog.component';
import { SprAudComponent } from './spr-aud/spr-aud.component';
import { SprAudDialogComponent } from './spr-aud-dialog/spr-aud-dialog.component';
import { GroupService} from '../services/group.service';
import {AudService} from "../services/aud.service";


const routing = RouterModule.forRoot([
  {path: 'SprPrepod', component: SprPrepodComponent},
  {path: 'SprKaf', component: SprKafedrComponent},
  {path: 'SprFakult', component: SprFakultComponent},
  {path: 'SprGroup', component: SprGroupComponent},
  {path: 'SprAud', component: SprAudComponent}
]);

@NgModule({
  exports: [
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  declarations: []
})
export class TableMaterialModule {}

@NgModule({
  exports: [
  ],
  declarations: [
    AppComponent,
    SprPrepodComponent,
    SprPrepodDialogComponent,
    SprKafedrComponent,
    SprKafedrDialogComponent,
    SprFakultComponent,
    SprFakultDialogComponent,
    SprGroupComponent,
    SprGroupDialogComponent,
    SprAudComponent,
    SprAudDialogComponent
  ],
  entryComponents: [
    SprPrepodDialogComponent,
    SprKafedrDialogComponent,
    SprFakultDialogComponent,
    SprGroupDialogComponent,
    SprAudDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    routing,
    TableMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [ParseService, PrepodService, KafedrService, FakultService, GroupService, AudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
