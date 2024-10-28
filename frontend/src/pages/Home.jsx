import Hero from "../components/Hero"
import NewCollections from "../components/NewCollections"
import NewsLetter from "../components/NewsLetter"
import Offer from "../components/Offer"
import Popular from "../components/Popular"

const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Home
