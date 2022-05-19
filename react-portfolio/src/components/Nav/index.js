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

    return (
        <header className="flex-row px-1">
        <h1>
            <a data-testid="link" >
                <span role="img" aria-label="life"> 🌱 </span> Portfolio by Hannah Han
            </a>
        </h1>
        <nav>
        <ul className ="flex-row">
            <li className="mx-2">
                <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>About Me</a>
            </li>
            <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                <span onClick={() => setContactSelected(true)}
                >
                Contact
                </span> 
            </li>
            {categories.map((category) => (
                <li className={`mx-1 ${
                    currentCategory.name === category.name && !contactSelected && 'navActive'
                }`} 
                key={category.name}
                >
                    <span onClick={() => {setCurrentCategory(category);
                    setContactSelected(false);
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