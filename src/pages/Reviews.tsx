import ReviewsAPI from '../components/ReviewsAPI';

//importing the css involved with the app
import '../App.css';

const Reviews = () => {
    return (
        <div className='page-style-hk'>
          <h1 id="topics-hk">Menu</h1>
          <ReviewsAPI />
        </div>
      );
    };

export default Reviews;

