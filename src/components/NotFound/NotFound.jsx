import React from 'react';
import notFoundImg from '../../assets/imgs/notfound.avif'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

  const navigate = useNavigate()

  return (
    <div className='text-center'>
    <div className="text-center py-5">
      <img src={notFoundImg} className='w-25 rounded-circle' alt="Not Found" />
    </div>
    <button className='btn btn-outline-warning mx-auto text-center mb-3' onClick={() => navigate("/home")}>Go To Home Page</button>
    </div>
  )
}

export default NotFound;
