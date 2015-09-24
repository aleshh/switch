function toggleIt() {
  if (state == state1) {
    toggle.innerHTML = state2;
    state = state2;
  } else {
    toggle.innerHTML = state1;
    state = state1;
  }
}

var test = false;

var state1 = 'on';
var state2 = 'off';
var state = state1;

var toggle = document.getElementById('switch');
toggle.innerHTML = state1;
toggle.addEventListener('click', toggleIt, false);