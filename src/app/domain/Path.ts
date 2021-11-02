import { Course } from "./Course";

export interface Path {
  id: number;
  title: string;
  modules: Course[];
}
