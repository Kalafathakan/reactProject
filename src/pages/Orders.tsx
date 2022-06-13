import { useParams } from 'react-router-dom';
type Props = {};

const Orders = (props: Props) => {
  const params = useParams();
  return (
    <div className='page-style'>
      <h1>Orders</h1>
      <h3>Your Order History</h3>
      <table className="order-table">
        <tr>
          <th>Order #</th>
          <th>Food</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Cheesecake</td>
          <td>1</td>
          <td>$4.00</td>
          <td>2022-06-13</td>
          <td>Fulfilled</td>
        </tr>
      </table>
    </div>
  );
};

export default Orders;
