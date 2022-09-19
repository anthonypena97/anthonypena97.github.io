import React from 'react';
import Spotify from '../../assets/icons/spotify.jpg'
import Book from '../../assets/icons/book.jpg'
import Cloud from '../../assets/icons/cloud.jpg'
import Tape from '../../assets/icons/tape.jpg'
import Hiker from '../../assets/icons/hiker.jpg'
import Controller from '../../assets/icons/controller.jpg'
import Hobby from '../../assets/icons/hobby.jpg'
import Journal from '../../assets/icons/journal.jpg'
import Gol from '../../assets/icons/gol.jpg'

function Portfolio(props) {

  const {
    currentCategory
  } = props;


  if (currentCategory === "PORTFOLIO") {

    return (
      <div className="container portfolioSection">

        <div className="row">

          {/* VIRUAL GALLERY */}
          <div className="col-md">
            <div className="card portfolioBody">
              <img src={Tape} className="card-img-top" alt="..." />
              <ul className="list-group list-group-flush portfolioList">
                <li className="list-group-item portfolioTitle">VIRTUAL GALLERY</li>
                <li className="list-group-item portfolioTitle portfolioDescription">Virtual Gallery rendering 3D models using Three.js and Typescript</li>
                <div className="row">
                  <div className="col portfolioCol">
                    <a href="https://virtual-gallery.io" rel="noreferrer" target="_blank">
                      <li className="list-group-item portfolioLink portfolioSite site">SITE</li>
                    </a>
                  </div>
                  <div className="col portfolioCol">
                    <a href="https://github.com/anthonypena97/threejs-boilerplate" rel="noreferrer" target="_blank">
                      <li className="list-group-item portfolioLink portfolioSite github">GITHUB</li>
                    </a>
                  </div>
                </div>
              </ul>
            </div>
          </div>

          {/* OFFLINE LIBRARY */}
          <div className="col-md">
            <div className="card portfolioBody">
              <img src={Spotify} className="card-img-top" alt="..." />
              <ul className="list-group list-group-flush portfolioList">
                <li className="list-group-item portfolioTitle">OFFLINE LIBRARY</li>
                <li className="list-group-item portfolioTitle portfolioDescription">Website for saving playlists using MySQl and Spotify API</li>
                <div className="row">
                  <div className="col portfolioCol">
                    <a href="https://offline-library.herokuapp.com" rel="noreferrer" target="_blank">
                      <li className="list-group-item portfolioLink portfolioSite site">SITE</li>
                    </a>
                  </div>
                  <div className="col portfolioCol">
                    <a href="https://github.com/anthonypena97/spotify-library" rel="noreferrer" target="_blank">
                      <li className="list-group-item portfolioLink portfolioSite github">GITHUB</li>
                    </a>
                  </div>
                </div>
              </ul>
            </div>
          </div>
          
          {/*Hobbies*/}
          <div className="col-md">
            <div className="card portfolioBody">
              <img src={Hobby} className="card-img-top" alt="..." />
              <ul className="list-group list-group-flush portfolioList">
                <li className="list-group-item portfolioTitle">Hobbies</li>
                <li className="list-group-item portfolioTitle portfolioDescription">Android/iOS App where users can post their hobbies written with Flutter and GraphQL</li>
                <div className="row">
                  <div className="col portfolioCol">
                    <a href="https://github.com/anthonypena97/flutter-graphql" rel="noreferrer" target="_blank">
                      <li className="list-group-item portfolioLink portfolioSite">GITHUB</li>
                    </a>
                  </div>
                </div>
              </ul>
            </div>
          </div>

        </div>

        <div className="row">

          {/*BOOK TIME*/}
          <div className="col-md">
            <div className="card portfolioBody">
              <img src={Book} className="card-img-top" alt="..." />
              <ul className="list-group list-group-flush portfolioList">
                <li className="list-group-item portfolioTitle">BOOK TIME</li>
                <li className="list-group-item portfolioTitle portfolioDescription">MERN App for saving books using Google Books API and GraphQL</li>
                <div className="row">
                  <div className="col portfolioCol">
                    <a href="https://book-time-app.herokuapp.com/" rel="noreferrer" target="_blank">
                      <li className="list-group-item portfolioLink portfolioSite site">SITE</li>
                    </a>
                  </div>
                  <div className="col portfolioCol">
                    <a href="https://github.com/anthonypena97/book-time" rel="noreferrer" target="_blank">
                      <li className="list-group-item portfolioLink portfolioSite github">GITHUB</li>
                    </a>
                  </div>
                </div>
              </ul>
            </div>
          </div>

          {/* HIKER*/}
          <div className="col-md">
            <div className="card portfolioBody">
              <img src={Hiker} className="card-img-top" alt="..." />
              <ul className="list-group list-group-flush portfolioList">
                <li className="list-group-item portfolioTitle">TRAIL FINDERS</li>
                <li className="list-group-item portfolioTitle portfolioDescription">Web app for saving hiking trails using TrailAPI</li>
                <div className="row">
                  <div className="col portfolioCol">
                    <a href="https://anthonypena97.github.io/trail-finder/" rel="noreferrer" target="_blank">
                      <li className="list-group-item portfolioLink portfolioSite site">SITE</li>
                    </a>
                  </div>
                  <div className="col portfolioCol">
                    <a href="https://github.com/anthonypena97/01-project" rel="noreferrer" target="_blank">
                      <li className="list-group-item portfolioLink portfolioSite github">GITHUB</li>
                    </a>
                  </div>
                </div>
              </ul>
            </div>
          </div>
          
          {/* WEATHER DASHBOARD*/}
          <div className="col-md">
            <div className="card portfolioBody">
              <img src={Cloud} className="card-img-top" alt="..." />
              <ul className="list-group list-group-flush portfolioList">
                <li className="list-group-item portfolioTitle">WEATHER DASHBOARD</li>
                <li className="list-group-item portfolioTitle portfolioDescription">Web App designed like dashboard utility using Openweather API</li>
                <div className="row">
                  <div className="col portfolioCol">
                    <a href="https://anthonypena97.github.io/weather-dashboard/" rel="noreferrer" target="_blank">
                      <li className="list-group-item portfolioLink portfolioSite site">SITE</li>
                    </a>
                  </div>
                  <div className="col portfolioCol">
                    <a href="https://github.com/anthonypena97/weather-dashboard" rel="noreferrer" target="_blank">
                      <li className="list-group-item portfolioLink portfolioSite github">GITHUB</li>
                    </a>
                  </div>
                </div>
              </ul>
            </div>
          </div>

        </div>
        
        <div className="row">
          
          {/* TEAM UP */}
          <div className="col-md">
            <div className="card portfolioBody">
              <img src={Controller} className="card-img-top" alt="..." />
              <ul className="list-group list-group-flush portfolioList">
                <li className="list-group-item portfolioTitle">TEAM UP</li>
                <li className="list-group-item portfolioTitle portfolioDescription">Social media for gamers using React and GraphQL</li>
                <div className="row">
                  <div className="col portfolioCol">
                    <a href="https://protected-depths-21600.herokuapp.com/" rel="noreferrer" target="_blank">
                      <li className="list-group-item portfolioLink portfolioSite site">SITE</li>
                    </a>
                  </div>
                  <div className="col portfolioCol">
                    <a href="https://github.com/Jsieler/team-up" rel="noreferrer" target="_blank">
                      <li className="list-group-item portfolioLink portfolioSite github">GITHUB</li>
                    </a>
                  </div>
                </div>
              </ul>
            </div>
          </div>

          {/*Gol*/} 
          <div className="col-md">
            <div className="card portfolioBody">
              <img src={Gol} className="card-img-top" alt="..." />
              <ul className="list-group list-group-flush portfolioList">
                <li className="list-group-item portfolioTitle">Gol</li>
                <li className="list-group-item portfolioTitle portfolioDescription">Artist Website where visitors may explore a world of sound using Web Audio API</li>
                <div className="row">
                  <div className="col portfolioCol">
                    <a href="https://itwasmyfirstword.com/" rel="noreferrer" target="_blank">
                      <li className="list-group-item portfolioLink portfolioSite">SITE</li>
                    </a>
                  </div>
                </div>
              </ul>
            </div>
          </div>
          
          {/*Deep Thoughts*/}
          <div className="col-md">
            <div className="card portfolioBody">
              <img src={Journal} className="card-img-top" alt="..." />
              <ul className="list-group list-group-flush portfolioList">
                <li className="list-group-item portfolioTitle">Deep Thoughts</li>
                <li className="list-group-item portfolioTitle portfolioDescription">Full Stack App for posting quotes written using React and Amazon Web Services</li>
                <div className="row">
                  <div className="col portfolioCol">
                    <a href="https://github.com/anthonypena97/aws-deepthoughts" rel="noreferrer" target="_blank">
                      <li className="list-group-item portfolioLink portfolioSite github">GITHUB</li>
                    </a>
                  </div>
                </div>
              </ul>
            </div>
          </div>

        </div>

      </div>
    );

  } else {
    return (<h1> </h1>);
  }

}

export default Portfolio;