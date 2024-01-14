import { Fragment } from "react";

// react components.
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StudentsTable from "./components/StudentsTable";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <StudentsTable />
      <Footer />
    </Fragment>
  );
}

export default App;
