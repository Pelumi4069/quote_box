import React, { Component } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { random } from 'lodash';
import QuoteMachine from './Components/QuoteMachine';
import { Grid } from '@mui/material';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
      backgroundColor: 'bg-red-400', // Initial background color
    };
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
    this.changeColors = this.changeColors.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
  }

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  selectQuoteIndex() {
    if (!this.state.quotes.length) {
      return undefined;
    }
    return random(0, this.state.quotes.length - 1);
  }

  assignNewQuoteIndex() {
    this.setState({ selectedQuoteIndex: this.selectQuoteIndex() });
    this.changeColors(); // Call function to change colors
  }
  // , 'bg-cyan-800', 'bg-teal-600', 'bg-violet-600', 'bg-purple-800',  'bg-pink-600'  'bg-rose-400'

  changeColors() {
    const colors = ['bg-red-400', 'bg-teal-800', 'bg-cyan-800', 'bg-violet-700', 'bg-purple-800', 'bg-sky-700', 'bg-rose-500', 'bg-pink-800',];
    const randomColorClass = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ backgroundColor: randomColorClass });
}

  render() {
    console.log(this.state.selectedQuoteIndex);
    const { backgroundColor } = this.state;

    return (
      <Grid container className={`App ${backgroundColor}`} id="quote-box">

        <Grid className="lg:w-5/12 md:w-7/12 sm:w-8/12 w-8/12 rounded-lg" >
          {
            this.selectedQuote ?
              <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex} backgroundColor={this.state.backgroundColor} /> :
              null
          }
          <p className='mt-2 text-[#ffffff] '>By Pelumi</p>
        </Grid>
       
      </Grid>
    );
  }
}

export default App;
