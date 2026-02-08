import Header from "./Components/Header/Header.jsx"
import Hero from "./Components/Hero/Hero.jsx"
import Body from "./Components/Body/Body.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import Contact from "./Components/Contact/Contact.jsx"
function App() {
  return (
    <div className="container">
      <Header />
      <div className="divider" />
      <Hero />
      <div className="divider" />
      <Body />
      <div className="divider" />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
