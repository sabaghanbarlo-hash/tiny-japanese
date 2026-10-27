// Adds interactivity to the pre-rendered pages in /courses/: quiz, romaji/English toggles, saved progress.
import { courses } from "./data/courses.js";
import "./app.js";
import { wireLesson, wireOverview, wireAudio } from "./course-view.js";

const root = document.getElementById("course-root");
const course = root && courses.find((c) => c.id === root.dataset.course);
if (course) {
  const lesson = course.lessons.find((l) => l.id === root.dataset.lesson);
  if (lesson) { wireLesson(root, course, lesson); wireAudio(root); }
  else wireOverview(root, course);
}
