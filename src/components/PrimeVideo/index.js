// Write your code here

import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props

  return (
    <div>
      <div className="imgCard">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
      </div>
      <MoviesSlider obj={moviesList} />
    </div>
  )
}

export default PrimeVideo
