const Header = (props) => ( < h1>{props.name}</h1> )

const Content = (props) => {
  console.log(props.parts[0])

  return (
    <div>  
      <Part {...props.parts[0]}/>
      <Part {...props.parts[1]}/>
      <Part {...props.parts[2]}/>
    </div>
  )
}

const Part = (props) => ( <p>{props.name} {props.exercises}</p> )

const Total = (props) => ( <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p> )

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  console.log(course.name)
  return (
    <div>
      <Header {...course}/>
      <Content  {...course}/>
      <Total  {...course} />
    </div>
  )
}

export default App