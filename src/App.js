// import React from 'react';
// import './App.css';
// import Header from './components/Header/Header';
// import ImageCarousel from './components/ImageGallery/ImageCarousel';
// import About from './components/About/About';
// import CardsContainer from './components/CardsContainer/CardsContainer';
// import { ChakraProvider } from '@chakra-ui/react';
// import Projects from './components/Projects/Projects';

// function App() {
//   return (
//     <ChakraProvider>

//     <div>
//       <Header />
//       <ImageCarousel />
//       <About />
//       <CardsContainer />
//       <Projects/>
//     </div>
//     </ChakraProvider>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ImageCarousel from './components/ImageGallery/ImageCarousel';
import About from './components/About/About';
import CardsContainer from './components/CardsContainer/CardsContainer';
import Projects from './components/Projects/Projects';
import { ChakraProvider } from '@chakra-ui/react';
import Process from './components/Process/Process';
import Latest from './components/Latest/Latest';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <ChakraProvider>
      <div>
        <Header />
        <ImageCarousel />
        <About />
        <CardsContainer />
        <Projects />
        <Process/>
        <Latest/>
        <Contact/>
      </div>
    </ChakraProvider>
  );
}

export default App;
