import { Article } from "./Article";

export interface CHAPTER {
  courseId: number;
  chapId: number;
  title: string;
  articles: Article[];
}