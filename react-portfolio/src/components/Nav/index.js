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

    const handleClick = (item) => {
        console.log(item);
        return item;
      };


    return (
        <header className="flex-row px-1">
        <h1>
            <a data-testid="link" href="/">
                <span role="img" aria-label="life"> 🌱 </span> Portfolio by Hannah Han
            </a>
        </h1>
        <nav>
        <ul className ="flex-row">
            <li className="mx-2">
                <a data-testid="about" href="#about" onClick={() => handleClick("About")}>About Me</a>
            </li>
            <li className={"mx-2"}>
                <span onClick={() => handleClick('Contact')}>
                </span> 
                <a href="contact"> Contact Me</a>
            </li>
            {categories.map((category) => (
                <li className="mx-1" key={category.name}
                >
                    <span onClick={() => { handleClick(category.name); }}>
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