import React from 'react';
import Image from '../../assets/images/anthonypena-2.jpeg'

function About(props) {

  const {
    currentCategory
  } = props;

  // console.log(currentCategory);

  if (currentCategory === "ABOUT") {

    return (
      <section className="my-5 aboutStyle">
        <div className="aboutContainers aboutImage">
          <img src={Image} className="my-2 " alt="cover" />
        </div>
        <div className=" aboutContainers aboutText">
          <p className="aboutTextTitle">
            Software Engineer
          </p>
          <p>
            Johns Hopkins University  Graduate
          </p>
          <p>
            Currently a Software Engineer Intern at <a className="aboutLink" target="_blank" rel="noopener noreferrer" href="https://www.splice.com">Splice</a>
          </p>
        </div>
      </section>
    );

  } else {
    return (<h1> </h1>);
  }

}

export default About;
