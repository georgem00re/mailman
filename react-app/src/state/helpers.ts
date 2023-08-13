
export function addState(state: RequestHeader[] | QueryParam[], action: Action) {
	return [ ...state, action.payload ]
}

export function deleteState(state: RequestHeader[] | QueryParam[], action: Action) {
	return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)];
}

export function toggleState(state: RequestHeader[] | QueryParam[], action: Action) {
	return state.map((element, index) => {
		if (index == action.payload) return { ...element, selected: !element.selected }
		else return element;
	})
}
export function updateKey(state: RequestHeader[] | QueryParam[], action: Action) {
	return state.map((element, index) => {
		if (index == action.payload.index) return { ...element, keyStr: action.payload.value }
		else return element;
	})
}
export function updateValue(state: RequestHeader[] | QueryParam[], action: Action) {
	return state.map((element, index) => {
		if (index == action.payload.index) return { ...element, value: action.payload.value }
		else return element;
	})
}