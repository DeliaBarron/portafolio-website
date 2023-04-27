
import Form from './Form'

const Footer = () => {
  return (
    <footer className='container-fluid' id='footer-section'>
      <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-12 border border-black redes'>
          <div className='row'>
            <a className='a-footer' target='_blank' href='https://github.com/DeliaBarron'>
              <button className='btn github btn-footer mt-3' > <i className='bi bi-github'> </i>GitHub</button>
              </a>
              <a className='a-footer' target='_blank' href='https://www.linkedin.com/in/delia-barr%C3%B3n/'>
            <button className='btn instagram btn-footer mt-3'> <i className='bi bi-linkedin'> </i>LinkedIn</button>
              </a>

          </div>

        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 pt-3 border border-black'>
          <h6>CONTACT  </h6>
          <Form />
        </div>
      </div>
    </footer>

  )
}

export default Footer
