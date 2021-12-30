import React from "react";

const Part = (p) => {
  return (
    <p>{p.part} {p.exercises}</p>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
        <Part part={props.part1} exercises={props.exercises} />
        <Part part={props.part2} exercises={props.exercises2} />
        <Part part={props.part3} exercises={props.exercises3} />
    </div>
  )
}

const Footer = (props) => {
  return (
    <p>Number of exercises {props.exercises + props.exercises2 + props.exercises3}</p>
  )
}

const App = () => {
  const course = "Half Stack application development"
  const part1 = "Fundamentals of React"
  const exercises = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercises={exercises} exercises2={exercises2} exercises3={exercises3} />
      <Footer exercises={exercises} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App