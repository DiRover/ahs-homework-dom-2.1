// получаем поле
const cells = document.getElementsByClassName('field_cell');
// получаем рандомный индекс
export default function getRandom(min, max, num) {
  const rtn = Math.floor(Math.random() * (max - min + 1) + min);
  return rtn === num ? getRandom(min, max, num) : rtn;
}
// const img = './goblin.png'
let index = getRandom(0, (cells.length - 1));
// устанавливаем гоблина в первоначальное положение
// cells[index].firstChild.src = img;
// имя картинки взято из dist
cells[index].firstChild.setAttribute('src', './img/goblin.png');
// добавляем значение для активной ячйки с гоблином
cells[index].classList.add('active');
// функция для смены поля с гоблином
function replaceGoblin() {
  const goblin = document.getElementsByClassName('active');
  // goblin[0].firstChild.src = '';
  goblin[0].firstChild.removeAttribute('src');
  goblin[0].classList.remove('active');
  index = getRandom(0, (cells.length - 1), index);
  // cells[index].firstChild.src = img;
  cells[index].firstChild.setAttribute('src', './img/goblin.png');
  cells[index].classList.add('active');
}

setInterval(replaceGoblin, 2000);
