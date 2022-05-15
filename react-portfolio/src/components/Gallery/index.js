import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/portfolio/lagunaaesthetic.jpeg"

function Gallery(props) {
    const currentCategory = {
        name: "Portfolio",
        description: 
        "Images of six of the developer's applications with links to both the deployed applications and the corresponding GitHub repositoryare displayed"
    };
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p>
            <div className="flex-row">
                <img 
                src={photo}
                alt="Portfolio Example #1"
                className="img-thumbnail mx-1"
                />
            </div>
        </section> 
    );
}

export default Gallery;