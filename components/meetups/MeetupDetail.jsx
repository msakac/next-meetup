import React, { Fragment } from 'react'
import classes from './MeetupDetail.module.css'

export default function MeetupDetail({meetupData}) {
    return <section className={classes.detail}>
        <img src={meetupData.image} alt={meetupData.title} />
        <h1>{meetupData.title}</h1>
        <address>{meetupData.address}</address>
        <p>{meetupData.description}</p>
    </section>
}
