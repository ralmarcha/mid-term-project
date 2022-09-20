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
