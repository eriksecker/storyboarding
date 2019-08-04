import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';

import Title from './Title';

const Scene = (props) => {
	const {
		title,
		children,
	} = props;

	return (
		<div className="scene">
			<Title text={ title } />
			<Row>
				{ children }
			</Row>
		</div>
	);
}

Scene.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
}

export default Scene;
