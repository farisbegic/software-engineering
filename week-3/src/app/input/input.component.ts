import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  text: string = '';
  color: string = '';
  type: string = '';
  @Input() elements: any;

  onChangeText(value: any) {
    this.text = value;
  }

  onChangeColor(value: any) {
    this.color = value;
  }

  onChangeType(value: any) {
    this.type = value;
  }

  onSubmit({ text, color, type }: any) {
    const arr = this.elements.push({
      id: new Date().getTime(),
      text,
      color,
      type
    })
  }
}
