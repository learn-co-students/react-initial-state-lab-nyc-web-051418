import React, { Component } from 'react';

export default class ImageSlider extends Component {
  //currentSlideIndex prop starts at 0

  constructor() {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }

  // render 'I am on slide <CURRENT_SLIDE>'
  render() {
    return (
      <h1>I am on slide {this.state.currentSlideIndex}</h1>
    )
  }

}
