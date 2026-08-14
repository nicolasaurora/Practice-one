import React from 'react'


const ListRedAndIpa = ({beers}) => {

    const redBeers = beers.filter((beer) => beer.beerStyle.toLowerCase() === "red").length;
    const ipaBeers = beers.filter((beer) => beer.beerStyle.toLowerCase() === "ipa").length;

  return (
    
        <div>
            <p>Red: {redBeers}</p>
            <p>Ipa: {ipaBeers}</p>
        </div>
    
    )
}

export default ListRedAndIpa