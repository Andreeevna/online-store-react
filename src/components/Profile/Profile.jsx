import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../redux/user/userSlice'
import styles from '../../styles/Profile.module.css'

const Profile = () => {
	const dispatch = useDispatch()

	const { currentUser } = useSelector(({ user }) => user)

	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
		avatar: '',
	})

	useEffect(() => {
		if (!currentUser) return
		setValues(currentUser)
	}, [currentUser])

	const handleChange = ({ target: { value, name } }) => {
		setValues({ ...values, [name]: value })
	}

	const handleSubmit = e => {
		e.preventDefault()

		const isEmpty = Object.values(values).some(val => !val)
		if (isEmpty) return

		dispatch(updateUser(values))
	}

	return (
		<section className={styles.profile}>
			{!currentUser ? (
				<span>You need to login</span>
			) : (
				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.group}>
						<input
							type='email'
							name='email'
							placeholder='Your email'
							autoComplete='off'
							value={values.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className={styles.group}>
						<input
							type='name'
							name='name'
							placeholder='Your name'
							autoComplete='off'
							value={values.name}
							onChange={handleChange}
							required
						/>
					</div>
					<div className={styles.group}>
						<input
							type='password'
							name='password'
							placeholder='Your password'
							autoComplete='off'
							value={values.password}
							onChange={handleChange}
							required
						/>
					</div>
					<div className={styles.group}>
						<input
							type='avatar'
							name='avatar'
							placeholder='Your avatar'
							autoComplete='off'
							value={values.avatar}
							onChange={handleChange}
							required
						/>
					</div>

					<button type='submit' className={styles.submit}>
						Update
					</button>
				</form>
			)}
		</section>
	)
}

export default Profile
