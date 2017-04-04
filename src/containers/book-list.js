// this component triggers events
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions';
import { bindActionCreators } from 'redux';

// we don't export this class
class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title}
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">
					{book.title}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}

// take the App state as an argument
function mapStateToProps(state) {
// Whatever is returned will show up as a props
// inside of BookList
	return {
		books: state.books    // state needs to follow the same structure of props
		                      // (i.e. this.props.books => state.books )
	};
}

// Aything returned from this function will end up as props
// on the booklist container
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be passed
	// to all of our reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList form a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
