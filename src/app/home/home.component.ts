import { Component } from '@angular/core';
import { Card } from '../card';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  tutorials: Card [] = [
    {
      title: "Angular",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageURL: "assets/angular.png",
      pageLink: "#"
    },
    {
      title: "React",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageURL: "assets/react.png",
      pageLink: "#"
    },
    {
      title: "SEO",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageURL: "assets/seo.png",
      pageLink: "#"
    }
  ];

  projects: Card [] = [
    {
      title: "Little Bald Baker",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageURL: "assets/baldBaker.png",
      pageLink: "#"
    },
    {
      title: "Tetris Game",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageURL: "assets/tetris.png",
      pageLink: "#"
    },
    {
      title: "GO-VID U App",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageURL: "assets/govid.png",
      pageLink: "#"
    }
  ];

}
