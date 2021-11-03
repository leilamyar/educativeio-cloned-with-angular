import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../domain/Course';
import { Path } from '../domain/Path';
import { COURSES } from '../mocks/courses-mock';
import { PATHS } from '../mocks/paths-mock';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor() { }

  getCourses(): Observable<Course[]> {
    const courses = of(COURSES);
    return courses;
  }
  getPaths(): Observable<Path[]> {
    const paths = of(PATHS);
    return paths;
  }
}
