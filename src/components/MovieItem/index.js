// Write your code here
import ReactPlayer from 'react-player'
import './index.css'

const MovieItem = props => {
  const {videoUrl} = props

  return (
    <div className="videoPlayer">
      <ReactPlayer url={videoUrl} width="100%" height="100%" />
    </div>
  )
}

export default MovieItem
