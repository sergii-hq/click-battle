import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { PageContentComponent } from './components/layout/page-content/page-content.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PageContentComponent],
  imports: [CommonModule, RouterLink],
  exports: [CommonModule, HeaderComponent, FooterComponent, PageContentComponent],
})
export class SharedModule {}
