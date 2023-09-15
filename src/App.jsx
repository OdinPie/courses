import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import List from './components/List/List'
import Swal from 'sweetalert2'
function App() {
  const [courses, setCourses] = useState([])
  const [totalCredit, setTotalCredit] = useState(0)
  const [remCredit, setRemCredit] = useState(20)
  const isExist = id=>{
    const temp =courses.find(course=>course.id===id);
    console.log(temp);
  } 
  const handleCourse = (course,credit)=>{
    isExist(course.id);
    if(totalCredit+credit<=20 && (20-remCredit)>=0){
    const newCourse = [...courses,course]
    setCourses(newCourse);
    const newCredit = totalCredit+credit;
    const newRemCredit = 20-newCredit;
    setTotalCredit(newCredit);
    setRemCredit(newRemCredit);
    }
    else{
      let timerInterval
Swal.fire({
  title: 'You can not enroll into this course',
  // html: 'I will close in <b></b> milliseconds.',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
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
