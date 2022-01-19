import React from 'react';
import ResumeFile from '../../assets/documents/AnthonyPena_Resume_2022.pdf'

function Resume(props) {

  const {
    currentCategory
  } = props;

  // console.log(currentCategory);

  if (currentCategory === "RESUME") {

    // RESUME SECTION
    return (
      <section className="my-5 resumeSection">
        <div className="container">
          <div className="row">

            {/* FRONT END PROFICIENCY */}
            <div className="col-md resumeItem">
              FRONT END
              <br></br>
              <br></br>
              HTML5
              <br></br>
              CSS3
              <br></br>
              REACT
              <br></br>
              VUE
              <br></br>
              WEBGL
              <br></br>
              THREE.JS
              <br></br>
              BOOTSTRAP
              <br></br>
              P5
              <br></br>
              PYTHON
            </div>

            {/* BACK END PROFICIENCY */}
            <div className="col-md resumeItem">
              BACK END
              <br></br>
              <br></br>
              JAVSCRIPT
              <br></br>
              TYPESCRIPT
              <br></br>
              NODE
              <br></br>
              NODE PACKAGES
              <br></br>
              EXPRESS
              <br></br>
              HANDLEBARS
              <br></br>
              MYSQL
              <br></br>
              MONGODB
              <br></br>
              GRAPHQL
            </div>

            {/* DEVELOPERS TOOLS UNDER MY BELT */}
            <div className="col-md resumeItem">
              DEV TOOLS
              <br></br>
              <br></br>
              VSCODE
              <br></br>
              GITHUB
              <br></br>
              JEST
              <br></br>
              INSOMNIA
              <br></br>
              WORKBENCH
              <br></br>
              GRAPHQL STUDIO
              <br></br>
              MONGO ATLAS
              <br></br>
              NETLIFY
              <br></br>
              HEROKU
              <br></br>
              PHOTOSHOP
              <br></br>
              BLENDER
            </div>
          </div>
        </div>

        {/* DOWNLOAD TO MY RESUME */}
        <div className="resumeDownload">

          <a href={ResumeFile} className="resumeButton" download="ANTHONYPENA_RESUME_2021.pdf" target="_blank" rel="noopener noreferrer" >
            DOWNLOAD RESUME
          </a>

        </div >
      </section >
    );

  } else {
    return (<h1> </h1>);
  }

}

export default Resume;