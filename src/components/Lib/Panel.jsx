import React from 'react';
import PropTypes from 'prop-types';

import Col from 'react-bootstrap/Col';

const Panel = (props) => {
	const {
		text,
	} = props;

	return (
		<Col className="panel">
			{ text }
		</Col>
	);
}

Panel.propTypes = {
	text: PropTypes.string,
};

export default Panel;
