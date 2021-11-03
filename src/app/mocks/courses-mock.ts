import { Course } from "../domain/Course";
import { Level } from "../domain/Level";

export const COURSES: Course[] = [
  { id: 1, title: "Course number One", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eos, quia similique doloremque.', chapters: [ "Course One Introduction", "Course One, Chap 1", "Course One Conclusion"], level: Level.INTERMEDIATE },
  { id: 2, title: "Course number Two", description:'Lorem ipsum dolor sit amet consectetur. Nulla aliquam excepturi eos, quia similique doloremque.', chapters: [ "Course Two Introduction", "Course Two, Chap 2", "Course Two Conclusion"], level: Level.ADVANCED },
  { id: 3, title: "Course number Three", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam excepturi eos, quia similique doloremque.', chapters: [ "Course Three Introduction", "Course Three, Chap 3", "Course Three Conclusion"], level: Level.ADVANCED },
  { id: 4, title: "Course number Four", description:'Lorem ipsum dolor sit amet consectetur elit. Nulla aliquam excepturi eos, quia similique doloremque.', chapters: [ "Course Four Introduction", "Course Four, Chap 4", "Course Four Conclusion"], level: Level.BEGINNER },
];
