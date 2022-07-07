import { useState, useEffect } from "react";
import axios from 'axios';


type imagesType = {
    image_id: string,
    image: string
};

const GalleryAPI = () => {
    const [imgs, setImgs] = useState<imagesType[]>([]);

    const sendGetRequest = async () => {
        try {
            const response = await axios.get(
                'https://shielded-depths-40144.herokuapp.com/images'
            );
            setImgs(response.data);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {

        axios.get('https://shielded-depths-40144.herokuapp.com/images').then((response) => {
            setImgs(response.data);
            console.log(response);
        });
        sendGetRequest();
    }, []);

    return (
        <div className="container">

            <p id='gallery-p'> These are our chefs that prepare our delicious menu!</p>
            {imgs
                .map((img) => (
                    (img.image == "our-chefs.jpg") ?
                        <img id="gallery-img" src={`https://shielded-depths-40144.herokuapp.com/assets/images/${img.image}`}></img> : ""
                ))}

            <br /><br /><br />
            <p id='gallery-p'> A view of our spacious kitchen our chefs use to prepare your meal!</p>
            {imgs
                .map((img) => (
                    (img.image == "our-kitchen.jpg") ?
                        <img id="gallery-img" src={`https://shielded-depths-40144.herokuapp.com/assets/images/${img.image}`}></img> : ""
                ))}

            <br /><br /><br />
            <p id='gallery-p'> Ask about dining on our beautiful outdoor patio!</p>
            {imgs
                .map((img) => (
                    (img.image == "outdoor-patio-bar.jpg") ?
                        <img id="gallery-img" src={`https://shielded-depths-40144.herokuapp.com/assets/images/${img.image}`}></img> : ""
                ))}

            <br /><br /><br />
            <p id='gallery-p'> Our staff are always delivering excellent service to all tables directly!</p>
            {imgs
                .map((img) => (
                    (img.image == "restaurant-customer-service.jpg") ?
                        <img id="gallery-img" src={`https://shielded-depths-40144.herokuapp.com/assets/images/${img.image}`}></img> : ""
                ))}
        </div>
    );
};

export default GalleryAPI;