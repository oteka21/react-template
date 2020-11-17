
import React from "react";
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components'

const Componente = styled.h1`
  color: red;
`

const Otro = styled.p`
  color: blue;
`

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
      <Otro>
        Otra bobada
      </Otro>
        <Componente>
          Hello {name}
        </Componente>
      </>
    );
  }
}

export default hot(App);
