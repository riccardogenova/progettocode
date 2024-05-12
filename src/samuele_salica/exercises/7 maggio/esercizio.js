//dividi questo array in gruppi da 3
const studentsGrouped = [
  "Raffaele",
  "Gianluca",
  "Samuele",
  "Rachele",
  "Sofia",
  "Noemi",
];
const studentsDeleted = [];
const groupBy = 3;
studentsDeleted.push(studentsGrouped.splice(0, groupBy));
