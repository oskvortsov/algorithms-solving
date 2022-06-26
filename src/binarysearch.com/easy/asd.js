function debounce(f, time = 0) {
  let timer = null;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => f.apply(this, args), time);
  }
}


let a = val => console.log('foo' + val)
let b = debounce(a, 100)
b(1)
b(2)
