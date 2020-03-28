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

      const error = true;

      if(!error) {
        resolve();
        console.log("resolve fonksiyonu çalıştı");
      } else {
        reject("Something went wrong"); 
      }
    }, 5000 )

  } )
}

createPost( { title: "Post Three", body: "This is post three" } )
  .then( getPosts )
  .catch( error => { console.log(error) } );
