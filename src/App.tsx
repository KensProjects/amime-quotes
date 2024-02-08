import QuoteCard from "./components/QuoteCard"
import RandomQuoteButton from "./components/RandomQuoteButton"
import SearchBar from "./components/SearchBar"

function App() {

  return (
    <div className="flex bg-slate-200 w-full h-screen justify-between items-center flex-col py-8">
      <div id="quote-searchers" className="flex flex-col justify-between items-center w-fit h-fit gap-3">
        <SearchBar />
        <span>or</span>
        <RandomQuoteButton />
      </div>
      <QuoteCard />
    </div>
  )
}

export default App