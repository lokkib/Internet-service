import styles from './style.module.scss'
import HomeIcon from './Icons/HomeIcon'
import AuthIcon from './Icons/AuthIcon'
import NewAdvIcon from './Icons/NewAdvIcon'

const MobFooter = ({classType}) => {
	return <footer className={styles[classType]}> 
		<div  className={styles.footerContainer}>
			<div className={styles.home}>
<a href="http://localhost:3000/">
	<HomeIcon />
</a>
			</div>
			<div className={styles.newAdv}>
			<a href="http://localhost:3000/">
				<NewAdvIcon />
			</a>
			</div>
			<div className={styles.auth}>
			<a href="http://localhost:3000/">
				<AuthIcon />
			</a>
			</div>
		</div>
	</footer>
}

export default MobFooter