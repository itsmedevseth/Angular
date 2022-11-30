import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './component/crud/crud.component';

import { EmployeeListComponent } from './component/crud/employee-list/employee-list.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './component/crud/home/home.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DateformatePipe } from './shared/pipes/dateformate.pipe';
import { ZeroPipe } from './shared/pipes/zero.pipe';
import { CurrencyPipe } from './shared/pipes/currency.pipe';
import { DirectiveComponent } from './component/directive/directive.component';
import { AppHighlightDirective } from './shared/directive/app-highlight.directive';
import { HoverDirective } from './shared/directive/hover.directive';
import { MouseHoverDirective } from './shared/directive/mouse-hover.directive';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './shared/component/spinner/spinner.component';
import { ConfirmationDialogComponent } from './shared/component/confirmation-dialog/confirmation-dialog.component';
import { EmployeeDetailsComponent } from './component/crud/employee-details/employee-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchFilterPipe } from './shared/pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    EmployeeListComponent,
    HomeComponent,
    DateformatePipe,
    ZeroPipe,
    CurrencyPipe,
    DirectiveComponent,
    AppHighlightDirective,
    HoverDirective,
    MouseHoverDirective,
    SpinnerComponent,
    ConfirmationDialogComponent,
    EmployeeDetailsComponent,
    SearchFilterPipe,
  ],
  imports: [
    NgxPaginationModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
