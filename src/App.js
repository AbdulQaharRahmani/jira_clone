import { useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Modal from './components/Utilities/Modal';

function App() {
  const [showModal , setShowModal] = useState({state: false});
  return (
    <div className='font-sans'>
      <Layout />
      <Modal  show={showModal} setShow={setShowModal} />
      <button className='fixed top-0 right-0 z-50 ' onClick={()=>setShowModal(true)}>Show</button>
    </div>
  );
}

export default App;
