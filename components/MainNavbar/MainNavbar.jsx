import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../../store/uiSlice"
import Link from "next/link"
import Image from "next/image"

import BrandLogo from "../BrandLogo/BrandLogo"
import MobileNavbar from "../MobileNavbar/MobileNavbar"

import styles from './MainNavbar.module.css'
import cart from '../../public/assets/icons/cart-icon.svg'
import coffee from '../../public/assets/icons/coffee-icon.svg'
import close from '../../public/assets/icons/close-icon.svg'

const MainNavbar = () => {
	const dispatch = useDispatch()

	const mobileNavHandler = () => {
		// todo Should i add payload on the toggle function or not? It still working without it
		dispatch(uiActions.toggle())
	}

	const mobilMenu = useSelector(state => state.ui.mobileNavVisible)

	return (
		<nav className={`${styles['main-nav']}`}>
			<BrandLogo />
			<div className={`${styles['mobile-only']}`}>
				<ul className={`${styles['main-nav__list']}`}>
					<li>
						<Link href="/">
							<Image
								src={cart}
								alt="cart"
								className={`${styles['main-nav__icon']}`}
							/>
						</Link>
					</li>
					<li>
						<Image
							src={!mobilMenu ? coffee : close}
							alt="cup of coffee"
							className={`${styles['main-nav__icon']}`}
							onClick={() => {
								mobileNavHandler()
							}}
						/>
					</li>
				</ul>
			</div>

			<div className={`${styles['desktop-only']}`}>
				<ul className={`${styles['main-nav__list']}`}>
					<li>
						 <Link href="/">
							 Coffee
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
					<li>
						<Link href="/">
							<Image
								src={cart}
								alt="cart"
								className={`${styles['main-nav__icon']}`}
							/>
						</Link>
					</li>
				</ul>
			</div>

			{mobilMenu &&
				<MobileNavbar />
			}

		</nav>
	)
}

export default MainNavbar