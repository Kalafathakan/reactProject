import { useParams } from 'react-router-dom';
type Props = {};

const Bookings = (props: Props) => {
  const params = useParams();
  return (
    <div className='page-style'>
      <h1>Book with us!</h1>
      <h3>Guide to become a Front-End Developer</h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/-_X6PhkjpzU"></iframe>
    </div>
  );
};

export default Bookings;
