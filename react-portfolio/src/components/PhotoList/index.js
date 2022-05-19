import React, { useState } from 'react';

const PhotoList = ({ category }) => {

    const [photos] = useState([
        {
            name: 'Travelers',
            category: 'portfolio',
            description: 'Application shows weather and COVID cases',
            imageSrc: "https://github.com/hannahhan153/Travelers/raw/main/assets/css/images/Screen%20Shot%202022-02-02%20at%204.49.25%20PM.png",
            gitHubLink: "https://github.com/hannahhan153/Travelers",
            liveSite: "https://hannahhan153.github.io/Travelers/"
        },
        {
            name: 'Guitar shop',
            category: 'portfolio',
            description: 'Application allows users to buy and sell acoustic, electric, and bass guitars',
            imageSrc: "https://github.com/hannahhan153/Guitar-Shop/raw/main/images/Screen%20Shot%202022-04-03%20at%203.18.54%20PM.png",
            gitHubLink: "https://github.com/hannahhan153/Guitar-Shop",
            liveSite: "https://guitar-shop-group-project.herokuapp.com/"
        },
        { 
            name: 'placeholder',
            category: 'portfolio',
            description: 'Application allows ...',
            imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.fOOfY6dXQ3zw8Fj5HdQrbgHaIk%26pid%3DApi&f=1",
            gitHubLink: "https://github.com/hannahhan153/Guitar-Shop",
            liveSite: "https://guitar-shop-group-project.herokuapp.com/"
        
        },
        { 
            name: 'placeholder',
            category: 'portfolio',
            description: 'Application allows ...',
            imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.yBGyWDAXGJyAMaMKJ_x13AHaFj%26pid%3DApi&f=1",
            gitHubLink: "https://github.com/hannahhan153/Guitar-Shop",
            liveSite: "https://guitar-shop-group-project.herokuapp.com/"
        
        },
        { 
            name: 'placeholder',
            category: 'portfolio',
            description: 'Application allows ...',
            imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.jc3IVwNHQN8ny-HWUpWOKQHaHa%26pid%3DApi&f=1",
            gitHubLink: "https://github.com/hannahhan153/Guitar-Shop",
            liveSite: "https://guitar-shop-group-project.herokuapp.com/"
        
        },
        { 
            name: 'placeholder',
            category: 'portfolio',
            description: 'Application allows ...',
            imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.3R57ErGzNI23HUBSrm3eZAHaJQ%26pid%3DApi&f=1",
            gitHubLink: "https://github.com/hannahhan153/Guitar-Shop",
            liveSite: "https://guitar-shop-group-project.herokuapp.com/"
        
        },
        {
            name: 'Official resume',
            category: 'resume',
            description: 'Resume to share with employers',
            imageSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.aNFUIDJh2DO7ehXSiFr9gAHaJ3%26pid%3DApi&f=1",
            gitHubLink: "https://github.com/hannahhan153/Guitar-Shop"
        }
    ]);

    const currentPhotos = photos.filter((photo) => photo.category === category);

    return (
        <div>
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <div key={image.name}>
                        <img
                            src={image.imageSrc}
                            alt={image.name}
                            className="img-thumbnail mx-1"
                            key={image.name}
                        />
                        <a href={image.gitHubLink}><button>GitHub Link</button></a>
                        <a href={image.liveSite}><button>Live Link</button></a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoList;