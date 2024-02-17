import React from "react";

 const CountriesList = ({ countries, onCountryClick }) => {
  return (
    <ul>
      {countries.map(country => (
        <li key={country.name.common}>
          {country.name.common}
          <button onClick={() => onCountryClick(country)}>Show</button>
        </li>
      ))}
    </ul>
  );
};

export default CountriesList;

