import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import React from "react";

export default function NewMeetup() {
  async function addMeetupHandler(enteredMeetupData) {
    const resonse = await fetch("/api/new-meetup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enteredMeetupData)
    });

    const data = await resonse.json();
    console.log(data.message);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
