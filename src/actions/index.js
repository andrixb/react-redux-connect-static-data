// Here we add the actions that are activeted when the events are triggered by the smart components
export function selectBook(book) {
	return {
		type: 'BOOK_SELECTED',
		payload: book
	}
}