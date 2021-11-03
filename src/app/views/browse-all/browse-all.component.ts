import { Component, OnInit } from '@angular/core';
import { GalleryType } from 'src/app/domain/GalleryType';

@Component({
  selector: 'app-browse-all',
  templateUrl: './browse-all.component.html',
  styleUrls: ['./browse-all.component.css']
})
export class BrowseAllComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  filterList(technology: string): void {
    console.log(`Filtered Browse All list. Selected: ${technology}`);
  }
  loadMoreCourses(): void {
    console.log('Browse All: Loaded more courses!');
  }

}
