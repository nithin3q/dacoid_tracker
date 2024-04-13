import { useState } from 'react'
import './App.css'
import image from './assets/image 13.png'
import image2 from './assets/arrow1.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container bg-white-200 p-4 ">
        <p class="absolute top-2 right-0 h-16 w-12  text-blue-500 underline">Skip</p>
        <img src={image} alt="random image" class="mx-auto mt-20 w-100"/>
        <p className='left-0 pl-10text-xl font-medium mt-14 mb-3'>Track Your Goal</p >
        <p className='text-gray-400'>Don’t worry if you have trouble  determining your goals, We can help you determine your goals and track your goals</p>
        <img src={image2} alt="random image" class="mx-auto mt-24 mr-2 "/>
    </div>  
    </>
  )
}

export default App
