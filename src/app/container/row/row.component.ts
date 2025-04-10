import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LetterComponent } from './letter/letter.component';
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'app-row',
  imports: [LetterComponent, NgForOf],
  templateUrl: './row.component.html',
  styleUrl: './row.component.css'
})
export class RowComponent {
  @Input() word!: string;
  @Input() disableInputs: boolean = false;

  letters = ['', '', '', '', '']
  @Output() guess = new EventEmitter<string[]>();

  change($event: any) {
    switch ($event.target.id) {
      case 'ltr0': {
        this.letters[0] = $event.target.value;
        break;
      }
      case 'ltr1': {
        this.letters[1] = $event.target.value;
        break;
      }
      case 'ltr2': {
        this.letters[2] = $event.target.value;
        break;
      }
      case 'ltr3': {
        this.letters[3] = $event.target.value;
        break;
      }
      case 'ltr4': {
        this.letters[4] = $event.target.value;
        break;
      }
    }
    if (this.letters.indexOf('') == -1) {
      if ($event.key == 'Enter') {
        this.guess.emit(this.letters)
        this.colorInputs()
        this.disableInputs = true;
      }
    }
  }

  colorInputs() {
    const word = this.word.split('');
    for (let i = 0; i < 5; i++) {
      document.getElementById('ltr' + i)!.style.background = 'lightgrey';
      if (word.indexOf(this.letters[i]) !== -1) {
        document.getElementById('ltr' + i)!.style.background = 'yellow';
      }
      if (word[i] === this.letters[i]) {
        document.getElementById('ltr' + i)!.style.background = 'lightgreen';
      }
      
    }
  }
}
