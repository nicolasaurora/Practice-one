import React from 'react'

const MaxPriceAndLowPrice = ({beers}) => {

    const beerMostPrice = beers.reduce((beer1, beer2) => beer2.price > beer1.price ? beer2 : beer1)
    const beerLowPrice = beers.reduce((beer1, beer2) => beer2.price < beer1.price ? beer2 : beer1)
    
  return (
    <div>
        <p>Cervezas disponibles:</p>
        <p>Cerveza mas cara: {beerMostPrice.beerName}, AR${beerMostPrice.price * 1500}</p>
        <p>Cerveza mas barata: {beerLowPrice.beerName}, AR${beerLowPrice.price * 1500}</p>
    </div>
    
  )
}

export default MaxPriceAndLowPrice