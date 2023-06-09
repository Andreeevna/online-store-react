import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { ROUTES } from '../../utils/routes'

import AVATAR from '../../images/avatar.jpg'
import LOGO from '../../images/logo.svg'

import { useGetProductsQuery } from '../../redux/api/apiSlice'
import { toggleForm } from '../../redux/user/userSlice'
import styles from '../../styles/Header.module.css'

const Header = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [searchValue, setSearchValue] = useState('')
	const { currentUser, cart } = useSelector(({ user }) => user)

	const [value, setValue] = useState({ name: 'Guest', avatar: AVATAR })

	const { data, isLoading } = useGetProductsQuery({ title: searchValue })

	useEffect(() => {
		if (!currentUser) return
		setValue(currentUser)
	}, [currentUser])

	const handleClick = () => {
		if (!currentUser) dispatch(toggleForm(true))
		else {
			navigate(ROUTES.PROFILE)
		}
	}

	const handleSearch = ({ target: { value } }) => {
		setSearchValue(value)
	}

	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<Link to={ROUTES.HOME}>
					<img src={LOGO} alt='stuff' />
				</Link>
			</div>
			<div className={styles.info}>
				<div className={styles.user} onClick={handleClick}>
					<div
						className={styles.avatar}
						style={{ backgroundImage: `url(${value.avatar})` }}
					/>
					<div className={styles.username}>{value.name}</div>
				</div>
				<form className={styles.form}>
					<div className={styles.icon}>
						<svg className='icon'>
							<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
						</svg>
					</div>
					<div className={styles.input}>
						<input
							type='search'
							name='search'
							placeholder='Search for anything..'
							autoComplete='off'
							onChange={handleSearch}
							value={searchValue}
						/>
					</div>

					{searchValue && (
						<div className={styles.box}>
							{isLoading
								? 'Loading'
								: !data.length
								? 'No results'
								: data.map(({ title, images, id }) => {
										return (
											<Link
												key={id}
												onClick={() => setSearchValue('')}
												className={styles.item}
												to={`/products/${id}`}
											>
												<div
													className={styles.image}
													style={{ backgroundImage: `url(${images[0]})` }}
												/>
												<div className={styles.title}>{title}</div>
											</Link>
										)
								  })}
						</div>
					)}
				</form>

				<div className={styles.account}>
					<Link to={ROUTES.HOME} className={styles.favourites}>
						<svg className='icon-fav'>
							<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
						</svg>
					</Link>

					<Link to={ROUTES.CART} className={styles.cart}>
						<svg className='icon-cart'>
							<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
						</svg>
						{!!cart.length && (
							<span className={styles.count}>{cart.length}</span>
						)}
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Header
