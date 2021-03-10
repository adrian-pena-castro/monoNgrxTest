import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { NxModule } from '@nrwl/angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreRouterConnectingModule, routerReducer, RouterState  } from '@ngrx/router-store';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
      {router: routerReducer,},
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
    StoreDevtoolsModule.instrument()],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
