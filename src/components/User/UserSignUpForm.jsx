import React, { useState } from 'react'

import styles from '../../styles/User.module.css'

const UserSignUpForm = () => {
	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
		avatar: '',
	})

	const handleChange = ({ target: { value, name } }) => {
		setValues({ ...values, [name]: value })
	}
	return (
		<div className={styles.wrapper}>
			<div className={styles.close}>
				<svg className='icon'>
					<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
				</svg>
			</div>

			<div className={styles.title}>Sign Up</div>

			<form className={styles.form}>
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
				<div className={styles.link}>I already have an account</div>
				<button type='submit' className={styles.submit}>
					Create an account
				</button>
			</form>
		</div>
	)
}

export default UserSignUpForm
