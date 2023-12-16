let grades = [100, 50, 90, 60, 80, 70];

grades = grades.sort(descendingSort);
grades.forEach(print); // 100 90 80 70 60 50

grades = grades.sort(ascendingSort);
grades.forEach(print); // 50 60 70 80 90 100

function descendingSort(x, y) {
  return y - x;
}
function ascendingSort(x, y) {
  return x - y;
}

function print(element) {
  console.log(element);
}
