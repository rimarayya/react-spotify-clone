/* eslint-disable no-console */
import { useEffect } from 'react';

function TestProxy() {
  useEffect(() => {
    fetch('http://localhost:8080/https://api.deezer.com/chart')
      .then((res) => res.json())
      .then((data) => console.log('Proxy test data:', data))
      .catch((err) => console.error('Proxy test error:', err));
  }, []);
}

export default TestProxy;
