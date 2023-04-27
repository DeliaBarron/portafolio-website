import { useInfoContext } from '../context/InfoContext'
const Navbar = () => {
  const { handleClick } = useInfoContext()
  
  const openCollapse = () => {
    window.scrollTo({
      top:900,
      left:0,
      behavior:'smooth'
    })
    
  }

  return (
    <div className='container-fluid'>
      <nav className='row'>
        <div className='col-2 navrow'>
          <h4>DELIA BARRON
            <hr />WEB DEVS
          </h4>
        </div>
        <div className='col-10 d-flex justify-content-end align-items-center'>
          <button className='btn btn-lg btn-block about' value='about' onClick={handleClick}>ABOUT</button>
          <button className='btn btn-lg btn-block cv' value='cv' onClick={handleClick}>CV</button>
          <button className='btn btn-lg btn-block projects' onClick={openCollapse}>PROJECTS</button>
        </div>
      </nav>
    </div>

  )
}

export default Navbar
