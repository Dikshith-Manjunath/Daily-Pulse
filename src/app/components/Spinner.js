import React, { Component } from 'react';
import { CircleLoader } from 'react-spinners';

export default class Spinner extends Component {
  render() {
    return (
      <div className='flex items-center justify-center h-100vh'>
        <CircleLoader size={250} />
      </div>
    )
  }
}
