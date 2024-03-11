import ReactLogo from '../logo.svg'
import {Link} from 'react-router-dom'

 import '../styles/header.css'

export default function Header(){
	return(
		
		<header className='headerContainer' >
			<img src={ReactLogo} alt='logo React'/>
			<p className='titre'>presta-surmesure</p>
			<ul className='list-items'>
			    <Link className='link' to={'reprog'}>reprogramation</Link>
				<Link className='link' to={'convertion'}>convertion e85</Link>
				<Link className='link' to={'boutique'}>boutique</Link>
				<Link className='link' to={'stages'}>presentation des satges</Link>
			</ul>
			


		</header>
		
    )
}