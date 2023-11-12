import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from "./home/home.component";
import { ContactMeComponent} from "./contact-me/contact-me.component";
import { AboutMeComponent} from "./about-me/about-me.component";

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "contact-me", component: ContactMeComponent},
  {path: "home", component:HomeComponent},
  {path: "about-me", component:AboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
