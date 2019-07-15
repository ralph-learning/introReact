import React from 'react';
import { render } from 'react-dom';

import Pet from './Pet';

const App = () => (
  <div>
    <h1>Logo</h1>
    <Pet name="Boris" animal="Cat" breed="Persa"></Pet>
    <Pet name="Agatha" animal="Cat" breed="Persa"></Pet>
    <Pet name="Zack" animal="Dog" breed="Pug"></Pet>
  </div>
)

render(<App />, document.getElementById('root'));
