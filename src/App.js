import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: [],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/shoe/")
      .then((res) => res.json())
      .then((data) => this.setState({ shoes: data }));
  }

  render() {
    return (
      <div>
        <h1>Shoe Details</h1>
        <ul>
          {this.state.shoes.map((shoe) => {
            return (
              <>
                <li>Shoe Size: {shoe.size}</li>
                <li>Brand: {shoe.brand_name}</li>
                <li>Manufacturer: {shoe.manufacturer}</li>
                <li>Color: {shoe.color}</li>
                <li>Material: {shoe.material}</li>
                <li>Type: {shoe.shoe_type}</li>
                <li>Fasten Type: {shoe.fasten_type}</li>
                <br/>
              </>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default App;
