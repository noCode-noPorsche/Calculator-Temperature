import React, { useState } from 'react'
import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict'

const tryConvert = (temperature, scaleInput) => {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  let output
  if (scaleInput === 'f') {
    output = (input - 32) / 1.8
  } else {
    output = input * 1.8 + 32
  }
  output = Math.round(output * 1000) / 1000
  return output
}

function Calculator() {
  const [temperature, setTemperature] = useState('')
  const [scale, setScale] = useState('c')

  const handleChange = (scale) => (value) => {
    setTemperature(value)
    setScale(scale)
  }

  const celsius = scale === 'f' ? tryConvert(temperature, scale) : temperature
  const fahrenheit = scale === 'c' ? tryConvert(temperature, scale) : temperature
  return (
    <div className='calculator'>
      <TemperatureInput title='Celsius' temperature={celsius} onTemperatureChange={handleChange('c')} />
      <TemperatureInput title='Fahrenheit' temperature={fahrenheit} onTemperatureChange={handleChange('f')} />
      <BoilingVerdict celsius={celsius} />
    </div>
  )
}

export default Calculator
