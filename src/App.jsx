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
      <main className='relative bg-mainBg'>
        <section className='py-8 padding-x '>
          <Navbar />
        </section>
        <section className='xl:padding-x padding-b'>
          <Hero />
        </section>
        <section>
          <Trending />
        </section>
        <section>
          <TopCreator />
        </section>
        <section>
          <BrowseCatg />
        </section>
        <section>
          <Discover />
        </section>
        <section>
          <SpecialOffer />
        </section>
        <section>
          <HowWork />
        </section>
        <section>
          <Newsletter />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
