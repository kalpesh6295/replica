import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { TopHookComponent } from './top-hook/top-hook.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './header/logo/logo.component';
import { SearchComponent } from './header/search/search.component';
import { CartComponent } from './header/cart/cart.component';
import { SignInComponent } from './header/sign-in/sign-in.component';
import { SlidersComponent } from './sliders/sliders.component';
import { CataloguesComponent } from './sliders/catalogues/catalogues.component';
import { ResourcesComponent } from './sliders/resources/resources.component';
import { StoriesComponent } from './sliders/stories/stories.component'


const appRoutes: Routes= [
  {path:'resources', component: ResourcesComponent},
  {path:'catalogues', component: CataloguesComponent},
  {path:'stories' ,component: StoriesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TopHookComponent,
    HeaderComponent,
    LogoComponent,
    SearchComponent,
    CartComponent,
    SignInComponent,
    SlidersComponent,
    CataloguesComponent,
    ResourcesComponent,
    StoriesComponent,  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
