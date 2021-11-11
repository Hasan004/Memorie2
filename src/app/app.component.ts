import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Card} from "./model/card";
import {CardService} from "./services/card.service";
import {addError} from "@angular-devkit/build-angular/src/utils/webpack-diagnostics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  buttonCount = 0;
  flippedCards = []
  backgroundColor = 'grey';

  cardArray : Card[] = []

  ngOnInit(): void {
    this.cardArray = []
    this.cardArray.push(new Card('paard'));
    this.cardArray.push(new Card('paard'));

    this.cardArray.push(new Card('hond'));
    this.cardArray.push(new Card('hond'));

    this.cardArray = this.cardService.shuffle(this.cardArray)
  }

  constructor(public cardService : CardService) {
  }

  displayAnimal(event, dier : Card) {
    if (this.flippedCards.length < 2) {
      this.flippedCards.push(dier.dier)
      if(this.flippedCards.length == 2){
        this.checkCardMatch()
      }
    }else{
      this.backgroundColor = 'grey'
      this.flippedCards = []
      this.flippedCards.push(dier.dier)
    }
    console.log(this.flippedCards)
  }

  checkCardMatch(){
    console.log(this.flippedCards[0] + ' ' + this.flippedCards[1])
    if(this.flippedCards[0].dier === this.flippedCards[1].dier){
      alert(`true`)
    }else{
      alert(`combination is not true`)
    }
  }

}
