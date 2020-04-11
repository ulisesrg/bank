import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [ transactions, setTransactions ] = useState([]);
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setTransactions(data));
  }, []);
  return transactions;
};

export default useInitialState;
