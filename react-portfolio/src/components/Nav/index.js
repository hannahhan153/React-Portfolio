import React from 'react';

function categorySelected(name) {
    console.log(`${name} clicked`)
}

function Nav() {
    const categories = [
        {
            name: "Portfolio",
            description:
              "Images of six of the developer's applications with links to both the deployed applications and the corresponding GitHub repositoryare displayed",
          },
          { name: "Resume", description: "A link to a downloadable resume and a list of the developer’s proficiencies are displayed"}
    ];
    return (
        <header>
        <h1>
            <a href="/">
                <span role="img" aria-label="life"> 🌱 </span> Portfolio by Hannah Han
            </a>
        </h1>
        <nav>
        <ul className ="flex-row">
            <li className="mx-3">
                <a href="#about">About Me</a>
            </li>
            <li> 
                <a href="contact"> Contact Me</a>
            </li>
            {categories.map((category) => (
                <li className="mx-1" key={category.name}
                >
                    <span onClick={() => categorySelected(category.name)}>
                    {category.name}
                    </span>
                    </li>
            ))}
        </ul>
        </nav>
        </header>
    );
}

export default Nav;