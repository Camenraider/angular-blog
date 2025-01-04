import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent {

  imageURL = "https://archive.org/download/placeholder-image/placeholder-image.jpg";

  @Input()
  photoCover: string = "";
  @Input()
  cardTitle: string = "";
  @Input()
  cardDescription: string= "";
  @Input()
  Id:number= 0

  constructor(){

  }
  ngOnInit(): void {
    if (this.photoCover === null) {
      this.imageURL = this.photoCover;
    } else {
      this.imageURL = this.photoCover;
    }
  }
}
