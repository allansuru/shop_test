import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./containers/home/home.component";
import { SharedModule } from "./shared/shared.module";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormModule } from "./containers/form/form.module";

import { StoreModule, MetaReducer } from "@ngrx/store";
import { reducers, effects } from "./store";
import { EffectsModule } from "@ngrx/effects";
import { storeFreeze } from "ngrx-store-freeze";
import { ShopService } from "./services/shop.service";
import { HttpClientModule } from "@angular/common/http";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { DialogOkComponent } from "./containers/form/dialog-ok/dialog-ok.component";

const environment = {
  development: true,
  production: false
};

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

@NgModule({
  declarations: [AppComponent, HomeComponent, DialogOkComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    SharedModule,
    FormModule,
    environment.development ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule {}
