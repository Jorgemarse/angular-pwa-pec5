import { Component, OnInit } from '@angular/core';
import { ComponentListService } from 'src/app/services/components-list.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-components-list',
  templateUrl: './components-list.component.html',
  styleUrls: ['./components-list.component.css'],
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
export class ComponentsListComponent implements OnInit {
  view: string | undefined;
  images: any[] = [];
  constructor(private componentListService: ComponentListService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.componentListService
      .getAllImages()
      .subscribe((images) => (this.images = Object.values(images)));
      this.route.queryParams.subscribe(params => {
        this.view = params['view'] || 'cards'; // Default to 'cards' view
      });
  }
}