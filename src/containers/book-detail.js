// this component receives data from the book list selected item
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {
		if (!this.props.books) {
			return <div>Select a book</div>;
		}
	
		return (
			<div>
				<h3>Details for: </h3>
				<div> {this.props.book.title}</div>
			</div>
		);
	};
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);
