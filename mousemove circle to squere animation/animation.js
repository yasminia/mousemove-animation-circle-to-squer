window.onmousemove = divCreator
let mouse = {
  x: null,
  y: null
}
const colorArray = ['#ccc', '#cb9', '#6cf'];
function divCreator(e) {
  const div = document.createElement('div');
  div.classList.add('circle');
  document.body.appendChild(div);
  mouse.x = e.x;
  mouse.y = e.y;
  const colors = colorArray[Math.floor(Math.random() * colorArray.length)]
  div.style.borderColor = colors;
  div.style.left = mouse.x + 'px';
  div.style.top = mouse.y + 'px';
  setInterval(() => { div.remove() }, 400)


}