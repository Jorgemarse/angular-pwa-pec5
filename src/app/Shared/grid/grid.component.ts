import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  @Input() title: string | undefined;
  @Input() image: string | undefined;
  @Input() subtitle: string | undefined;
}
