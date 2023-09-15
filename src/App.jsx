import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import List from './components/List/List'
function App() {
  const [courses, setCourses] = useState([])
  const handleCourse = course=>{
    const newCourse = [...courses,course]
    setCourses(newCourse);
  } 
  return (
    <div>
      <h2 className='text-3xl font-bold'>Course Registration</h2>
      <div className="my-10"></div>
      <div className="flex gap-7">
      <Cards handleCourse={handleCourse}></Cards>
      <List courses={courses}></List>
      </div>
    </div>
  )
}

export default App
