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
    <div>
      <h3 className="user-home__name">Histórico de Peso</h3>
      
      <div className="card collection weight-chart">

        <VictoryChart theme={ VictoryTheme.material }>
          <VictoryLine data={ lineData() }
                      style={ { data: { stroke: "#088ff0" } } } />
        </VictoryChart>

        <p className="weight-chart__observation">Peso x Dias passados de evento</p>
      </div>
    </div>
  )
}

export default WeightChart
