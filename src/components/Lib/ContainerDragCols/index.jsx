import React, { Component } from 'react';

import { ideas } from './data';

const DIVIDER_WIDTH = 8;
const COLS_PER_ROW = 3;

class ContainerDragCols extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ideas: [],
			drag: false,
			dragIndex: null,
		};

		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.handleMouseUp = this.handleMouseUp.bind(this);
	}

	componentDidMount() {
		const {
			mainContainer: {
				offsetWidth,
			}
		} = this.refs;

		const defaultWidth = Math.floor(
			(offsetWidth - (DIVIDER_WIDTH * (COLS_PER_ROW-1))) / COLS_PER_ROW
		);

		const ideasLayout = ideas.map( (idea, index) => {
			return {
				content: idea,
				showDivider: ((index+1) % COLS_PER_ROW) ? true : false,
				width: defaultWidth,
			}
		})

		this.setState({ ideas: ideasLayout });
	}

	handleMouseMove(event) {
		const {
			state: {
				ideas,
				drag,
				dragIndex,
			},
			refs: {
				mainContainer,
			}
		} = this;

		if ( ! drag) {
			return;
		}

		const leftSpace = event.pageX - mainContainer.offsetLeft;
		const rightSpace = mainContainer.offsetWidth - leftSpace;

		if ( leftSpace < 150 || rightSpace < 150 ) {
			return;
		}

		const rowIndex = Math.floor(dragIndex / COLS_PER_ROW);

		let accumulatedWidth = 0;
		let widthChange = 0;

		const newIdeas = ideas.map((idea, index) => {
			const {
				width,
			} = idea;

			const currentRowIndex =  Math.floor(index / COLS_PER_ROW);

			if ( currentRowIndex !== rowIndex ) {
				return idea;
			}

			if ( index === dragIndex ) {
				widthChange = (leftSpace - accumulatedWidth - width) - (DIVIDER_WIDTH / 2);
				console.log(widthChange);
			}
			else if ( index === dragIndex + 1 ) {
				widthChange *= -1;
			}
			else {
				widthChange = 0;
			}

			accumulatedWidth += width + DIVIDER_WIDTH;

			return {
				...idea,
				width: width + widthChange,
			};
		});

		this.setState({ ideas: newIdeas });
	}

	handleMouseDown(event, dragIndex) {
		this.setState({
			dragIndex,
			drag: true,
		});
	}

	handleMouseUp() {
		this.setState({drag: false, dragIndex: null});
	}

	render() {
		const {
			handleMouseMove,
			handleMouseDown,
			handleMouseUp,
			state: {
				ideas,
			},
		} = this;

		return (
			<div
				className="container-drag-cols"
				ref="mainContainer"
				onMouseMove={handleMouseMove}
			>
				{ ideas.map( (idea, index) => {
					const {
						content,
						showDivider,
						width,
					} = idea;

					return (
						<React.Fragment key={index}>
							<div className="panel" style={{width}} ref={`panel${index}`}>
								<div className="contents">
									{ content }
								</div>
							</div>
							{ showDivider &&
								<div
									className="divider"
									style={{ width: DIVIDER_WIDTH }}
									onMouseDown={ (event) => handleMouseDown(event, index) }
									onMouseUp={ handleMouseUp }
								/>
							}
						</React.Fragment>
					);
				})}
			</div>
		)
	}
}

export default ContainerDragCols;
