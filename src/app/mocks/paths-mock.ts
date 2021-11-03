import { Level } from "../domain/Level";
import { Path } from "../domain/Path";

export const PATHS: Path[] = [
  { id: 1, title: "Path number One", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eos, quia similique doloremque.',modules: [
    { id: 6, title: "Course number One", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eos, quia similique doloremque.', chapters: [ "Course One Introduction", "Course One, Chap 1", "Course One Conclusion"], level: Level.INTERMEDIATE },
    { id: 7, title: "Course number Two", description:'Lorem ipsum dolor sit amet consectetur. Nulla aliquam excepturi eos, quia similique doloremque.', chapters: [ "Course Two Introduction", "Course Two, Chap 2", "Course Two Conclusion"], level: Level.ADVANCED },
    { id: 8, title: "Course number Three", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam excepturi eos, quia similique doloremque.', chapters: [ "Course Three Introduction", "Course Three, Chap 3", "Course Three Conclusion"], level: Level.ADVANCED }
  ] },
  { id: 2, title: "Path number Two", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eos, quia similique doloremque.', modules: [
    { id: 9, title: "Course number One", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eos, quia similique doloremque.', chapters: [ "Course One Introduction", "Course One, Chap 1", "Course One Conclusion"], level: Level.INTERMEDIATE },
    { id: 10, title: "Course number Two", description:'Lorem ipsum dolor sit amet consectetur. Nulla aliquam excepturi eos, quia similique doloremque.', chapters: [ "Course Two Introduction", "Course Two, Chap 2", "Course Two Conclusion"], level: Level.ADVANCED },
    { id: 11, title: "Course number Three", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam excepturi eos, quia similique doloremque.', chapters: [ "Course Three Introduction", "Course Three, Chap 3", "Course Three Conclusion"], level: Level.ADVANCED },
    { id: 12, title: "Course number Four", description:'Lorem ipsum dolor sit amet consectetur elit. Nulla aliquam excepturi eos, quia similique doloremque.', chapters: [ "Course Four Introduction", "Course Four, Chap 4", "Course Four Conclusion"], level: Level.BEGINNER },
  ]},
  { id: 3, title: "Path number Three", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eos, quia similique doloremque.', modules: [
    { id: 13, title: "Course number One", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eos, quia similique doloremque.', chapters: [ "Course One Introduction", "Course One, Chap 1", "Course One Conclusion"], level: Level.INTERMEDIATE },
    { id: 14, title: "Course number Two", description:'Lorem ipsum dolor sit amet consectetur. Nulla aliquam excepturi eos, quia similique doloremque.', chapters: [ "Course Two Introduction", "Course Two, Chap 2", "Course Two Conclusion"], level: Level.ADVANCED },
    { id: 15, title: "Course number Three", description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquam excepturi eos, quia similique doloremque.', chapters: [ "Course Three Introduction", "Course Three, Chap 3", "Course Three Conclusion"], level: Level.ADVANCED },
    { id: 16, title: "Course number Four", description:'Lorem ipsum dolor sit amet consectetur elit. Nulla aliquam excepturi eos, quia similique doloremque.', chapters: [ "Course Four Introduction", "Course Four, Chap 4", "Course Four Conclusion"], level: Level.BEGINNER },
  ]},
];
