import React from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from '../../utils/routes'

import LOGO from '../../images/logo.png'

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<Link to={ROUTES.HOME}>
					<img src={LOGO} alt='stuff' />
				</Link>
			</div>
		</div>
	)
}

export default Header
