import { useState, useEffect } from "react";
import { Redirect } from "react-router";

function Projects(props) {
//   // create state to hold projects
//   const [projects, setProjects] = useState(null);

//   //create function to make api call
//   const getProjectsData = async () => {
//     //make api call and get response
//     const response = await fetch(props.URL + "projects");
//     // turn response into javascript object
//     const data = await response.json();
//     // set the projects state to the data
//     setProjects(data);
//   };

//   // make an initial call for the data inside a useEffect, so it only happens once on component load
//   useEffect(() => getProjectsData(), []);

// syling 

// define a function that will return the JSX needed once we get the data
//   const loaded = () => {
//     return projects.map((project) => (
//       <div>
//         <h3>{project.name}</h3>
//         <img src={project.image} /><br></br>
//         <a href={project.git}>
//           <button>Github</button>
//         </a>
//         <a href={project.live}>
//           <button>live site</button>
//         </a>
//       </div>
//     ));
//   };

//   return projects ? loaded() : <h1>Loading...</h1>;
// }
return (
  <div >

    <h3>Project Rick and Morty</h3>
    <img className="projects" src="https://i.imgur.com/WWMVywA.png" /><br></br>
    <p>My Very first project. It takes data from a free api and diplays it on screen depending on what number you put in using javascript. I do plan to do more with it in the future however this will be more of a "fun" project so it will be on the back burner. </p>
    <a href="https://github.com/boed6369/project-rick-and-morty">
      <button>Github</button>
    </a>
    <a href="https://project-rick-and-morty.vercel.app/">
      <button>live site</button>
    </a><br/>

    <h3>"Project Warhammer"</h3>
    <img className="projects" src="https://imgur.com/nL9PkH0.png" /><br></br>
    <p>My second project. This is one that I would really like to expand upon. This project mainly uses react.js for the front end and uses mongo.db as my database. Plus it has full crudd fuctionality. It is a warhammer unit creator that I would like to make into an army builder in the future. </p>
    <a href="https://github.com/boed6369/project_Warhammer">
      <button>Github</button>
    </a>
    <a href="https://tranquil-basin-19655.herokuapp.com/unit">
      <button>live site</button>
    </a>
    <h3>Project Age of Sigmar</h3>
    <img className="projects" src="https://imgur.com/UXTGLe7.png" /><br></br>
    <p>My third Project. My first project that works with an API that I made. It is still a work inprogress but I love the idea of making my oen API so this will deifinetly be somthing I expand upon. </p>
    <a href="https://github.com/boed6369/Bobby-project-3-frontend">
      <button>Github</button>
    </a>
    <a href="https://frontend-project3.herokuapp.com/">
      <button>live site</button>
    </a>
  </div>
)
}
export default Projects;