/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import img from './tyranitarCropped.png'
import { Link } from 'react-router-dom';
import JoinGameModal from './JoinGameModal.js'
import { io } from 'socket.io-client';
import { socket, emitters } from '../../socket.js'
import happyCat from '../../assets/avatars/happyCat.png';

const LandingPage = ({userInfo}) => {
  const [showModal, setShowModal] = useState(false);
  const [rooms, setRooms] = useState([])
  const id = socket.id;
  const path = `/lobby/${id}`

  const openModal = (e) => {
    e.preventDefault();
    setShowModal(true);
  }
  const closeModal = (e) => {
    e.preventDefault();
    setShowModal(false);
  }
  const hostRoom = () => {
    socket.emit('host-room', id)
  }

  //grab room data from database

  // socket.on('rooms-available', data => {
  //  console.log(data)
  // })


  // const guest = 'Guest' + Math.floor(Math.random() * 1000000).toString();

  return (
    <div className='relative top-1/4'>
      {showModal ? <JoinGameModal closeModal={closeModal} userInfo={userInfo}/> : null}
      <div className='flex justify-evenly'>
        {/* <GameNav /> */}
        <div className='flex flex-col gap-4 justify-around'>
          <Link to='/lobby' onClick={hostRoom} className={linkStyle}> Host a Game </Link>
          <button onClick={(e) => openModal(e)} className={buttonStyle}> Join a Game </button>
          <button className={buttonStyle}> Join a Random Game </button>
        </div>
        {/* <Profile /> */}
        {/* {!user &&
          <div className='flex flex-col gap-4 justify-center'>
            <img src={userInfo.avatar} alt='profile picture' className='object cover h-80 w-80 rounded-full' />
            <div className='flex justify-center'>
              <div className='max-w-max text-2xl'>{userInfo.username}</div>
            </div>
          </div>
        }
        {user && */}
          <div className='flex flex-col gap-4 justify-center'>
            <img src={userInfo.avatar} alt='profile picture' className='object cover h-80 w-80 rounded-full' />
            <div className='flex justify-center'>
              <div className='max-w-max text-2xl'>{userInfo.username}</div>
            </div>
          </div>
        {/* } */}
      </div>
    </div>
  )
}

const linkStyle = 'p-4 bg-[#81B29A] rounded h-16 w-80 text-xl text-center text-white font-bold hover:outline hover:outline-4 hover:outline-[#E07A5F]';
const buttonStyle = 'p-2 bg-[#81B29A] rounded w-80 h-16 text-xl text-white font-bold hover:outline hover:outline-4 hover:outline-[#E07A5F]';

// bg-[#81B29A] hover:outline text-white font-bold py-2 px-4 rounded FROM JOSH

export default LandingPage;
