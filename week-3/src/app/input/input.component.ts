import {Component, EventEmitter, Output} from '@angular/core';
import Block from "../interfaces/block";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Output() submit: EventEmitter<Block> = new EventEmitter<Block>();
  text: string = '';
  font: string = '';
  color: string = '';
  type: string = '';

  onChangeText(value: string) {
    this.text = value;
  }

  onChangeColor(value: string) {
    this.color = value;
  }

  onChangeType(value: string) {
    this.type = value;
  }

  onChangeFont(value: string) {
    this.font = value
  }

  onSubmit() {
    this.submit.emit({
      id: new Date().getTime(),
      text: this.text,
      color: this.color,
      type: this.type,
      font: this.font
    })
  }
}
