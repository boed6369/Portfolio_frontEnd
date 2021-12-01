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
      <p>I am Bobby, a Full Stack developer with a strong work ethic and a passion for learning. I am new to the software engineering field and I can not wait to learn as much as I can. My main strengths are staying cool under pressure and working hard. The best example I can give is that I finished a 3 month immersive software engineering course, while working full time. It came out to around 100 hours a week of work/study. I cant wait to show you my dedication instead of simply saying it. If you are interested please feel free to contact me. Take a look at my <a href="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=ddfb4a75ae&attid=0.1&permmsgid=msg-f:1717963877011897250&th=17d76f0b423f3ba2&view=att&disp=inline&saddbat=ANGjdJ9BxkH512_X_RitFooYbECOCUQigFpnQ0Bd8kfwf_isb9y0WKTkpZWuvYxZ3CRXaFP73NJHGGXVLkn689RvVGMzlaL3tQ2jtngjswr-O3QPC9ggML-yewGVgDKF_nPr_DJLBbTc05pVvo1d5Qu7lm9kOp_WCYR73SJ5V9WVUKChVIEm8qOdFBlEI8oB1cAIfMQSFQ_aKLC4vo7Y8ExKdyhXxQxthYlDsxqJNiloiBxoThkWrBbMeXlhvHQk5etryoy8xwk_ufAm75IvRqmoVWjCrbtHRiuM2P1Yx3ruKErAnClcjoo1iREawHWVi9AZpAbA0rUU8wz4AsOxwMrQ2reyfTagMb1qEfshc2afoasTF7UFiqUWOCTkw0waWGrbOS3RWj8LTnc0OKfpM2JFC3Nio_IDGkkrb5mT--XtRF-kjBeIF_6O3fc_muAmeBfNsesCuOUqV1x-jPA_K7II2M0d2y0MiiPW6XXYfuGJSw8v-9enWrxIwueUdEH-MZMoaS_hbXW-ujIAGs3EMVEgSn2HV8lZ1DXv8cRZQdF8LQVmh9-KfRMjBH9y6R5uZuIc8jmhGrVkRceUulGBnFVTc8qWpRNHdDi4H9wai6aeWzbccYkWFrnwV1wgcXy64jIbz47uzXuFgNgDzT3zHqwuuPH-GVE02xzQmRglYRNoz-4IbEoUqettXDS0w-I">resume!</a><br></br></p>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;