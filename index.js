let body = document.querySelector("body");

var section = document.createElement("SECTION");
section.setAttribute(
  "class",
  "d-flex flex-column justify-content-center align-items-center min-vh-100"
);

var heading = document.createElement("H1");
heading.setAttribute("id", "title");
heading.innerHTML = "Calculator";
section.appendChild(heading);

var p = document.createElement("P");
p.setAttribute("id", "description");
p.innerHTML = "This is a calculator";
section.appendChild(p);

var div = document.createElement("DIV");
div.setAttribute("class", "col-12 col-md-6 bg-secondary p-3");
section.appendChild(div);

var inputResult = document.createElement("INPUT");
inputResult.setAttribute("type", "text");
inputResult.setAttribute("class", "form-control mb-2 calc");
inputResult.setAttribute("id", "result");
div.appendChild(inputResult);

var div1 = document.createElement("DIV");
div1.setAttribute("class", "d-flex");
div.appendChild(div1);

var clearBtn = document.createElement("BUTTON");
clearBtn.setAttribute("id", "clear");
clearBtn.innerHTML = "c";
clearBtn.setAttribute(
  "class",
  "btn btn-secondary col-3 p-2 text-center text-white key"
);
div1.appendChild(clearBtn);

var backspaceBtn = document.createElement("BUTTON");
backspaceBtn.setAttribute("id", "backspace");
backspaceBtn.innerHTML = "<--";
backspaceBtn.setAttribute(
  "class",
  "btn btn-secondary col-3 p-2 text-center text-white key"
);
div1.appendChild(backspaceBtn);

var dotBtn = document.createElement("BUTTON");
dotBtn.setAttribute("id", "dot");
dotBtn.innerHTML = ".";
dotBtn.setAttribute(
  "class",
  "btn btn-secondary col-3 p-2 text-center text-white key"
);
div1.appendChild(dotBtn);

var starBtn = document.createElement("BUTTON");
starBtn.setAttribute("id", "star");
starBtn.innerHTML = "*";
starBtn.setAttribute(
  "class",
  "btn btn-secondary col-3 p-2 text-center text-white key"
);
div1.appendChild(starBtn);

var div2 = document.createElement("DIV");
div2.setAttribute("class", "d-flex");
div.appendChild(div2);

var btn7 = document.createElement("BUTTON");
btn7.setAttribute("id", "7");
btn7.innerHTML = "7";
btn7.setAttribute(
  "class",
  "btn btn-secondary col-3 p-2 text-center text-white key number"
);
div2.appendChild(btn7);

var btn8 = document.createElement("BUTTON");
btn8.setAttribute("id", "8");
btn8.innerHTML = "8";
btn8.setAttribute(
  "class",
  "btn btn-secondary col-3 p-2 text-center text-white key number"
);
div2.appendChild(btn8);

var btn9 = document.createElement("BUTTON");
btn9.setAttribute("id", "9");
btn9.innerHTML = "9";
btn9.setAttribute(
  "class",
  "btn btn-secondary col-3 p-2 text-center text-white key number"
);
div2.appendChild(btn9);

var slashBtn = document.createElement("BUTTON");
slashBtn.setAttribute("id", "slash");
slashBtn.innerHTML = "/";
slashBtn.setAttribute(
  "class",
  "btn btn-secondary col-3 p-2 text-center text-white key key"
);
div2.appendChild(slashBtn);

var div3 = document.createElement("DIV");
div3.setAttribute("class", "d-flex");
div.appendChild(div3);

var btn4 = document.createElement("BUTTON");
btn4.setAttribute("id", "4");
btn4.innerHTML = "4";
btn4.setAttribute(
  "class",
  "btn btn-secondary col-3 p-2 text-center text-white key number"
);
div3.appendChild(btn4);

var btn5 = document.createElement("BUTTON");
btn5.setAttribute("id", "5");
btn5.innerHTML = "5";
btn5.setAttribute(
  "class",
  "btn btn-secondary col-3 p-2 text-center text-white key number"
);
div3.appendChild(btn5);

