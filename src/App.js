import React from 'react';
import Container from 'react-bootstrap/Container'

import 'styles/App.scss';

import Story from 'components/Lib/Story';
import Title from 'components/Lib/Title';
import Scene from 'components/Lib/Scene';
import Panel from 'components/Lib/Panel';

function App() {
  return (
    <Container className="App">
			<Story>
				<Title text="Sorrow Drumming" />
				<Scene title="The Coffin Arrives">
					<Panel text="A town council meeting." />
					<Panel text="Sarah can feel the other members discomfort around her." />
					<Panel text="What do you say to a woman whose brother is being hunted for murder by that same woman’s husband?" />
				</Scene>
			</Story>
    </Container>
  );
}

export default App;
