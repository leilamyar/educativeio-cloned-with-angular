import { Resource } from "./Resource";
import { Course } from "./Course";

export interface Path extends Resource {
  id: number;
  title: string;
  modules: Course[];
}
