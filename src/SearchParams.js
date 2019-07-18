import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';
import Results from './Results';

const SearchParams = () => {
  const [breeds, setBreeds] = useState([]);
  const [location, setLocation] = useState('Seattle, WA');
  const [pets, setPets] = useState([]);

  const [animal, DropDownAnimal] = useDropdown('Animal', 'Dog', ANIMALS);
  const [breed, DropDownBreed, setBreed] = useDropdown('Breed', '', breeds);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals)
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

        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;

