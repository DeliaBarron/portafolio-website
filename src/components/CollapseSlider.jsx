import Carousel from './Carousel'
const CollapseSlider = () => {
  return (
    <div id='projectsSection' className='container-fluid projects'>
      <div className='row projects-btn-row bg-black'>
        <button id='btn-collapse' className='btn btn-black  text-white' data-bs-toggle='collapse' data-bs-target='.collapse' aria-expanded='false' aria-controls='collapse'>
          PROJECTS HERE!
        </button>
        <div className='collapse collapseSlider' >
          <Carousel />
        </div>

      </div>

    </div>

  )
}

export default CollapseSlider
