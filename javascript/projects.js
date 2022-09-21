function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts??_start=0&_end=1")
    .then((response) => response.json())
    .then((items) => {
      let dataProject = "";

      items.forEach((item) => {
        dataProject += `
    
 <article class="projectPage">

 <h1>${item.title.split(" ")[0]} ${item.title.split(" ")[1]}</h1>
 <div class="projectPage-type">
     <h3>Ui Design & App Development</h3>
     <div>
         Completed on
         <span class="projectDate">2/2/22</span>
     </div>
 </div>
 <article >
     <div class="image-wrapper">
         <img
             src="../images/projects-section/1.jpg"
             alt="Project image"
             class="projectPage-img"
         />
     </div>
    <div class="project-textDescription">
          ${item.body} 
     </div>
 </article>
</article>`;
      });

      document.querySelector(".projectPageSection").innerHTML = dataProject;
    })
    .catch((error) => console.log(error));
}
getPosts();
