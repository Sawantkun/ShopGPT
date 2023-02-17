import React from 'react'

const Helmet = (props) => {
    document.title = 'maltimart -' + props.title
  return (
    <div>Helmet</div>
  )
}

export default Helmet