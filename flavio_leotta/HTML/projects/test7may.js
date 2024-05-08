const tempostudentsGrouped = [
  'Gianluca',
  'Marco',
  'Rachele',
  'Sofia',
  'Noemi',
  'Giuseppe',
];
let groupBy = 3;
function dividi() {
  tempostudentsGrouped.sort(tempostudentsGrouped);
  for (let i = 0; (i = tempostudentsGrouped.length); i++) {
    const newArray = tempostudentsGrouped.splice(0, tempostudentsGrouped);

    tempostudentsGrouped.push(newArray);
  }
}
