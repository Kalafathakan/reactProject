import { useState } from 'react';
type QuantityProps = {
  quantity: number;
  id: String;
  onQuantityChange: (id: String, data: number) => void;
};

const Quantity = ({ onQuantityChange, id, quantity }: QuantityProps) => {
  return (
    <span className='counter'>
      <button
        className='counter-action decrement'
        onClick={() => onQuantityChange(id, 1)}
      >
        +
      </button>
      &nbsp;<span className='counter-items'>{quantity}</span>&nbsp;
      <button
        className='counter-action increment'
        onClick={() => onQuantityChange(id, -1)}
      >
        -
      </button>
    </span>
  );
};

export default Quantity;
