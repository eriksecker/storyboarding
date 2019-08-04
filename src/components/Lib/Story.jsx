import React from 'react';
import PropTypes from 'prop-types';


const Story = (props) => {
	const {
		children,
	} = props;

	return (
		<div className="story">
			{ children }
		</div>
	);
}

Story.propTypes = {
	children: PropTypes.node,
};

export default Story;
