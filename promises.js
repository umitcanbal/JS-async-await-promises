const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  console.log("get post fonksiyonu çağrıldı")
  setTimeout( () => {
    let output = "";
    posts.forEach( (post, index) => {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 5000 )
}

function createPost(post) {
  return new Promise( (resolve, reject) => {
    console.log("new promise yaratıldı");
    setTimeout( () => {
      posts.push(post);

      const error = false;

      if(!error) {
        resolve();
        console.log("resolve fonksiyonu çalıştı");
      } else {
        reject("Something went wrong"); 
      }
    }, 5000 )

  } )
}

// createPost( { title: "Post Three", body: "This is post three" } )
//   .then( getPosts )
//   .catch( error => { console.log(error) } );

// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise( (resolve, reject) => { setTimeout( resolve, 2000, "goodbye" ) } );

// Promise.all( [promise1, promise2, promise3] )
//   .then( (values) => {console.log(values)} )

const promise4 = fetch("https://jsonplaceholder.typicode.com/users");
console.log(promise4);
promise4.then(response => console.log(response));
promise4.then(response => response.json()).then(data => console.log(data));