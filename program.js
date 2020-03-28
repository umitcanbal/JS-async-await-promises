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

function createPost(post, callbackFonksiyonu) {
  console.log("create post fonksiyonu çağrıldı")
  setTimeout( () => {
    posts.push(post);
    callbackFonksiyonu();
  }, 5000 )
}

createPost( { title: "Post Three", body: "This is post three" }, getPosts );
