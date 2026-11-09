// Genki I Companion (course id "genki-1"): original lessons that follow the topic order of the Genki I grammar chapters 1-12.
// DRAFT: the Japanese in these files was written by Claude and has NOT been checked by a native speaker. Have it reviewed before you sell the course.
// Lessons live in genki1-part1.js ... genki1-part4.js. After editing run: node build-courses.mjs
import { part1 } from "./genki1-part1.js";
import { part2 } from "./genki1-part2.js";
import { part3 } from "./genki1-part3.js";
import { part4 } from "./genki1-part4.js";

export const genki1Lessons = [...part1, ...part2, ...part3, ...part4];
