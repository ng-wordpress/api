/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgWordpressApiModule, WpPages } from '@ng-wordpress/api';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app',
  template: `Hallo`
})
class AppComponent {

  constructor(private pages: WpPages) {
    pages.getList().subscribe(data => {
      console.log(data);
    });
  }

}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule, HttpClientModule, NgWordpressApiModule.forRoot() ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
