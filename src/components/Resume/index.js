import React from 'react';
import ResumeFile from '../../assets/documents/AnthonyPena_Resume_April2022.pdf'

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
              JAVASCRIPT
              <br></br>
              REACT
              <br></br>
              DART
              <br></br>
              FLUTTER
              <br></br>
              THREE.JS
              <br></br>
              BOOTSTRAP.JS
              <br></br>
              JQUERY
              <br></br>
              HANDLEBARS
              <br></br>
              GRAPHQL
            </div>

            {/* BACK END PROFICIENCY */}
            <div className="col-md resumeItem">
              BACK END
              <br></br>
              <br></br>
              NODE.JS
              <br></br>
              EXPRESS.JS
              <br></br>
              MYSQL
              <br></br>
              SEQUELIZE
              <br></br>
              MONGODB
              <br></br>
              RESTFUL API
              <br></br>
              AWS
            </div>

            {/* DEVELOPERS TOOLS UNDER MY BELT */}
            <div className="col-md resumeItem">
              DEV TOOLS
              <br></br>
              <br></br>
              VSCODE
              <br></br>
              ANDROID STUDIO
              <br></br>
              GIT
              <br></br>
              JEST
              <br></br>
              INSOMNIA
              <br></br>
              WORKBENCH
              <br></br>
              MONGO ATLAS
              <br></br>
              APOLLO STUDIO
              <br></br>
              NETLIFY
              <br></br>
              HEROKU
              <br></br>
              WALDO
              <br></br>
              KANBAN
              <br></br>
              PHOTOSHOP
              <br></br>
              BLENDER
            </div>
          </div>
        </div>

        {/* DOWNLOAD TO MY RESUME */}
        <div className="resumeDownload">

          <a href={ResumeFile} className="resumeButton" download="ANTHONYPENA_RESUME_2022.pdf" target="_blank" rel="noopener noreferrer" >
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