import React from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'
export default function MeetupDetailPage(props) {
    return <MeetupDetail meetupData={props.meetupData} />
}

export async function getStaticProps(context){
    //fetch data for single meetup

    const meetupId = context.params.meetupId;
    console.log(meetupId);

    return {
        props:{
            meetupData:{
                id: meetupId,
                title: 'First meetup',
                image: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSyNxjEU6OTS3mYGIPcz5hZOt0w8RwYdrIaw2WNfMPDMR2qz15ki6qJomsHJZbQA-bj',
                address: 'Gospodarska ul. 29B, 42000, Varaždin',
                description: 'This is a first meetup'
            }
        }
    }
}
