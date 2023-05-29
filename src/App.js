
import React from 'react';

import './App.css';
import Main from './components/main/Main';
import Info from './components/info/Info';
import Work from './components/work/Work';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

export const AppContext = React.createContext('')

function App() {
  const [modalOpen, setModalOpen] = React.useState(false)
  const [portfolioIndex, setPortfolioIndex] = React.useState(0)

  return (
    <div className="App">

      <AppContext.Provider 
      value={{modalOpen, setModalOpen,
              portfolioIndex, setPortfolioIndex}}>
        <Main></Main>
        <Work></Work>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </AppContext.Provider>
      
    </div>
  );
}

export default App;
