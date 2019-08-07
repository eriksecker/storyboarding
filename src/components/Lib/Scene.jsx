import React from 'react';
import PropTypes from 'prop-types';

import Title from './Title';

const Scene = (props) => {
	const {
		title,
		children,
	} = props;

	return (
		<div className="scene">
			<Title text={ title } />
			<div className="d-flex flex-row flex-wrap">
				{ children }
			</div>
		</div>
	);
}

Scene.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
}

export default Scene;
