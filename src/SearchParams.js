import React from 'react';

const SearchParams = () => {
  let location = "Porto Alegre";

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          <input id="location" value={location} placeholder="Location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;

