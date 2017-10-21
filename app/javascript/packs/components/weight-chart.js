import React from 'react'
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory'

const WeightChart = ({ weights }) => {
  if(!weights) {
    weights = [];
  }

  const lineData = () => {
    return weights.map((weight, index) => {
      return {
        x: parseInt(index),
        y: parseFloat(weight)
      }
    })
  }

  const axisText = () => {
    if(weights.length === 0){
      return
    }

    return {
      x: [0, weights.length - 1],
      y: [weights.reduce((minor, weight) => {
          if(minor > weight) {
            minor = parseFloat(weight)
          }

          return minor
        }, 200),
        weights.reduce((major, weight) => {
          if(major < weight) {
            major = parseFloat(weight)
          }

          return major
        }, -1)
      ]
    }
  }

  return (
    <div className="collection weight-chart">
      <span className="weight-chart__title">Histórico de Peso</span>

      <VictoryChart theme={ VictoryTheme.material }>
        <VictoryLine data={ lineData() }
                     style={ { data: { stroke: "#088ff0" } } }
                     categories={ axisText() } />
      </VictoryChart>

      <p className="weight-chart__observation">Peso x Dias passados de evento</p>
    </div>)
}

export default WeightChart
