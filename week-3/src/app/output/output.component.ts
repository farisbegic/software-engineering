import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  @Input() elements: any;

  onDelete(value: any):void {
    let index = this.elements.map((element: { id: any; }) => element.id).indexOf(value);
    this.elements.splice(index, 1);
  }
}
