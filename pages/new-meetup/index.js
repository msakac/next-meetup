import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import React from 'react'

export default function NewMeetup() {

    function addMeetupHandler(enteredMeetupData){
        console.log(enteredMeetupData);
    }

  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  )
}
