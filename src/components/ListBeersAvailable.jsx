import React from 'react'

const ListBeersAvailable = ({beers}) => {

    const listAvailable = beers.filter((beer) => beer.isAvailable)

  return (
        <ul>
            {listAvailable.map((beer) => (
                <li>{beer.beerName}</li>
            ))}
        </ul>
    )
}

export default ListBeersAvailable