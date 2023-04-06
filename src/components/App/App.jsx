import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getCategories } from '../../redux/categories/categoriesSlice'
import { getProducts } from '../../redux/categories/productsSlice'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import AppRoutes from '../Routes/AppRoutes'
import Sidebar from '../Sidebar/Sidebar'
import UserFrom from '../User/UserFrom'

const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCategories())
		dispatch(getProducts())
	}, [dispatch])
	return (
		<div className='app'>
			<Header />
			<UserFrom />
			<div className='container'>
				<Sidebar amount={5} />
				<AppRoutes />
			</div>
			<Footer />
		</div>
	)
}

export default App
