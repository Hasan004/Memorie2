import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Card} from "../../model/card";
import {CardService} from "../../services/card.service";
import {CommonModule} from '@angular/common';
import {timeout} from "rxjs";


@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {
  @Input() card
  @Output() rating = new EventEmitter<Card>();

  constructor(public cardService : CardService) {

  }

  ngOnInit(): void {
  }

  displayAnimal(event, dier : Card) {
    console.log(`rating voor: ${dier.dier}`)
    this.rating.emit(dier)
}

}
