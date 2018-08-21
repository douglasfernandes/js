console.log('ola')

function counter() {
  let i = 0;
  return () => i;
}
const counter1 = counter();
const counter2 = counter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter2());

// function f() {
//   const a = 1;
//   return () => console.log(this.a);
// }
// const m = f()

// const n = m.bind({ a: 2 })

// console.log(n())


function init2() {
  let a = 1; //isso aqui nao eh o contexto eh o escopo

  function display(b) {
    console.log(this.a, b);
  }

  return display;
}
init2()();
init2()(1);
init2().bind(c)(1);
init2().bind({ a: 2 }, 3, 5)(4); // log(this.a, 3)

editor.swagger