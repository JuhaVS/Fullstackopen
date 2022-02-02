import React from 'react'

const Header = ({course}) => {
    return(
      <div>
      <h2>{course.name}</h2>
      </div>
  )
  }

const Content = ({parts}) => {

    return(
    <div>
      {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
    </div>
  
  )
  }
  
  const Total = ({parts}) => {

    const summa = parts.reduce((s, p) => s + p.exercises, 0)

    return(
    <div>
    <b>Number of exercises: {summa}</b>
    </div>
  )
  }
  
  const Part = (props) => {
    return(
  <p>
  {props.name}: {props.exercises}
  </p>
    )
  }

  const Course = ({course}) => {
    return(
        <div>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
  }

export default Course