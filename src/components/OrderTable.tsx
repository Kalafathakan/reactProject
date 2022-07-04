//declaring OrderProps with properties and functions
type OrderProps = {
  name: string;
  phone: string;
  cart: string;
  total: string;
  date: string;
}

const OrderTable = (props: OrderProps) => {
  return (
        <tr>
          <td>{props.name}</td>
          <td>{props.phone}</td>
          <td>{props.cart}</td>
          <td>${props.total}</td>
          <td>{props.date}</td>
        </tr>
  );
};

export default OrderTable;