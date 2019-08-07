import React from 'react';

import ideas from 'data/ideas';

import Story from 'components/Lib/Story';
import Title from 'components/Lib/Title';
import Scene from 'components/Lib/Scene';
import Panel from 'components/Lib/Panel';

const SampleStory = (props) => {
	return (
		<Story>
			<Title text="Sorrow Drumming" />
			<Scene title="The Coffin Arrives">
				{ ideas.map( (idea) => {
					const {
						id,
						content,
					} = idea;

					return (
						<Panel key={ id } text={ content } />
					)
				})}
			</Scene>
		</Story>
	);
}

export default SampleStory;
