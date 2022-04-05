import React from 'react';
import TextField from "@mui/material/TextField";
import List from "./List";
import "./App.css";
import styled from 'styled-components';
import axios from "axios";


const Button = styled.button`
  
`;
const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const types = ["Videojuegos", "Comida", "Belleza", "Entretenimiento", "Tecnología", "Viajes", "Deporte", "Moda"];



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        items: [],
        DataisLoaded: false,
        inputText: "",
        typeselected : types[0],
        country : ""
    };
   }

   componentDidMount() {
    fetch('http://localhost:3030/users?count=500')
       .then((res) => 
       { var x = res.json();
          console.log(x);
          console.log(res);  
          return x;
      })
      .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })
        .catch(r=> console.log(r) )
}

  render() {
    const { DataisLoaded, items } = this.state;
      let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        this.state.inputText = lowerCase;
        this.forceUpdate();
      };

      let inputHandler2 = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        this.state.country = lowerCase;
        this.forceUpdate();
      };

    if(!DataisLoaded){
      return(
      <div>
            <h1> Cargando.... </h1> </div> );
    }
  
  return (
    <div className="main">
      <h1>Lista de influencers de {this.state.typeselected}</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Busca influencers por su nombre..."
        />
      </div>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler2}
          variant="outlined"
          fullWidth
          label="O busca influencers por la ubicación de sus seguidores..."
        />
      </div>
      <ButtonGroup>
      {types.map(type => (
        <ButtonToggle
          key={type}
          active={this.state.typeselected === type}
          onClick={() => {this.state.typeselected = type; this.forceUpdate()}}
        >
          {type}
        </ButtonToggle>
      ))}
      </ButtonGroup>
      <List input={this.state.inputText} type = {this.state.typeselected} items = {items} country = {this.state.country}/>
    </div>
  );
  }
}

export default App;