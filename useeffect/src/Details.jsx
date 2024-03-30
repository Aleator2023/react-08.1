import React, { useState, useEffect } from 'react';

const Details = ({ info }) => {
    const [userDetails, setUserDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      if (info) {
        setIsLoading(true);
        fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`)
          .then(response => response.json())
          .then(data => {
            setUserDetails(data);
            setIsLoading(false);
          });
      }
    }, [info]);
  
    if (!info) return null;
  
    return (
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          userDetails && (
            <div>
              <h1>{userDetails.name}</h1>
              <p>City: {userDetails.details.city}</p>
              <p>Company: {userDetails.details.company}</p>
              <p>Position: {userDetails.details.position}</p>
            </div>
          )
        )}
      </div>
    );
  };

 
export default Details 