import { Component, OnInit } from '@angular/core';
import { WordleService } from '../../wordle.service';
import { RowComponent } from '../row/row.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  imports: [RowComponent, CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit {

  WORD = 'CHAIR';


  currentRow = 0;
  guess = '';
  
  ROWS = ['']
  constructor(public wordleService: WordleService) {
  }
  ngOnInit() {
    
  }

  guessed(guess: any) {
    console.log(guess)
    this.guess = guess;
    console.log(this.compareGuess(guess))
    this.ROWS.push('')
    this.currentRow++;
  }

  compareGuess(guess: string[]) {
    return guess.join('') === this.WORD;
  }


}
