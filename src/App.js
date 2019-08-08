import React from 'react';
import Container from 'react-bootstrap/Container'

import 'styles/App.scss';

import ContainerDragCols from 'components/Lib/ContainerDragCols';
import SampleStory from 'components/SampleStory';

function App() {
  return (
    <Container className="App">
			<ContainerDragCols />
			<SampleStory />
    </Container>
  );
}

export default App;
