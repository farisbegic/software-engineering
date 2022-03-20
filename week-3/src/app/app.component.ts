import {Component} from '@angular/core';
import Block from "./interfaces/block";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week-3';
  elements: Array<Block> = [];

  onSubmit(element : Block) {
    this.elements.push(element)
  }

  onDelete(id: number) {
    let index = this.elements.map((element: Block) => element.id).indexOf(id);
    this.elements.splice(index, 1);
  }
}
