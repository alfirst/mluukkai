import React from 'react'

// eslint-disable-next-line
const Header = (props) => {
  return (<div><h1>{props.course}</h1></div>)
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.num}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>
      {props.name} {props.num}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.partsArr[0]}/>
      <Part part={props.partsArr[1]}/>
      <Part part={props.partsArr[2]}/>
    </div>
  )
}
// eslint-disable-next-line
const App = () => {  
  const course = 'Full Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const partsArr =[
    {name:part1, num: exercises1},
    {name:part2, num: exercises2},
    {name:part3, num: exercises3}
  ]

  return (
    <div>
      <Header course={course} />
      <Content partsArr={partsArr} /> 
      <Total name='Number of exercises' num={exercises1 + exercises2 + exercises3}/>      
    </div>
  )
}

export default App