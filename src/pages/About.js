import { useState, useEffect } from "react";

function About(props) {
  // create state to hold about data
  const [about, setAbout] = useState(null);

  // create function to make api call
  const getAboutData = async () => {
    // make api call and get response
    const response = await fetch(props.URL + "about");
    // turn response into javascript object
    const data = await response.json();
    // set the about state to the data
    setAbout(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getAboutData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div>
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <p>I am Bobby, a Full Stack developer with a strong work ethic and a passion for learning. I am new to the software engineering field and I can not wait to learn as much as I can. My main strengths are staying cool under pressure and working hard. The best example I can give is that I finished a 3 month immersive software engineering course, while working full time. It came out to around 100 hours a week of work/study. I cant wait to show you my dedication instead of simply saying it. If you are interested please feel free to contact me. Take a look at my <a href="https://drive.google.com/file/d/1OwnNgapaZRGmXq26wQliIcLz38l4BToB/view?usp=sharing">resume!</a><br></br></p>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;