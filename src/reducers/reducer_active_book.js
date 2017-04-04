// Responsible for changing the state.
// It moves the status from null to value selected if action happens
// Otherwise it reset the status by assigning status to null as an input parameter

export default function(state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}
