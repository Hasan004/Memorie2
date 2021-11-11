import { Injectable } from '@angular/core';
import {Card} from "../model/card";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  shuffle(array: Card[]) {
    let copy = [], n = array.length, i;

    // While there remain elements to shuffle…
    while (n) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * array.length);

      // If not already shuffled, move it to the new array.
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
    return copy;
  }

  constructor() { }
}
