import React, { useEffect, useState } from 'react';

export const UpcomingGigs = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gigs, setGigs] = useState([]);

  const errorStyle = {
    color: "yellow"
  }

  const divStyle = {
    padding: "1em 0"
  }

  useEffect(() => {
      fetch(`https://app.ticketmaster.com/discovery/v2/events.json?dmaId=362&size=50&apikey=${import.meta.env.VITE_TICKETMASTER_KEY}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`error. ${response.status}\n${response.statusText}\n${response.headers}\n${response.url}`);
          }
//          console.log(response);
          return response.json();
        })
        .then((jsonifiedResponse) => {
          setGigs(jsonifiedResponse["_embedded"].events)
          setIsLoaded(true)
        })
        .catch((error) => {
//          console.log(`\n${error.name}: ${error.message}.`);
          setError(error)
          setIsLoaded(true)
        });
  }, [])



  if (error) {
    return <h1 style={errorStyle}>error: {error}</h1>
  } else if (!isLoaded) {
    return <h1>...loading...</h1>;
  } else {
    
    return (
      <>
        <h2>upcoming gigs</h2>
        {gigs.map((gig: any, index) =>
          <div key={index} style={divStyle}>
            <h3>{gig.name}</h3>
            <h5>{gig.dates.start.localDate}</h5>
            <h5>{gig["_embedded"].venues[0].name}</h5>
          </div>
        )}
      </>
    );
  }

}
