import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../utils/constants'

const initialState = {
	currentUser: null,
	cart: [],
	isLoading: false,
	formType: 'signup',
	showForm: false,
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

export const loginUser = createAsyncThunk(
	'user/loginUser',
	async (body, thunkAPI) => {
		try {
			const res = await axios.post(`${BASE_URL}/auth/login`, body)
			const login = await axios.get(`${BASE_URL}/auth/profile`, {
				headers: {
					Authorization: `Bearer ${res.data.access_token}`,
				},
			})
			return login.data
		} catch (err) {
			console.log(err)
			return thunkAPI.rejectWithValue(err)
		}
	}
)

export const updateUser = createAsyncThunk(
	'user/updateUser',
	async (body, thunkAPI) => {
		try {
			const res = await axios.put(`${BASE_URL}/users/${body.id}`, body)
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
		removeItemFromCart: (state, { payload }) => {
			state.cart = state.cart.filter(({ id }) => id !== payload)
		},

		toggleForm: (state, action) => {
			state.showForm = action.payload
		},
		toggleFormType: (state, action) => {
			state.formType = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(createUser.fulfilled, (state, action) => {
			state.currentUser = action.payload
		})
		builder.addCase(loginUser.fulfilled, (state, action) => {
			state.currentUser = action.payload
		})
		builder.addCase(updateUser.fulfilled, (state, action) => {
			state.currentUser = action.payload
		})
	},
})

export const { addItemToCart, removeItemFromCart, toggleForm, toggleFormType } =
	userSlice.actions

export default userSlice.reducer
