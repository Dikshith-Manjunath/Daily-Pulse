import React, { Component } from 'react';
import { CircleLoader } from 'react-spinners';

export default class Spinner extends Component {
  render() {
    return (
      <div className="flex items-center justify-center h-screen my-5 pt-8">
        <CircleLoader size={200} />
      </div>
    )
  }
}
