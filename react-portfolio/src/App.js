import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

//jsx not html
function App() {
  const [categories] = useState([
    {
      name: 'portfolio',
      description: "Images of six of the developer's applications with links to both the deployed applications and the corresponding GitHub repository are displayed"
    },
    { name: 'resume',
      description: "A link to a downloadable resume and a list of the developer’s proficiencies are displayed"}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav 
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Nav>
      <main>
      {!contactSelected ? (
  <>
    <Gallery currentCategory={currentCategory}></Gallery>
    <About></About>
  </>
) : (
    <ContactForm></ContactForm>
  )}
      </main>
    </div>
  );
}

export default App;
