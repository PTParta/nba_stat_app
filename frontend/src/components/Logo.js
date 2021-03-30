import ball_logo from '../images/ball_logov3.png'


const Logo = () => {


  return (
    <img
      /* class="card-img-top mb-3 w-auto" */
      src={ball_logo}
      alt='ball_logo'
      style={{
        width: '150px',
        height: '150px'
      }} />
  )
}

export default Logo