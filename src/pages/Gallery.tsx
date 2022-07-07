import { useNavigate } from 'react-router-dom';
import GalleryAPI from '../components/GalleryAPI';
import '../styles/Gallery.css'

type Props = {};

const Gallery = (props: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };
  return (
    <div className='page-style'>
      <div className='div-img'>
        <h1 id='topics-hk'>Gallery</h1>
        <GalleryAPI />
      </div>
      <br></br>
    </div>
  );
};

export default Gallery;
