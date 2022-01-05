import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    number: 0,
  }

  onIncrement = () => {
    const num = Math.floor(Math.random() * 100)
    console.log(num)
    this.setState(prevState => ({number: prevState.number + num}))
  }

  render() {
    const {number} = this.state
    const text = number % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="main-heading">Count {number}</h1>
          <p className="result">Count is {text}</p>
          <button
            className="increment-button"
            type="button"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
