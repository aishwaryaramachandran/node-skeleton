import React, {Component} from 'react';
import IndexCard from "./IndexCard/IndexCard.jsx";
import Navbar from "./landing/Navbar.jsx";
import Search from "./landing/Search.jsx";
import Filter from "./landing/Filter.jsx"
import ItineraryCard from "./itinerary/ItineraryCard.jsx"


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      messages: [],
      userCount: []
    }
  }

  render() {
      console.log("Rendering <App />");
    return (
      <div>
        <Navbar />
        <Filter />
        <Search />  
        <IndexCard />
        <div>
          <ItineraryCard /> 
        </div>
      </div>
    );
  }
}

export default App;