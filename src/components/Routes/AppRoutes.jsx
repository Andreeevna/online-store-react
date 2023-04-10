import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ROUTES } from '../../utils/routes'

import SingleCategory from '../Categories/SingleCategory'
import Home from '../Home/Home'
import SinglProduct from '../Products/SinglProduct'
import Profile from '../Profile/Profile'

const AppRoutes = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path={ROUTES.PRODUCTS} element={<SinglProduct />} />
			<Route path={ROUTES.PROFILE} element={<Profile />} />
			<Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
		</Routes>
	)
}

export default AppRoutes
