import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() text: any;
  @Input() color: any;
  @Input() type: any;

  onChangeText(value: any) {
    this.text = value;
  }

  onChangeColor(value: any) {
    this.color = value;
  }

  onChangeType(value: any) {
    this.type = value;
  }
}
