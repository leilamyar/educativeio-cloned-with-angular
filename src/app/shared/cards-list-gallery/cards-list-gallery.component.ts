import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/domain/Course';
import { GalleryType } from 'src/app/domain/GalleryType';
import { Path } from 'src/app/domain/Path';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-cards-list-gallery',
  templateUrl: './cards-list-gallery.component.html',
  styleUrls: ['./cards-list-gallery.component.css']
})
export class CardsListGalleryComponent implements OnInit {

  @Input() galleryType?: string;
  courseType: string = GalleryType.COURSE_GALLERY;
  pathType: string = GalleryType.PATH_GALLERY;

  courses$?: Observable<Course[]>;
  paths$?: Observable<Path[]>;

  constructor(private resourceSv: ResourcesService) { }

  ngOnInit(): void {
    this.courses$ = this.resourceSv.getCourses();
    console.log("GALLERY comp :: Fetched COURSES!");
    this.paths$ = this.resourceSv.getPaths();
    console.log("GALLERY comp :: Fetched PATHS!");
    // this.type = (this.courses) ? GalleryType.COURSE_GALLERY : GalleryType.PATH_GALLERY;
  }
}
