import React, { useState } from 'react';

const useDropdown = (label, defaultState, options) => {
  const [ state, setState ] = useState(defaultState);
  const Dropdown = () => (
    <React.Fragment>
      <label htmlFor="breed">
        {label}
        <select
          id="breed"
          value={state}
          onChange={e => setState(e.target.value)}
          onBlur={e => setState(e.target.value)}
          disabled={options.length === 0}
        >
          <option>All</option>
          {
            options.map((item, key) => (
              <option
                key={key}
                value={item}
              >
                {item}
              </option>
            ))
          }
        </select>
      </label>
    </React.Fragment>
  );

  return [state, Dropdown, setState];
}

export default useDropdown;

