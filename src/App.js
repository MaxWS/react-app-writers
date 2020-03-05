import React from 'react';
import './App.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import WriterList from "./components/WriterList/WriterList";

function App() {
  return (
  	<React.Fragment>
  		<Navbar />
  		<WriterList />
    	<Footer />
    </React.Fragment>
  );
}

export default App;
