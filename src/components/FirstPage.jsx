import image from '../assets/run.png';
import image2 from '../assets/arrow1.png';
import { Link } from 'react-router-dom';

function FirstPage() {

  return (
    <>
       <Link to="/signup"><p className="absolute top-2 right-0 h-16 w-12  text-blue-500 underline">Skip</p></Link>
        <img src={image} alt="random image" className="mx-auto mt-20 w-100" />
        <p className="text-xl font-medium mt-14 mb-3">Track Your Goal</p>
        <p className="text-gray-400">Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals</p>
        <Link to="/secondpage"><img src={image2} alt="random image" className="mx-auto mt-16 mr-2" /></Link>
    </>
  );
}

export default FirstPage;
