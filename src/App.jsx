import './App.css'
import ListBeers from './components/ListBeers'
import ListBeersAvailable from './components/ListBeersAvailable'
import ListRedAndIpa from './components/ListRedAndIpa'
import beers from './components/beer'
import MaxPriceAndLowPrice from './components/maxPriceAndLowPrice'
import People from './components/People'


function App() {

  const names = ["Paez","Simmons","Lopez","Perez", "Suarez", "Parker"];

  return (
    <>
      {/* <ListBeers beers={beers}/>
      <ListRedAndIpa beers={beers}/>
      <MaxPriceAndLowPrice beers={beers}/>
      <ListBeersAvailable beers={beers}/> */}
      <People names={names}/>
    </>
  )
}

export default App
