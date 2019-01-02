import React, { Component } from 'react';

export default function Checking(props){
  return <h1>{props.data[0] ? "Compare List" : "Loading..."}</h1>;
}