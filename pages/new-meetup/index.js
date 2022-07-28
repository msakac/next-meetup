import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import React from "react";
import { useRouter } from 'next/router';

export default function NewMeetup() {
  const router = useRouter()

  async function addMeetupHandler(enteredMeetupData) {
    const resonse = await fetch("/api/new-meetup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enteredMeetupData)
    });

    const data = await resonse.json();
    console.log(data.message);
    router.replace('/');
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
