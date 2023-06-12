import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/flaire-logo-white-text.png'

const Logo = () => {
  return (
    <Link to='/'>
      <img
        className='hidden md:block bg-black'
        src={logoImg}
        alt='logo'
        width='100'
        
        height='100'
      />
    </Link>
  )
}

export default Logo
