window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    postArray.push("", "", "", "", "", "", "", "", "", "");
});
const postContainer = document.querySelector("#postContainer");
const postArray = ["", "", "", "", "", "", "", "", "", ""];

// Get the API data
fetch("http://localhost:3000/posts", {
        method: "GET",
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let observer = new IntersectionObserver((posts) => {
            posts.map(posts => {
                if (posts.isIntersecting) {
                    postArray.push("", "", "", "", "", "", "", "", "", "");

                }
            })
            console.log(posts);
            console.log(postArray);
        }, {
            rootMargin: "0px 0px 0px 0px",
            threshold: 1.0
        });
        postArray.map(function (blank, index, array) {

            /* console.log(blank);
            console.log(index);
            console.log(array); */

            let postDiv = document.createElement("div");
            postDiv.setAttribute("id", index);
            postDiv.classList.add("posts", "col", "card");

            const postData = data[postDiv.id];
            /* console.log(postData); */

            let postTitle = document.createElement("h5");
            postTitle.classList.add("card-title");
            postTitle.textContent = postData["title"];
            postDiv.appendChild(postTitle);


            let postBody = document.createElement("p");
            postBody.classList.add("card-text");
            postBody.textContent = postData["body"];
            postDiv.appendChild(postBody);


            let postBtn = document.createElement("button");
            postBtn.textContent = "Open post"
            postBtn.classList.add("btn", "btn-primary");
            postDiv.appendChild(postBtn);
         

            postContainer.appendChild(postDiv);
        });
<<<<<<< Updated upstream

        const postsInScreen = document.querySelectorAll(".post-container .posts");
        let lastPost = postsInScreen[postsInScreen.length - 1];
        console.log(lastPost);
        observer.observe(lastPost);
    })


 
//     function view() {
 
//   postModal.innerHTML =  `
 
//   <div class="modal-content">
// <h1>hola</h1>
//       <span class="modal-close">Close</span>
//     </div>
// </div>
// `  }
// postModal.addEventListener("click", function (e) {
//   let modal  = e.target.getAttribute("modal")
// })
>>>>>>> Stashed changes
