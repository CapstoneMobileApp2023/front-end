import React, { useState } from 'react'
import PictureCard from "../components/PictureCard";
import { Card, Text } from "@nextui-org/react";
import AddActivityModal from '../components/AddActivityModal'
import { useParams, Link, NavLink } from "react-router-dom"
import styles from '../styles/ActivityShow.css'
import shadows from '@mui/material/styles/shadows';


const ActivityShow = ({activities, deleteActivity, currentUser, createUserActivity}) => {


  const { id } = useParams()
  let currentActivity = activities?.find((activity) => activity.id === +id)

  const handleDelete = () => {
    deleteActivity(currentActivity?.id)
  }

  const [userActivityState, setUserActivityState] = useState({
    user_id: currentUser?.id,
    activity_id: currentActivity?.id
  })

  const [buddyUp, setBuddyUp] = useState(false)

  const submitHandler = () => {
      setBuddyUp(!buddyUp)
    createUserActivity(userActivityState)
  }


  return (
    <>
      <div>
        <img currentActivity={currentActivity}/>
        <div/>

          <p>{currentActivity?.category}</p>

        <p>ACTIVITY NAME</p>

        <p>
        {currentActivity?.activity_name}</p>

        <p>Time</p>

        <p>{currentActivity?.start_time}</p>

        <p>Duration</p>

        <p> {currentActivity?.duration}</p>

        <p>Location</p>

        <p> {currentActivity?.location}</p>

        <p>Info</p>

        <p>{currentActivity?.description}</p>

        <p>CREATOR ID  <button>Add Contact</button></p>

        <p>{currentUser?.id}</p>

        <p>Attendees</p>

        {buddyUp?
          <p>{currentUser.name}</p>
        :null}

  </div>
    <div className='show_links'>
      <NavLink to={`/`}>
        <button  onClick={handleDelete}>DELETE</button>
      </NavLink>

      <NavLink to={`/`}>
        <button>CANCEL</button>
      </NavLink>

      <NavLink to={`/activityedit/${currentActivity.id}`}>
        <button>EDIT</button>
      </NavLink>
        <button onClick={submitHandler}>Buddy Up</button>
    </div>

        <AddActivityModal />
    </>
  )
}

export default ActivityShow

