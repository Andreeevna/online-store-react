import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	currentUser: [],
	cart: [],
	isLoading: false,
}

// export const getCategories =
// 	createAsyncThunk()
// 'categories/getCategories',
// async (_, thunkAPI) => {
// 	try {
// 		const res = await axios(`${BASE_URL}/categories`)
// 		return res.data
// 	} catch (err) {
// 		console.log(err)
// 		return thunkAPI.rejectWithValue(err)
// 	}
// }

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addItemToCart: (state, action) => {
			let newCart = [...state.cart]
			const found = state.cart.find(({ id }) => id === action.payload.id)
			if (found) {
				newCart = newCart.map(item => {
					return item.id === action.payload.id
						? {
								...item,
								quantity: action.payload.quantity || item.quantity + 1,
						  }
						: item
				})
			} else newCart.push({ payload, quantity: 1 })

			state.cart = newCart
		},
	},
	extraReducers: builder => {
		// builder.addCase(getCategories.pending, state => {
		// 	state.isLoading = true
		// })
		// builder.addCase(getCategories.fulfilled, (state, action) => {
		// 	state.list = action.payload
		// 	state.isLoading = false
		// })
		// builder.addCase(getCategories.rejected, state => {
		// 	state.isLoading = false
		// })
	},
})

export const { addItemToCart } = userSlice.actions

export default userSlice.reducer
