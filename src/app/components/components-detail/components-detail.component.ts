import { Component, OnInit } from '@angular/core';
import { ComponentDetailService } from 'src/app/services/components-detail.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-components-detail',
  templateUrl: './components-detail.component.html',
  styleUrls: ['./components-detail.component.css'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0.2,
        })
      ),
      transition('void <=> *', animate(1500)),
    ]),
  ],
})
export class ComponentsDetailComponent implements OnInit {
  panelOpenState: boolean = false;
  image: any[] = [];
  constructor(private componentDetailService: ComponentDetailService) {}

  ngOnInit(): void {
    this.componentDetailService
      .getRandomImage()
      .subscribe((image) => (this.image = Object.values(image)));
  }
}