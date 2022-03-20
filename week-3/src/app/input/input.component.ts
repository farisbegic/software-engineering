import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() elements: any;
  text: string = '';
  font: number = 0;
  color: string = '';
  type: string = '';

  onChangeText(value: any) {
    this.text = value;
  }

  onChangeColor(value: any) {
    this.color = value;
  }

  onChangeType(value: any) {
    this.type = value;
  }

  onSubmit({ text, color, type, font }: any) {
    this.elements.push({
      id: new Date().getTime(),
      text,
      color,
      type,
      font
    })
  }

  onChangeFont(value: any) {
    this.font = value
  }
}
