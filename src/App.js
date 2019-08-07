import React from 'react';
import Container from 'react-bootstrap/Container'

import 'styles/App.scss';

import SampleStory from 'components/SampleStory';

function App() {
  return (
    <Container className="App">
			<SampleStory />
    </Container>
  );
}

export default App;
