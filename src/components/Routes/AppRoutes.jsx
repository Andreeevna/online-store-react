import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ROUTES } from '../../utils/routes'

import Home from '../Home/Home'
import SinglProduct from '../Products/SinglProduct'

const AppRoutes = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path={ROUTES.PRODUCTS} element={<SinglProduct />} />
		</Routes>
	)
}

export default AppRoutes
