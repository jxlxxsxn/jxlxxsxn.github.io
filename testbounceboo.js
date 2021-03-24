let x = 10,
  y =10,
  dirX = 1,
  dirY = 1;
const speed = 2;
const pallete = ["black", "black", "#black", "#black"];
let boo = document.getElementById("boo");
boo.style.backgroundColor = pallete[0];
let prevColorChoiceIndex = 0;
let black = document.getElementById("black");
const booWidth = boo.clientWidth;
const booHeight = boo.clientHeight;

function getNewRandomColor() {
  const currentPallete = [...pallete]
  currentPallete.splice(prevColorChoiceIndex,1)
  const colorChoiceIndex = Math.floor(Math.random() * currentPallete.length);
  prevColorChoiceIndex = colorChoiceIndex<prevColorChoiceIndex?colorChoiceIndex:colorChoiceIndex+1;
  const colorChoice = currentPallete[colorChoiceIndex];
  return colorChoice;
}
function animate() {
  const screenHeight = document.body.clientHeight;
  const screenWidth = document.body.clientWidth;

  if (y + booHeight >= screenHeight || y < 0) {
    dirY *= -1;
    boo.style.backgroundColor = getNewRandomColor();
  }
  if (x + booWidth >= screenWidth || x < 0) {
    dirX *= -1;

    boo.style.backgroundColor = getNewRandomColor();
  }
  x += dirX * speed;
  y += dirY * speed;
  boo.style.left = x + "px";
  boo.style.top = y + "px";
  window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);
