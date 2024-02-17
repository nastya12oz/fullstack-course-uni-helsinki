import { useState, useEffect } from 'react';
import countryServices from './services/country-services';
import Filter from './Filter';
import CountryInfo from './Country-info';
import CountriesList from './Countries-list';

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    countryServices.getAll()
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching all countries:', error);
      });
  }, []);

  const searchForCountry = (query) => {
    setSearchTerm(query);
    if (query) {
      const matchedCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCountries(matchedCountries);
      setSelectedCountry(null); // Reset selected country when the query changes
    } else {
      setFilteredCountries([]);
      setSelectedCountry(null); // Reset selected country when there is no query
    }
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div>
      <h1>Countries</h1>
      <Filter searchTerm={searchTerm} onChange={(event) => searchForCountry(event.target.value)} />
      {filteredCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : filteredCountries.length > 1 ? (
        <CountriesList countries={filteredCountries} onCountryClick={handleCountryClick} />
      ) : filteredCountries.length === 1 ? (
        <CountryInfo country={filteredCountries[0]} />
      ) : null}
      {selectedCountry && <CountryInfo country={selectedCountry} />}
    </div>
  );
}

export default App;
