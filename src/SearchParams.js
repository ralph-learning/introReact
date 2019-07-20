import React, { useState, useEffect, useContext } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';
import Results from './Results';
import ThemeContext from './ThemeContext';

const SearchParams = () => {
  const [breeds, setBreeds] = useState([]);
  const [location, setLocation] = useState('Seattle, WA');
  const [pets, setPets] = useState([]);

  const [animal, DropDownAnimal] = useDropdown('Animal', 'Dog', ANIMALS);
  const [breed, DropDownBreed, setBreed] = useDropdown('Breed', '', breeds);
  const [themeHook, setThemeHook] = useContext(ThemeContext);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || [])
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet.breeds(animal).then(({ breeds }) => {
      const breedString = breeds.map(({ name }) => name);
      setBreeds(breedString);
    }, console.error);
  }, [animal, setBreed]);

  return (
    <div className="search-params">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          requestPets()}
        }
      >
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

        <label htmlFor="theme">
          Theme
          <select
            id="theme"
            onChange={e =>setThemeHook(e.target.value)}
            onBlur={e =>setThemeHook(e.target.value)}
          >
            <option value="red">Red</option>
            <option value="brown">Brown</option>
            <option value="pink">Pink</option>
          </select>
        </label>

        <button style={{ backgroundColor: themeHook }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;

