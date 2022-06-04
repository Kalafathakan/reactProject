import { useParams } from 'react-router-dom';

type MenuProps = {
  post: {
  food_id: String,
  food_name: String,
  price: String,
  description: String,
  category: String,
  active: String,
  image: String
  };
};

const Menu = ({post}: MenuProps) => {
  const params = useParams();
  return (
    <div className='page-style'>
      <h1>Menu</h1>
      <h3>
          {post.food_id} - {post.food_name}
        </h3>
    </div>
  );
};

export default Menu;
