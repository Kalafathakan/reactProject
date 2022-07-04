import React, { useState, useEffect } from "react";
import axios from 'axios';
import OrderTable from './OrderTable';

type OrderListProps = {
    name: string;
    phone: string;
    cart: string;
    total: string;
    date: string;
}

const OrdersAPI = () => {
    const [orderList, setOrderList] = useState<OrderListProps[]>([]);

    const sendGetRequest = async () => {
        try {
            const response = await axios.get(
                'https://shielded-depths-40144.herokuapp.com/orders'
            );
            setOrderList(response.data);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetch('https://shielded-depths-40144.herokuapp.com/orders')
            .then((response) => response.json())

            .then((responseData) => {
                setOrderList(responseData);

                console.log(responseData);
            });

        axios.get('https://shielded-depths-40144.herokuapp.com/orders').then((response) => {
            setOrderList(response.data);
            console.log(response);
        });
        sendGetRequest();
    }, []);

    //displaying everyone in the app to user
    return (
        <div className='page-style-hk'>
            <h1 id="topics-hk">Your Order History</h1>
            <div className="order-table">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Food</th>
                        <th>Total</th>
                        <th>Date</th>
                    </tr>
                    {orderList
                        .map((o) => (
                            <OrderTable
                                name={o.name}
                                phone={o.phone}
                                cart={o.cart}
                                total={o.total}
                                date={o.date} />
                        ))}
                </table>
            </div>
        </div>
    );
};

export default OrdersAPI;