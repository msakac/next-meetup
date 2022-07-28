import React from 'react'
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'First meetup',
        image: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSyNxjEU6OTS3mYGIPcz5hZOt0w8RwYdrIaw2WNfMPDMR2qz15ki6qJomsHJZbQA-bj',
        address: 'Gospodarska ul. 29B, 42000, Varaždin',
        description: 'This is a first meetup'
    },
    {
        id: 'm2',
        title: 'Second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Varazdin_17.jpg',
        address: 'Gospodarska ulica 60, 42000, Varaždin',
        description: 'This is our second meetup'
    },
    {
        id: 'm3',
        title: 'Third meetup',
        image: 'https://media.timeout.com/images/103364239/image.jpg',
        address: ' Ul. Grada Lipika 15, 42204, Donji Kneginec',
        description: 'This is our third meetup'
    },
]

export default function HomePage() {
  return (
    <MeetupList meetups={DUMMY_MEETUPS}/>
  )
}
