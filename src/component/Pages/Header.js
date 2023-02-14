import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "yellow"};

  }

  componentDidMount() {
    setInterval(() => {
      this.setState({favoritecolor: "red"})
    }, 1000)
  }

   handleData = () => {
    
  }

  
  render() {
    
    return (
      <div>
              <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            <button  className='btn btn-primary' onClick={this.handleData}>button1</button>
      </div>
    );
  }
}
export default Header;