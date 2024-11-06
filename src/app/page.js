"use client"
import React, { Component } from 'react'
import Navbar from "./Navbar";
import News from "./news/page";

export default class page extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}


