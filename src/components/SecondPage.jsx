// App.js

import { useState } from 'react';
import image from '../assets/cycle.png';
import image2 from '../assets/arrow2.png';
import { Link } from 'react-router-dom';

function SecondPage() {
  const [count, setCount] = useState(0);

  return (
    <>
        <Link to="/signup"><p className="absolute top-2 right-0 h-16 w-12  text-blue-500 underline">Skip</p></Link>
        <img src={image} alt="random image" className="mx-auto mt-20 w-100" />
        <p className="text-xl font-medium mt-14 mb-3">Get Burn</p>
        <p className="text-gray-400">Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever</p>
        <Link to="/signup"><img src={image2} alt="random image" className="mx-auto mt-16 mr-2" /></Link>
    </>
  );
}

export default SecondPage;
