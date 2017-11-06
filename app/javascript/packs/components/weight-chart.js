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

  return (
    <div className="collection weight-chart">
      <span className="weight-chart__title">Histórico de Peso</span>

      <VictoryChart theme={ VictoryTheme.material }>
        <VictoryLine data={ lineData() }
                     style={ { data: { stroke: "#088ff0" } } } />
      </VictoryChart>

      <p className="weight-chart__observation">Peso x Dias passados de evento</p>
    </div>)
}

export default WeightChart
