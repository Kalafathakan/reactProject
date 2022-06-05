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
         <div className='foodpic'>
         <img src={`https://shielded-depths-40144.herokuapp.com/assets/images/${food.image}`} alt={`${food.food_name}`} className='img-responsive img-curve' height="auto" width="150px"/>
         </div>
      </div>
  );
};

export default Food;

{/* <table>
              <thead>
                  <tr>
                      <th colSpan={3}>{food.food_name}</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>
                          <img src={`https://shielded-depths-40144.herokuapp.com/assets/images/${food.image}`} />
                      </td>
                      <td>{food.description}</td>
                      <td className="right">Price: ${food.price}</td>
                  </tr>
              </tbody>
          </table> */}