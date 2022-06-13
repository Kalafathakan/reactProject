//importing useState to update the task total with the buttons
import React, { useState } from 'react';

//used to create a unique ID
import { v4 as uuidv4 } from 'uuid';

//importing the components for the header and the tasks
import CustomerReviews from '../components/CustomerReviews';
import AddReviewForm from '../components/AddReviewForm';
import SearchRating from '../components/SearchRating';

//importing the css involved with the app
import '../App.css';

//declaring ReviewsListProps properties as an array
type ReviewListProps = {
    name: string;
    rating: string;
    review: string;
    id: string;
}[];

const Reviews = () => {
    const [search, setSearch] = useState('');
    const [reviewsList, setReviewsList] = useState<ReviewListProps>([
        {
            name: 'Nicholas',
            rating: '5',
            review: 'Amazing Deals and unresistable taste! Definitely will be back!',
            id: "1",
        },
        {
            name: 'Guray',
            rating: '3',
            review: 'The drink and main combo is priced extremely well',
            id: "2",
        },
        {
            name: 'Vishnu',
            rating: '4.5',
            review: 'The right amount of food for the price',
            id: "3",
        },
        {
            name: 'Zafer',
            rating: '4.5',
            review: 'Finished my meal and wanted more from it being so good',
            id: "4",
        },
        {
            name: 'Oreoluwa',
            rating: '4',
            review: 'Would recommend to everyone',
            id: "5",
        }
    ]);

    //adding of task - ... is a spread operator
    const handleAddReview = (name: string, rating: string, review: string) => {
        setReviewsList((prevState) => [
            ...prevState,
            { name: name, rating: rating, review: review, id: uuidv4() },
        ]);
    };

    //filtering by the rating
    const filterReviews = (rating: string) => {
        if (rating) {
            setSearch(rating);
        } else {
            setSearch('');
        }
    };

    //displaying everyone in the app to user
    return (
        <div className='page-style'>
            <h1>Reviews</h1>
            <AddReviewForm onAdd={handleAddReview} />
            <SearchRating filterRating={filterReviews} />
            {reviewsList
                .filter((rl) => rl.rating.toLowerCase().includes(search.toLowerCase()))
                .map((rl) => (
                    <CustomerReviews
                        name={rl.name}
                        rating={rl.rating}
                        review={rl.review}
                        id={rl.id}
                        key={rl.id.toString()}
                        onAdd={function (id: string): void {

                        }} />
                ))}
        </div>
    );
};

export default Reviews;

