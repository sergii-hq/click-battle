import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { PageContentComponent } from './components/layout/page-content/page-content.component';
import { RouterLink } from '@angular/router';
import { TextFieldComponent } from './components/form/text-field/text-field.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { AsFormControlPipe } from './pipes/as-form-control.pipe';
import { InformationModalComponent } from './components/modals/information-modal/information-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageContentComponent,
    TextFieldComponent,
    AsFormControlPipe,
    InformationModalComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    HeaderComponent,
    FooterComponent,
    PageContentComponent,
    TextFieldComponent,
  ],
})
export class SharedModule {}
