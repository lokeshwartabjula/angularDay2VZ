import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SearchComponent } from './search/search.component';
import { FetchOperatorComponent } from './fetch-operator/fetch-operator.component';
import { ShowToursComponent } from './show-tours/show-tours.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    LoginFormComponent,
    SearchComponent,
    FetchOperatorComponent,
    ShowToursComponent    //when ng g <comp_name> is executed, it will be mentioned in the declarations automatically... but the developer only should add in bootstrap if needed
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpClient,
  ],
  bootstrap: [AppComponent] //components declared here will be loaded in index.html others which are not declared here are loaded in app.component.html
})
export class AppModule { }

// @ngmodule is a decorator to tell that appmodule is a module class and not component class
