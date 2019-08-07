import React from 'react';
import PropTypes from 'prop-types';

const Panel = (props) => {
	const {
		text,
	} = props;

	return (
		<div className="panel flex-grow-1 m-1 p-2 d-flex flex-column justify-content-center align-items-center" style={{verticalAlign: "center"}}>
			<div className="text" style={{ maxWidth: "330px" }}>
				{ text }
			</div>
		</div>
	);
}

Panel.propTypes = {
	text: PropTypes.string,
};

export default Panel;
