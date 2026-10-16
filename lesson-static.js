// Adds interactivity (toggles, quiz) to the pre-rendered lesson pages in /learn/.
import { lessons } from "./data/lessons.js";
import "./app.js";
import { wireLesson } from "./lesson-view.js";

const root = document.getElementById("lesson-root");
const lesson = root && lessons.find((l) => l.id === root.dataset.lesson);
if (lesson) wireLesson(root, lesson);
