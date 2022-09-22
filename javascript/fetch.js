function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts??_start=0&_end=3")
    .then((response) => response.json())
    .then((items) => {
      let dataCard = "";

      items.forEach((item) => {
        dataCard += `
        
     <article class="project-article">
     <img src="../images/projects-section/${item.id}.jpg"
     alt="Project image"  class="projectImg"/>
          
    <div class="project-text">
     <h3  class="project-title">${item.title.split(" ")[0]} ${
          item.title.split(" ")[1]
        }</h3>
    <div class="text-dataBody">${item.body}</div>
     <a href="../projects.html" target="_blank" class="project-link">Learn More</a>
    </div>
</article>`;
      });
      document.querySelector(".project-cards").innerHTML = dataCard;
    })
    .catch((error) => console.log(error));
}
getPosts();

/*---------MNEWSLETTER MESSAGE----------*/

let messageShown = false;
const errorMessage = "Oops! Something went wrong while submitting the form.";
const show = document.createElement("p");
show.textContent = errorMessage;
document.querySelector("#log").appendChild(show);

document
  .querySelector(".button-submit")
  .addEventListener("click", function (e) {
    messageShown = !messageShown;
    if (messageShown === true) {
      const wait = setTimeout(() => {
        document.getElementById("log").style.display = "block";
        clearTimeout(wait);
      }, 1000);
    } else {
      document.getElementById("log").style.display = "none";
    }
  });
