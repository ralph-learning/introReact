import React, { useState, StrictMode } from 'react';
import { render } from 'react-dom';
import { Router, Link } from "@reach/router";
import ThemeContext from './ThemeContext';

import SearchParams from './SearchParams';
import Details from './Details';

const App = () => {
  const themeHook = useState('darkblue');

  return (
    <StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header style={{ marginBottom: '20px' }}>
            <Link to="/">Logo</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById('root'));
