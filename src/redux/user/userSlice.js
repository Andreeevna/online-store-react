import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../utils/constants'

const initialState = {
	currentUser: {},
	cart: [],
	isLoading: false,
}

export const createUser = createAsyncThunk(
	'user/createUser',
	async (body, thunkAPI) => {
		try {
			const res = await axios.post(`${BASE_URL}/users`, body)
			return res.data
		} catch (err) {
			console.log(err)
			return thunkAPI.rejectWithValue(err)
		}
	}
)

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addItemToCart: (state, { payload }) => {
			let newCart = [...state.cart]
			const found = state.cart.find(({ id }) => id === payload.id)
			if (found) {
				newCart = newCart.map(item => {
					return item.id === payload.id
						? {
								...item,
								quantity: payload.quantity || item.quantity + 1,
						  }
						: item
				})
			} else newCart.push({ ...payload, quantity: 1 })

			state.cart = newCart
		},
	},
	extraReducers: builder => {
		// builder.addCase(getCategories.pending, state => {
		// 	state.isLoading = true
		// })
		builder.addCase(createUser.fulfilled, (state, action) => {
			state.currentUser = action.payload
		})
		// builder.addCase(getCategories.rejected, state => {
		// 	state.isLoading = false
		// })
	},
})

export const { addItemToCart } = userSlice.actions

export default userSlice.reducer
