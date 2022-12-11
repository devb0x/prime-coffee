import Link from "next/link"
import styles from './MobileNavbar.module.css'

const MobileNavbar = () => {

	return (
		<div className={`${styles['nav-mobile']}`}>
			<ul className={`${styles['nav-mobile__list']}`}>
				<li>
					<Link href="/">
						Coffees
					</Link>
				</li>
				<li>
					<Link href="/">
						Accessories
					</Link>
				</li>
				<li>
					<Link href="/">
						Subscribe
					</Link>
				</li>
				<button className={`${styles['button-cta']}`}>
					shop now
				</button>
			</ul>
		</div>
	)
}

export default MobileNavbar