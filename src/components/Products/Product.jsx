import React from 'react'

import { Link } from 'react-router-dom'
import styles from '../../styles/Product.module.css'
import { ROUTES } from '../../utils/routes'

const SIZES = [4, 4.5, 5]

const Product = ({ price, title, images, description }) => {
	const currentImage = images[0]
	return (
		<section className={styles.product}>
			<div className={styles.images}>
				<div
					className={styles.current}
					style={{ backgroundImage: `url(${currentImage})` }}
				/>
				{images.map(image, image => {
					return (
						<div
							key={i}
							className={styles.image}
							style={{ backgroundImage: `url(${image})` }}
							onClick={() => {}}
						/>
					)
				})}
			</div>
			<div className={styles.info}>
				<h1 className={styles.title}>{title}</h1>
				<div className={styles.price}>{price}</div>
				<div className={styles.color}>
					<span>Color:</span> Green
				</div>
				<div className={styles.sizes}>
					<span>Sizes:</span>
					<div className={styles.list}>
						{SIZES.map(size => {
							return (
								<div key={size} onClick={() => {}} className={`${styles.size}`}>
									{size}
								</div>
							)
						})}
					</div>
				</div>
				<p className={styles.description}>{description}</p>
				<div className={styles.actions}>
					<button className={styles.add}>Add to cart</button>
					<button className={styles.favorite}>Add to favorites</button>
				</div>

				<div className={styles.bottom}>
					<div className={styles.purchase}>19 people purchased</div>
					<Link to={ROUTES.HOME}>Find in a store</Link>
				</div>
			</div>
		</section>
	)
}

export default Product
