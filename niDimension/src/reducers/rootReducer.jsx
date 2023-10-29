

const initialState = {
	index: 'find'
}





const rootReducer = (state = initialState,action) =>{
	switch (action.type) {
		case 'SWITCH_INDEX':
			return {index:action.index}
		default:
			return state
	}
}


export default rootReducer