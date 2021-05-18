import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {createCustomElement} from '@angular/elements';
import { FormsModule } from '@angular/forms';

import { PoModule } from '@po-ui/ng-components';

import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PoModule
  ],
  providers: []
})
export class AppModule {
  constructor(injector: Injector) {
    const custom = createCustomElement(HeroComponent, {injector});
    customElements.define('app-hero', custom);
  }

  ngDoBootstrap() {}
}
