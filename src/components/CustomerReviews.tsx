//declaring ReviewProps with properties and functions
type ReviewsProps = {
  name: string;
  rating: string;
  review: string;
  id: string;
  onAdd: (id: string) => void
}

//props are arguements/properties that are passed to the React components
const CustomerReviews = (props: ReviewsProps) => {
  return (
    <div className="reviews-list">
      <br></br>
      <table>
        <tr>Name: {props.name}</tr>
        <tr>Rating: {props.rating}</tr>
        <tr>Review: {props.review}</tr>
      </table>
    </div>
  );
};

export default CustomerReviews;