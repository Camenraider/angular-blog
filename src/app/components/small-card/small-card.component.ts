import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent implements OnInit{

  imageURL:string="https://disneyplusbrasil.com.br/wp-content/uploads/2021/07/Series-Marvel-Disney-Plus-1024x576.jpg"

  @Input()
  photoCover:string=""
  @Input()
  cardTitle:string=""
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
