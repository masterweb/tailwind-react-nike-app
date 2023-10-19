import Nav from "./components/Nav"
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import SpecialOffer from "./sections/SpecialOffer";
import SuperQuality from "./sections/SuperQuality";

const  App = ()  => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>

  </main>
)

export default App;