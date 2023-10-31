import { Component } from "react";
export class Wordcounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  calculateWords = (event) => {
    let word = event.target.value;
    const arr = word.trim().split(/\s+/).filter(Boolean);
    this.setState({ counter: arr.length });
  };
  render() {
    return (
      <div>
        <h1>Responsive Paragraph Word Counter</h1>
        <textarea
          onChange={this.calculateWords}
          placeholder="Enter any text......."
        />
        <h4>Word Count: {this.state.counter}</h4>
      </div>
    );
  }
}




