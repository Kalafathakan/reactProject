type FoodProps = {
  food: {
    food_id: String,
    food_name: String,
    price: String,
    description: String,
    category: String,
    active: String,
    image: String
  };
};

const Food = ({ food }: FoodProps) => {
  return (
      <div className='food-box'>
        <div className='food-img'>
          <img src={`https://shielded-depths-40144.herokuapp.com/assets/images/${food.image}`} alt={`${food.food_name}`} className="img-responsive img-curve" height="auto" width="150px" />
        </div>
        <div className='food-details'>
          <h4>{food.food_name}</h4>
          <p className="food-price">${food.price}</p>
          <p className="food-desc">{food.description}</p>
        </div>
      </div>
  );
};

export default Food;
