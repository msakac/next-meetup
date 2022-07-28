import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import React, { Fragment } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function NewMeetup() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const resonse = await fetch("/api/new-meetup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enteredMeetupData),
    });

    const data = await resonse.json();
    console.log(data.message);
    router.replace("/");
  }

  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking oportunities!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </Fragment>
  );
}