var btn6 = document.createElement("BUTTON");
btn6.setAttribute("id", "6");
btn6.innerHTML = "6";
btn6.setAttribute(
  "class",
  "btn btn-secondary col-3 p-2 text-center text-white key number"
);
div3.appendChild(btn6);

var btnSub = document.createElement("BUTTON");
btnSub.setAttribute("id", "subtract");
btnSub.innerHTML = "-";
btnSub.setAttribute(
  "class",
  "btn btn-secondary col-3 p-2 text-center text-white key key"
);
div3.appendChild(btnSub);

var div4 = document.createElement("DIV");
div4.setAttribute("class", "d-flex");
div.appendChild(div4);

var btn1 = document.createElement("BUTTON");
btn1.setAttribute("id", "1");
btn1.innerHTML = "1";
btn1.setAttribute(
  "class",
  "btn btn-secondary col-3 p-2 text-center text-white key number"
);
div4.appendChild(btn1);

var btn2 = document.createElement("BUTTON");
btn2.setAttribute("id", "2");
btn2.innerHTML = "2";
btn2.setAttribute(
  "class",
  "btn btn-secondary col-3 p-2 text-center text-white key number"
);
div4.appendChild(btn2);

var btn3 = document.createElement("BUTTON");
btn3.setAttribute("id", "3");
btn3.innerHTML = "3";
btn3.setAttribute(
  "class",
  "btn btn-secondary col-3 p-2 text-center text-white key number"
);
div4.appendChild(btn3);

var btnAdd = document.createElement("BUTTON");
btnAdd.setAttribute("id", "add");
btnAdd.innerHTML = "+";
btnAdd.setAttribute(
  "class",
  "btn btn-secondary col-3 p-2 text-center text-white key key"
);
div4.appendChild(btnAdd);

var div5 = document.createElement("DIV");
div5.setAttribute("class", "d-flex");
div.appendChild(div5);

var btn0 = document.createElement("BUTTON");
btn0.setAttribute("id", "0");
btn0.innerHTML = "0";
btn0.setAttribute(
  "class",
  "btn btn-secondary col-3 p-2 text-center text-white key number"
);
div5.appendChild(btn0);

var btnOpen = document.createElement("BUTTON");
btnOpen.setAttribute("id", "open-bracket");
btnOpen.innerHTML = "(";
btnOpen.setAttribute(
  "class",
  "btn btn-secondary col-3 p-2 text-center text-white key key"
);
div5.appendChild(btnOpen);

var btnClose = document.createElement("BUTTON");
btnClose.setAttribute("id", "close-bracket");
btnClose.innerHTML = ")";
btnClose.setAttribute(
  "class",
  "btn btn-secondary col-3 p-2 text-center text-white key key"
);
div5.appendChild(btnClose);

var btnEqual = document.createElement("BUTTON");
btnEqual.innerHTML = "=";
btnEqual.setAttribute(
  "class",
  "btn btn-secondary col-3 p-2 text-center bg-primary text-white"
);
btnEqual.setAttribute("id", "equal");
div5.appendChild(btnEqual);

body.appendChild(section);

let numbers = document.querySelectorAll(".number");
let keys = document.querySelectorAll(".key");
let inp = document.getElementById("result");

window.addEventListener("keypress", (e) => {
  let num = parseInt(e.key);
  if (num >= 0 && num <= 9) {
    inp.value += e.key;
  } else {
    alert("Only numbers are allowed");
  }
});

keys.forEach((key) => {
  key.addEventListener("click", (event) => {
    let key = event.target.innerText;
    if (key === "c") {
      inp.value = "";
      return;
    }
    if (key === "<--") {
      inp.value = inp.value.slice(
        0,
        inp.value.length ? inp.value.length - 1 : 0
      );
      return;
    }
    inp.value += key;
  });
});

document.getElementById("equal").addEventListener("click", (event) => {
  try {
    let answer = eval(inp.value);
    inp.value = answer;
  } catch {
    alert("Correct the equation");
  }
});
