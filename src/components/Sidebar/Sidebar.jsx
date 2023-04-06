import React from 'react'

import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styles from '../../styles/Sidebar.module.css'

const Sidebar = ({ amount }) => {
	const { list } = useSelector(({ categories }) => categories)
	const listFiltered = list.filter((_, i) => i < amount)

	return (
		<section className={styles.sidebar}>
			<div className={styles.title}>CATEGORIES</div>
			<nav>
				<ul className={styles.menu}>
					{listFiltered.map(({ id, name }) => {
						return (
							<li key={id}>
								<NavLink
									className={({ isActive }) =>
										`${styles.link} ${isActive ? styles.active : ''}`
									}
									to={`/categories/${id}`}
								>
									{name}
								</NavLink>
							</li>
						)
					})}
				</ul>
			</nav>
			<div className={styles.footer}>
				<a href='#' target='_blank' className={styles.link}>
					Help
				</a>
				<a
					href='#'
					target='_blank'
					className={styles.link}
					style={{ textDecoration: 'underline' }}
				>
					Terms & Conditions
				</a>
			</div>
		</section>
	)
}

export default Sidebar
