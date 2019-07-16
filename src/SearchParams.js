import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParams = () => {
  const [breeds, setBrreds] = useState([]);
  const [location, setLocation] = useState('Porto Alegre');
  const [animal, DropDownAnimal, setAnimal] = useDropdown('Animal', 'Dog', ANIMALS);
  const [breed, DropDownBreed, setBreed] = useDropdown('Breed', '', breeds);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          <input
            id="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="Location"
          />
        </label>

        <DropDownAnimal />

        <DropDownBreed />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;

