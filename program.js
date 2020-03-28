const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout( () => {
    let output = "";
    posts.forEach( (post, index) => {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000 )
}

getPosts();





































// function waitfunction() {

//   setInterval( () => { 
//     var a = 5100 + new Date().getTime();

//     while (new Date() < a) {
//     }

//   console.log('while döngüsünün dışındayım');
//   }, 10000 )
// }

// function clickHandler() {
//   console.log('click event handler...');   
// }

// document.addEventListener('click', clickHandler);

// waitfunction();









// function abc()
// {
//   let sayi= 333;

//   while (sayi < 336) {
//     sayi = sayi + 1;
//     yazdir(sayi);
//     console.log(sayi);
//     console.log("while döngüsünün içindeyim");
//   }
//   console.log("while döngüsünün dışındayım");
// }

// function yazdir(x) {
//   x = x + 1;
//   console.log("yazdir fonksiyonundan geliyorum");
//   console.log(x);
// }


// function xyz()
// {
//   abc();
//   console.log('xyz');
// }


// xyz();