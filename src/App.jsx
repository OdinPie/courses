import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import List from './components/List/List'
function App() {
  const [courses, setCourses] = useState([])
  const [totalCredit, setTotalCredit] = useState(0)
  const [remCredit, setRemCredit] = useState(20)
  const handleCourse = (course,credit)=>{
    if(totalCredit+credit<=20 && (20-remCredit)>=0){
    const newCourse = [...courses,course]
    setCourses(newCourse);
    const newCredit = totalCredit+credit;
    const newRemCredit = 20-newCredit;
    setTotalCredit(newCredit);
    setRemCredit(newRemCredit);
    }
    else{
      alert('GET OUT!');
    }
 
  } 
  return (
    <div>
      <h2 className='text-3xl font-bold'>Course Registration</h2>
      <div className="my-10"></div>
      <div className="flex gap-7">
      <Cards handleCourse={handleCourse}></Cards>
      <List courses={courses} totalCredit={totalCredit} remCredit={remCredit}></List>
      </div>
    </div>
  )
}

export default App
