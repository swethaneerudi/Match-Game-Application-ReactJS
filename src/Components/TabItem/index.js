import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }
  return (
    <div>
      <li className="tab-item-container">
        <button type="button" className="tab-btn" onClick={onClickTabItem}>
          {displayText}
        </button>
      </li>
    </div>
  )
}

export default TabItem
