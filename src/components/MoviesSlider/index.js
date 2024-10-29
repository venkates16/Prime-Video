// Write your code here
import Slider from 'react-slick'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

import './index.css'

const MoviesSlider = props => {
  const {obj} = props

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="">
      <h1>Action Movies</h1>
      <div className="popContainer">
        <Slider {...settings}>
          {obj.map(each => {
            if (each.categoryId === 'ACTION') {
              return (
                <div key={each.id}>
                  <Popup
                    modal
                    trigger={<img src={each.thumbnailUrl} alt="thumbnail" />}
                  >
                    {close => (
                      <>
                        <div className="btnAlign">
                          {' '}
                          <button
                            type="button"
                            className="trigger-button"
                            onClick={() => close()}
                          >
                            Close
                          </button>
                        </div>
                        <div>
                          <MovieItem videoUrl={each.videoUrl} />
                        </div>
                      </>
                    )}
                  </Popup>
                </div>
              )
            }
            return null
          })}
        </Slider>
      </div>

      <h1>Comedy Movies</h1>
      <div>
        <Slider {...settings}>
          {obj.map(each => {
            if (each.categoryId === 'COMEDY') {
              return (
                <div key={each.id}>
                  {' '}
                  <Popup
                    modal
                    trigger={<img src={each.thumbnailUrl} alt="thumbnail" />}
                  >
                    {close => (
                      <div className="popVideo">
                        <div className="btnAlign">
                          <button
                            type="button"
                            className="trigger-button"
                            onClick={() => close()}
                          >
                            Close
                          </button>
                        </div>
                        <div>
                          <MovieItem videoUrl={each.videoUrl} />
                        </div>
                      </div>
                    )}
                  </Popup>
                </div>
              )
            }
            return null
          })}
        </Slider>
      </div>
    </div>
  )
}

export default MoviesSlider
