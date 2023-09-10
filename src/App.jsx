import "./App.css";
import {
  Hero,
  BrowseCatg,
  Discover,
  HowWork,
  Newsletter,
  SpecialOffer,
  TopCreator,
  Trending,
  Footer
} from "./container";

import {Navbar} from "./components";

function App() {
  return (
    <>
      <main className='font-roboto bg-red-500'>
        <Navbar />
      </main>
    </>
  );
}

export default App;
