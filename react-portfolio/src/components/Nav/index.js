import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
    } = props;

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
                <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>About Me</a>
            </li>
            <li className={"mx-2"}>
                <span onClick={() => setContactSelected(true)}>Contact
                </span> 
            </li>
            {categories.map((category) => (
                <li className={`mx-1 ${
                    currentCategory.name === category.name 
                }`} 
                key={category.name}
                >
                    <span onClick={() => {setCurrentCategory(category)
                    }}
                    >
                    {capitalizeFirstLetter(category.name)}
                    </span>
                    </li>
            ))}
        </ul>
        </nav>
        </header>
    );
}

export default Nav;