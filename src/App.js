
import React from "react";
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components'

const Componente = styled.h1`
  color: red;
`
class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <Componente>
          Hello {name}
        </Componente>
      </>
    );
  }
}

export default hot(App);
