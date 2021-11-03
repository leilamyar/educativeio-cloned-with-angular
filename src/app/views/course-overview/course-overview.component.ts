import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/domain/Course';
import { ResourcesService } from 'src/app/services/resources.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.css']
})
export class CourseOverviewComponent implements OnInit {

  course?: Course;
  courses: Course[] = [];

  constructor(private resourceSv: ResourcesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.resourceSv.getCourses()
    .subscribe(data => this.courses = data);
    
    let routeParams = this.route.snapshot.paramMap;
    let idFromPrams = Number(routeParams.get('id'));
    
    this.course = this.courses.find(c => c.id === idFromPrams);
  }

}
