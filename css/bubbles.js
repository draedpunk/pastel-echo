const colours = ["#a6f", "#60f", "#60f", "#a6f", "#ccc"];
const bubblesCount = 66; // qantidade de bolhas
const overOrUnder = "over"; // posiçao das bolhas
let swide = 800, shigh = 600;
let bubb = [], bubbx = [], bubby = [], bubbs = [];

function addLoadEvent(func) {
  const oldOnload = window.onload;
  window.onload = typeof oldOnload !== "function" ? func : () => { oldOnload && oldOnload(); func(); };
}

function createDiv(height, width) {
  const div = document.createElement("div");
  div.style.position = "absolute";
  div.style.height = height;
  div.style.width = width;
  div.style.overflow = "hidden";
  div.style.backgroundColor = "transparent";
  return div;
}

function initBubbles() {
  if (document.getElementById) {
    const boddie = document.createElement("div");
    boddie.style.position = "fixed";
    boddie.style.top = "0px";
    boddie.style.left = "0px";
    boddie.style.overflow = "visible";
    boddie.style.width = "1px";
    boddie.style.height = "1px";
    boddie.style.backgroundColor = "transparent";
    boddie.style.zIndex = "0";
    document.body.appendChild(boddie);

    setWidth();
    for (let i = 0; i < bubblesCount; i++) {
      createBubble(boddie, i);
    }
    bubble();
  }
}

// criar uma bolha
function createBubble(boddie, i) {
  const rats = createDiv("3px", "3px");
  const div1 = createDiv("auto", "auto");
  rats.appendChild(div1);
  div1.style.top = "1px";
  div1.style.left = "0px";
  div1.style.bottom = "1px";
  div1.style.right = "0px";
  div1.style.borderLeft = `1px solid ${colours[3]}`;
  div1.style.borderRight = `1px solid ${colours[1]}`;

  const div2 = createDiv("auto", "auto");
  rats.appendChild(div2);
  div2.style.top = "0px";
  div2.style.left = "1px";
  div2.style.right = "1px";
  div2.style.bottom = "0px";
  div2.style.borderTop = `1px solid ${colours[0]}`;
  div2.style.borderBottom = `1px solid ${colours[2]}`;

  const div3 = createDiv("auto", "auto");
  rats.appendChild(div3);
  div3.style.left = "1px";
  div3.style.right = "1px";
  div3.style.bottom = "1px";
  div3.style.top = "1px";
  div3.style.backgroundColor = colours[4];
  div3.style.opacity = 0.5;

  boddie.appendChild(rats);
  bubb[i] = rats.style;
  bubb[i].zIndex = (overOrUnder === "over") ? "1001" : "0";
}

// inicia o movimento
function bubble() {
  for (let c = 0; c < bubblesCount; c++) {
    if (!bubby[c] && Math.random() < 0.333) {
      bubb[c].left = (bubbx[c] = Math.floor(swide / 6 + Math.random() * swide / 1.5) - 10) + "px";
      bubb[c].top = (bubby[c] = shigh) + "px";
      bubb[c].width = "3px";
      bubb[c].height = "3px";
      bubb[c].visibility = "visible";
      bubbs[c] = 3;
      break;
    }
  }
  for (let c = 0; c < bubblesCount; c++) {
    if (bubby[c]) updateBubble(c);
  }
  setTimeout(bubble, 40);
}

// att o movimento da bolha
function updateBubble(i) {
  if (bubby[i]) {
    bubby[i] -= bubbs[i] / 2 + i % 2;
    bubbx[i] += (i % 5 - 2) / 5;
    if (bubby[i] > 0 && bubbx[i] > 0 && bubbx[i] < swide) {
      if (Math.random() < bubbs[i] / shigh * 2 && bubbs[i]++ < 8) {
        bubb[i].width = bubbs[i] + "px";
        bubb[i].height = bubbs[i] + "px";
      }
      bubb[i].top = bubby[i] + "px";
      bubb[i].left = bubbx[i] + "px";
    } else {
      bubb[i].visibility = "hidden";
      bubby[i] = 0;
    }
  }
}

function setWidth() {
  let sw_min = 999999;
  let sh_min = 999999;
  if (document.documentElement && document.documentElement.clientWidth) {
    sw_min = Math.min(sw_min, document.documentElement.clientWidth);
    sh_min = Math.min(sh_min, document.documentElement.clientHeight);
  }
  if (typeof self.innerWidth === "number") {
    sw_min = Math.min(sw_min, self.innerWidth);
    sh_min = Math.min(sh_min, self.innerHeight);
  }
  if (document.body.clientWidth) {
    sw_min = Math.min(sw_min, document.body.clientWidth);
    sh_min = Math.min(sh_min, document.body.clientHeight);
  }
  if (sw_min === 999999 || sh_min === 999999) {
    sw_min = 800;
    sh_min = 600;
  }
  swide = sw_min;
  shigh = sh_min;
}

addLoadEvent(initBubbles);