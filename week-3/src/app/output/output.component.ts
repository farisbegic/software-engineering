import {Component, EventEmitter, Input, Output} from '@angular/core';
import Block from "../interfaces/block";

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  @Input() elements: any;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  showDelete: boolean = false;

  toggleDelete(value: any) {
    this.showDelete = value.target.checked;
  }

  onDelete(id: number) {
    this.delete.emit(id)
  }
}
