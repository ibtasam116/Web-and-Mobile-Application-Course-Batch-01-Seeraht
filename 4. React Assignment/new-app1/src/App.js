import './App.scss';

// Bootstrap JS File
import "bootstrap/dist/js/bootstrap.bundle"

// Components
// Header
import Header from "./components/Header"
// Footer
import Footer from "./components/Footer"

// Pages
// Home
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Header />

      <main>
        <Home />
      </main>

      <Footer />
    </>
  );
}

export default App;
