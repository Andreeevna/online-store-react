import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toggleForm, toggleFormType } from '../../redux/user/userSlice'
import styles from '../../styles/User.module.css'
import UserLoginForm from './UserLoginForm'
import UserSignUpForm from './UserSignUpForm'

const UserFrom = () => {
	const dispatch = useDispatch()
	const { showForm, formType } = useSelector(({ user }) => user)

	const closeForm = () => {
		dispatch(toggleForm(false))
	}
	const toogleCurrentTypeForm = type => {
		dispatch(toggleFormType(type))
	}

	return (
		<>
			{showForm && (
				<>
					<div className={styles.overlay} onClick={closeForm} />
					{formType === 'signup' ? (
						<UserSignUpForm
							toogleCurrentTypeForm={toogleCurrentTypeForm}
							closeForm={closeForm}
						/>
					) : (
						<UserLoginForm
							toogleCurrentTypeForm={toogleCurrentTypeForm}
							closeForm={closeForm}
						/>
					)}
				</>
			)}
		</>
	)
}

export default UserFrom
