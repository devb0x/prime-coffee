import { createSlice } from "@reduxjs/toolkit"

const uiSlice = createSlice({
	name: 'ui',
	initialState: {
		mobileNavVisible: false
	},
	reducers: {
		toggle(state) {
			state.mobileNavVisible = !state.mobileNavVisible
			console.log(`state changed to ${state.mobileNavVisible}`)
		}
	}
})

export const uiActions = uiSlice.actions

export default uiSlice.reducer