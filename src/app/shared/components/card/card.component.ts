import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from '@app/shared/interfaces/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() movie: IMovie;

  constructor() { }

  ngOnInit(): void {
  }

}
