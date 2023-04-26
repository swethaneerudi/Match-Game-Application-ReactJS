import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, clickThumbnailItem} = props
  const {thumbnailUrl} = imageDetails

  const onClickThumbnail = () => {
    clickThumbnailItem(thumbnailUrl)
  }

  return (
    <>
      <li className="thumbnail-item-container">
        <button type="button" className="button" onClick={onClickThumbnail}>
          <img
            className="thumbnail-item-image"
            src={thumbnailUrl}
            alt="thumbnail"
          />
        </button>
      </li>
    </>
  )
}

export default ThumbnailItem
