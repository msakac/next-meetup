import MeetupList from '../components/meetups/MeetupList'
import {MongoClient} from 'mongodb';

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

  const client = await MongoClient.connect('mongodb+srv://msakac:12131213@cluster0.r8dwj.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
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

