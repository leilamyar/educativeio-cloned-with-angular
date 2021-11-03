import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/domain/Course';
import { Path } from 'src/app/domain/Path';
import { Resource } from 'src/app/domain/Resource';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() course?: Course;
  @Input() path?: Path;
  data?: Resource;
  type: string = '';

  constructor() { }

  ngOnInit(): void {
    this.data = this.course ? this.course : this.path;
    this.type = (this.course) ? 'course' : 'path';
  }
  doSmth(): void {}
}
