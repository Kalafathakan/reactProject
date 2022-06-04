import React, { useState, useEffect } from "react";
import axios from 'axios';
import Menu from "../pages/Menu";

type PostType = {
  _id: String,
  food_id: String,
  food_name: String,
  price: String,
  description: String,
  category: String,
  active: String,
  image: String
};

// food_id: String,
// food_name: String,
// price: String,
// description: String,
// category: String,
// active: String,
// image: String

const JsonAPI = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const sendGetRequest = async () => {
    try {
      const response = await axios.get(
        'https://shielded-depths-40144.herokuapp.com/foods'
      );
      setPosts(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  // const sendDeleteRequest = async () => {
  //   try {
  //     const response = await axios.delete(
  //       'https://shielded-depths-40144.herokuapp.com/foods/1'
  //     );

  //     console.log(response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const sendPostRequest = async () => {
  //   try {
  //     const response = await axios.post(
  //       'https://shielded-depths-40144.herokuapp.com/foods',
  //       {
  //         title: 'foo',
  //         body: 'bar',
  //         userId: 1,
  //       }
  //     );

  //     console.log(response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const sendPutRequest = async () => {
  //   try {
  //     const response = await axios.put(
  //       'https://shielded-depths-40144.herokuapp.com/foods/:_id',
  //       {
  //         food_id: String,
  //         food_name: String,
  //         price: String,
  //         description: String,
  //         category: String,
  //         active: String,
  //         image: String
  //       }
  //     );

  //     console.log(response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => response.json())

    //   .then((responseData) => {
    //     setPosts(responseData);

    //     console.log(responseData);
    //   });

    // axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
    //   setPosts(response.data);
    //   console.log(response);
    // });
    sendGetRequest();
  }, []);

  return (
    <div>
      {/* <button onClick={sendPostRequest}>Add Post</button>
      <button onClick={sendPutRequest}>Update Post</button>
      <button onClick={sendDeleteRequest}>Delete Post</button> */}
      {posts.map((post) => (
        <Menu post={post} key={post._id.toString()} />
      ))}
    </div>
    // issue most like in key={post.id} matching!!
  );
};

export default JsonAPI;