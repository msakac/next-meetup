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

export default function HomePage(props) {
  return (
    <MeetupList meetups={props.meetups}/>
  )
}

export async function getStaticProps() {
  //always RUNS on deploy, never on server or client
  //Static Site Generation
  //revalidate = Incremental Static Site Generation -> regenerated on the server every X seconds
  //its time that waits before
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  };
}
// }

  //generate for every request
  //runs always on the server after deployment
  //fetch data from api or file system
  // export async function getServerSideProps(context){
  //   const req = context.req;
  //   const res = context.res;
  //   return {
  //     props:{
  //       meetups: DUMMY_MEETUPS
  //     }
  //   }
  // }


//getServerSideProps run on every request -> for real apps
//getStaticProps is better if we need only pregeneration before requests

