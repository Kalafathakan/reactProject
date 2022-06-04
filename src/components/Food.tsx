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

const Food = ({food}: FoodProps) => {
  return (
    <div className='food-box'>
        {food.food_id} - {food.food_name}
    </div>
  );
};

export default Food;
