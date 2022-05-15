import React, { useState } from 'react';

const PhotoList = ({ category }) => {
    
    const [photos] = useState([
        {
            name: 'Travelers',
            category: 'portfolio',
            description: 'Application shows weather and COVID cases'
        }, 
        {
            name: 'Guitar shop',
            category: 'portfolio',
            description: 'Application allows users to buy and sell acoustic, electric, and bass guitars'
        }, 
        {
            name: 'Official resume',
            category: 'resume',
            description: 'Resume to share with employers'
        }
    ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);

    return (
        <div>
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img 
                    src={require(`../../assets/small/${category}/${i}.jpg`)}
                    alt={image.name}
                    className="img-thumbnail mx-1"
                    key={image.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default PhotoList;