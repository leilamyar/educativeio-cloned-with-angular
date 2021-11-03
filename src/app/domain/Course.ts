import { Level } from "./Level";
import { Resource } from "./Resource";

export interface Course extends Resource {
  chapters: string[];
  level: Level
}
