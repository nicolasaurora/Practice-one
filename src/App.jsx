import './App.css'
import ListBeers from './components/ListBeers'
import ListBeersAvailable from './components/ListBeersAvailable'
import ListRedAndIpa from './components/ListRedAndIpa'
import beers from './components/beer'
import MaxPriceAndLowPrice from './components/maxPriceAndLowPrice'



function App() {

  return (
    <>
      <ListBeers beers={beers}/>
      <ListRedAndIpa beers={beers}/>
      <MaxPriceAndLowPrice beers={beers}/>
      <ListBeersAvailable beers={beers}/>
    </>
  )
}

export default App
