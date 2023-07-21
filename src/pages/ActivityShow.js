import React from 'react'
import { PictureCard } from "../components/PictureCard";
import DetailsCard from "../components/DetailsCard";
import AddActivityModal from '../components/AddActivityModal/AddActivityModal'
import { useParams } from "react-router-dom"


const ActivityShow = (props) => {
    const { id } = useParams()
    let currentActivity = props.activities.find((activity) => activity.id === +id)
    console.log(currentActivity);

  return (
    <>
      <div>Your Activity</div>
      <div className='activityShowBody'>
        <PictureCard />
        <DetailsCard activities={props.activities}/>
        <AddActivityModal />
      </div>
    </>
  )
}

export default ActivityShow