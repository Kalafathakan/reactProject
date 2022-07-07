import { useState, useEffect} from "react";
import axios from 'axios';


type imagesType = {
    image_id: string,
    image: string
};

const DealsAPI = () => {
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

            {imgs
                .map((img) => (
                    (img.image == "dealsAndPromotions.jpeg") ?
                        <img className="home-img" src={`https://shielded-depths-40144.herokuapp.com/assets/images/${img.image}`}></img> : ""
                ))}
        </div>
    );
};

export default DealsAPI;