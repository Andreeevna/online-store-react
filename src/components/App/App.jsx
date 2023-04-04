import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { getCategories } from '../../redux/categories/categoriesSlice'
import { getProducts } from '../../redux/categories/productsSlice'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import AppRoutes from '../Routes/AppRoutes'
import Sidebar from '../Sidebar/Sidebar'

const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCategories())
		dispatch(getProducts())
	}, [dispatch])
	return (
		<div className='app'>
			<Header />

			<div className='container'>
				<Sidebar />
				<AppRoutes />
			</div>
			<Footer />
		</div>
	)
}

export default App
