import React, {useEffect, useState} from 'react';
import './config/reset.css';
import SignUpForm from './components/SignUpForm';
import phoneMasks from './api/phoneMasks.json';

const App = () => {
  const [countryPhoneData, setCountryPhoneData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsFetching(true);
    fetch('https://api.printful.com/countries')
      .then(res => res.json())
      .then(data => {
        setIsFetching(false);
        const result = data.result.map(item => ({
          name: item.name,
          code: item.code,
          mask: phoneMasks[item.code],
        })).filter(el => el.mask);
        setCountryPhoneData(result);
      })
      .catch(err => {
        setIsFetching(false);
        setError(err.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (isFetching) {
    return <div>Loading...</div>;
  } else if (countryPhoneData.length) {
    return (
      <SignUpForm countryPhoneData={countryPhoneData}/>
    );
  } else return null;
};

export default App;
