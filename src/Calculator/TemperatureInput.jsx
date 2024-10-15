import React from 'react'

function TemperatureInput(props) {
  const { title, temperature, onTemperatureChange } = props
  const handleChange = (e) => {
    onTemperatureChange(e.target.value)
  }
  return (
    <div className='temperature-input'>
      <fieldset>
        <legend>Enter Temperature in {title}</legend>
        <input value={temperature} onChange={handleChange} />
      </fieldset>
    </div>
  )
}

export default TemperatureInput
