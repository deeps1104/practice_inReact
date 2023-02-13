import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};

  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }

   handleData = () => {
    alert("Great Shot!");
  }

  
  render() {
    
    return (
      <div>
              <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            <button onClick={this.handleData}>here</button>
      </div>
    );
  }
}
export default Header;