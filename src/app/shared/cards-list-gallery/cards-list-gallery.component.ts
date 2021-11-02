import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/domain/Course';
import { GalleryType } from 'src/app/domain/GalleryType';
import { Path } from 'src/app/domain/Path';

@Component({
  selector: 'app-cards-list-gallery',
  templateUrl: './cards-list-gallery.component.html',
  styleUrls: ['./cards-list-gallery.component.css']
})
export class CardsListGalleryComponent implements OnInit {

  // Make a variable reference to Enum
  eGalleryType = GalleryType;

  @Input() galleryType: string = '';

  courses?: Course[];
  paths?: Path[];

  constructor() { }

  ngOnInit(): void {
  }

}
