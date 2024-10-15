import React from 'react'

function BoilingVerdict(props) {
  const { celsius } = props

  return <div className='boiling-verdict'>{celsius >= 100 ? 'The water would boild' : 'The water would not boild'}</div>
}

export default BoilingVerdict
