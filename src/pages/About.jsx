import React from 'react'

const About = () => {
  return (
    <div className="about-page">
      <h1 className="lg-heading">
        About <span className="text-secondary">Me</span>
      </h1>
      <h2 className="sm-heading">Let me tell you a few things...</h2>
      
      <div className="about-info">
        <div className="bio-image-container">
          <img src="img/portrait.jpg" alt="Tiago Santos Portrait" className="bio-image" />
        </div>

        <div className="bio">
          <h3 className="text-secondary">BIO</h3>
          <p>
            My name is Tiago Santos and I was born in a small city named Braga, 
            Portugal. I developed a passion for graphic design and arts, as I 
            desired to reflect the beauty of Portugal's people and culture
            through my artwork. From the beginning of my journey as an artistic 
            designer, I have created artwork that gave rise to my passion for 
            digital work. I have studied in the Master of Technology and Digital 
            Art at the University of Minho in Braga. My professional expertise 
            is in animation, illustration, and drawing. I also have experience 
            with typography, photo manipulation, photo retouching and video 
            editing. I have helped many clients with logo and identity design, 
            signage, publications, layout, and package design. 
            You can check out my Work pages and links to review some of my client 
            projects as well as personal projects.
          </p>
        </div>
      </div>

      <div className="jobs-grid">
        <div className="job-card">
          <h3>Designer</h3>
          <h6>Graphics</h6>
          <p>
            My journey as Graphic started early when I first engage a 3 years
            course in Coimbra, Art and Design. As Graphic designer and Artist I
            worked with both text and images. I managed to select the type,
            font, size, color, and line length of headlines, headings, and text.
            Also I decide how images and text will go together on a print or
            webpage, including how much space each will have. Through the use of images,
            text, and color, I am able to transform statistical data into visual graphics 
            and diagrams, which can make complex ideas more accessible. I worked for a typography
            Rolsaco 2018 where my main job was creating business cards, flyers and posters.
          </p>
        </div>

        <div className="job-card">
          <h3>Programmer</h3>
          <h6>Front End Developer</h6>
          <p>
            As a student from the Master Programme in Technology and Digital Art
            (MTAD) of the EEUM I've been part of the organised exhibition "Media
            & Digital Art Exhibition", on the 17th and 18th June of 2016, at the
            Couros Campus of the University of Minho in Guimarães. The art
            installations exposed in this exhibition were an example of the
            result of the skills acquired during the master programme. The exhibition 
            comprised works that explored concepts of interactivity, electronic music, 
            sound design, 3D animation, game design, sensors and computer vision.
          </p>
          <p style={{ marginTop: '1rem' }}>
            <a
              href="http://enginews76.weebly.com/alunos-do-mestrado-em-tecnologia-e-arte-digital-expotildeem-as-suas-obras.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the exhibition site
            </a>
          </p>
        </div>

        <div className="job-card">
          <h3>UX/UI Designer</h3>
          <h6>User Interaction</h6>
          <p>
            My first experience as UX/UI Designer was also at the master program
            I was enrolled in. I have done mockups for User Interface Layout,
            studied about Personas and also created the User Experience
            Interface for small mobile application. In 2017 I was part of an
            internship at a company in Brasil with the name of Instituto Stela
            and there I was responsible for the designing of a mobile
            application for macOS and Android. That application worked on the
            concept of the firm website, which the aim was provide a search for
            helping universities and the Employers finding the best candidate. 
            The mobile app I was prototyping was MyRate.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
