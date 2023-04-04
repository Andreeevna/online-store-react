import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../redux/api/apiSlice'
import { ROUTES } from '../../utils/routes'

const SinglProduct = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id })

	useEffect(() => {
		if (!isFetching && !isLoading && !isSuccess) {
			navigate.push(ROUTES.HOME)
		}
	}, [isLoading, isFetching, isSuccess])

	return <div>SinglProduct</div>
}

export default SinglProduct
