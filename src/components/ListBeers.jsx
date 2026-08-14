import React from 'react'


const ListBeers = ({beers}) => {

  return (
    <ul>
        {beers.map((beer) => (
            <div>
                <li>{beer.beerName}</li>
                <li>AR${beer.price * 1500}</li>
            </div>
        ))}
    </ul>
  )
}

export default ListBeers