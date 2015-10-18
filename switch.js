function toggleIt() {
  if (state == state1) {
    toggle.innerHTML = state2;
    state = state2;
    localStorage.setItem('state', 'state2');
  } else {
    toggle.innerHTML = state1;
    state = state1;
    localStorage.setItem('state', 'state1');
  }
}

function selectAll() {
  this.select();
}

function saveLabel() {
  console.log(this.id + ': ' + this.value);
  localStorage.setItem(this.id, this.value);
}

var test = false;

var state1 = '<div id="on"></div>';
var state2 = '<div id="off"></div>';
var state;
if (localStorage.getItem('state') === 'state2') {
  state = state2;
} else {
  state = state1;
}
var label1 = localStorage.getItem('label1');
var label2 = localStorage.getItem('label2');
if (label1) document.getElementById('label1').value = label1;
if (label2) document.getElementById('label2').value = label2;


var toggle = document.getElementById('switch');
toggle.innerHTML = state;
toggle.addEventListener('click', toggleIt, false);

var labels = document.getElementsByTagName('input');
labels[0].addEventListener('focus', selectAll, false);
labels[1].addEventListener('focus', selectAll, false);
labels[0].addEventListener('blur',  saveLabel, false);
labels[1].addEventListener('blur',  saveLabel, false);
