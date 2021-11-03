import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from 'src/app/domain/Course';
import { ResourcesService } from 'src/app/services/resources.service';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.css']
})
export class CourseOverviewComponent implements OnInit, OnDestroy {

  private subsc?: Subscription;
  private courses: Course[] = [];
  
  course?: Course;

  constructor(private resourceSv: ResourcesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subsc = this.resourceSv.getCourses()
    .subscribe(data => this.courses = data);
    
    let routeParams = this.route.snapshot.paramMap;
    let idFromPrams = Number(routeParams.get('id'));
    
    this.course = this.courses.find(c => c.id === idFromPrams);
  }

  ngOnDestroy() {
    this.subsc?.unsubscribe();
  }

}
