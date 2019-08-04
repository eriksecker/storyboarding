import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Title = (props) => {
	const {
		text,
	} = props;

	return (
		<Row className="title">
			<Col>
				{ text }
			</Col>
		</Row>
	)
}

Title.propTypes = {
	text: PropTypes.string,
}

export default Title;
