//import ball_logo from '../../images/ball_logov6.png'
import ball_logo from '../../images/ball_logov6.png'

const Logo = () => {

  const logoSize = '150px'

  return (
    <img
      src={ball_logo}
      alt='ball_logo'
      style={{
        width: logoSize,
        height: logoSize
      }} />

  )
}

export default Logo