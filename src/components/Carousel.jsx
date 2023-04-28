import photo from '../assets/img/1.png'
import game1 from '../assets/img/Game2.png'
const Carousel = () => {
  return (
    <div className='carousel slide slidesTarget'>
      <div className='carousel-indicators '>
        <button type='button' data-bs-target='.slidesTarget' data-bs-slide-to='0' className='active' aria-current='true' />
        <button type='button' data-bs-target='.slidesTarget' data-bs-slide-to='1' />
        <button type='button' data-bs-target='.slidesTarget' data-bs-slide-to='2' />
        <button type='button' data-bs-target='.slidesTarget' data-bs-slide-to='3' />
      </div>
      <div className='carousel-inner text-white'>
        <div className='carousel-item active'>
          <div className='row align-items-center'>
            <div className='col-6 imgSlider'>
              <img className='d-block img-fluid w-100' src={photo} alt='' />
            </div>
            <div className='col-6 infoSlider'>
              <h4>Art Gallery API App</h4>
              <p>A React.js app that displays data as art work, with a search input so you can display only the pieces you're looking for and allows you to save your favourite pieces with a single like button. <br></br>Go to your favourites and click them to get more info about the authors and work itself.<br />
              <ul>
                <li className='liCarousel'>React.js (Vite), SCSS, JavaScript.</li>
              </ul>
              </p>
              <a className='deployLink' target='blank' href='https://github.com/DeliaBarron/ArtGalleryApp-React.git'>GO TO PROJECT'S REPO</a>
            </div>
          </div>
        </div>
        <div className='carousel-item'>
          <div className='row align-items-center'>
            <div className='col-6 imgSlider'>
              <img className='d-block img-fluid w-100' src={game1} alt='' />
            </div>
            <div className='col-6 infoSlider'>
              <h4>Tic-Tac-Toe Game</h4>
              <p>React.js game development of a classic one.<br />Watch your every move as you play and go back in time if one of them was a bit floppy...<br />
              Visit my <a target='blank' href="https://github.com/DeliaBarron/tic-tac-toe-ReactExer-withNotes.git"> GitHub repository</a> for a README.md full of self-made notes to understand the code of the game's main functions line by line and learn the basics as you play.
              </p>
              <ul>
                  <li className='liCarousel'>GitHub Documentation and deploy</li>
                  <li className='liCarousel'>React, JavaScript, CSS, HTML</li>
                </ul>
              <a className='deployLink' target='blank' href='https://deliabarron.github.io/tic-tac-toe-ReactExer-withNotes/'>GO TO PROJECT'S DEPLOY</a>
            </div>
          </div>
        </div>
      </div>
      <button className='carousel-control-prev' type='button' data-bs-target='.slidesTarget' data-bs-slide='prev'>
        <span className='carousel-control-prev-icon' />
      </button>
      <button className='carousel-control-next' type='button' data-bs-target='.slidesTarget' data-bs-slide='next'>
        <span className='carousel-control-next-icon' />
      </button>
    </div>
  )
}

export default Carousel
