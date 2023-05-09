import React, { useEffect, useState } from 'react';

export const UpcomingGigs = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gigs, setGigs] = useState([]);

  useEffect(() => {
      fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${import.meta.env.VITE_TICKETMASTER_KEY}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`error. ${response.status}\n${response.statusText}\n${response.headers}\n${response.url}`);
          }
          console.log(response);
          return response.json();
        })
        .then((jsonifiedResponse) => {
          console.log(jsonifiedResponse);
          setGigs(jsonifiedResponse.results)
          setIsLoaded(true)
        })
        .catch((error) => {
          console.log(`\n${error.name}: ${error.message}.`);
          setError(error)
          setIsLoaded(true)
        });
  }, [])

  return (
    <>
    </>
  );
}
