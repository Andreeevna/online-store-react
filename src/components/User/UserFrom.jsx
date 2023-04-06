import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toggleForm } from '../../redux/user/userSlice'
import styles from '../../styles/User.module.css'
import UserSignUpForm from './UserSignUpForm'

const UserFrom = () => {
	const dispatch = useDispatch()
	const { showForm } = useSelector(({ user }) => user)

	const closeForm = () => {
		dispatch(toggleForm(false))
	}

	return (
		<>
			{showForm && (
				<>
					<div className={styles.overlay} onClick={closeForm} />
					<UserSignUpForm closeForm={closeForm} />
				</>
			)}
		</>
	)
}

export default UserFrom
