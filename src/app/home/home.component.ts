import { Component } from '@angular/core';
import { Card } from '../card';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  testCard: Card = {
    title: "SEO",
    description: "Learn Search Engine Optimization with me!",
    imageURL: "blank",
    pageLink: "blank"
  }
}
