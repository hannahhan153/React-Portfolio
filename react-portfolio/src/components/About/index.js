import React from 'react';
import coverImage from "../../assets/cover/coverimageforportfolio.jpeg";

function About() {
    return (
        <section>
            <h1 id="about">Hello, my name is Hannah Han. I had the opportunity to be in the Columbia University's Boot Camp for Full Stack Web Development from 2021 to 2022. I learned many skills and languages. Through this program, I learned I am mostly interested in back-end development, and I am self-motivated and optimistic about finding a solution to a bug or issue I find. 
            The portfolio section of this application will show the specific languages I used throughout this program and the skills I applied to optimize functionality. 
              </h1>
            <img src={coverImage} className="my-2" style={{ width: "80%" }} alt="cover" />
        </section>
    );
}

export default About;