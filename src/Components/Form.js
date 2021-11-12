import { useState } from 'react';
import * as yup from 'yup';

const yupForm = yup.object().shape({
    name: yup.string().required('name is required').min(2, 'name must be at least 2 characters'),
    size: yup.string().oneOf(['Small', 'Medium', 'Large']),
    special: yup.string(),
    cheese: yup.boolean(),
    pineapples: yup.boolean(),
    pepperoni: yup.boolean(),
    olives: yup.boolean(),
    instructions: yup.string()
});

const Form = () => {
  const [input, setInput] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.name.length < 3) {
      alert('name must be at least 3 characters');
    }
  };
  return (
    <form id='pizza-form' onSubmit={handleSubmit}>
    <label>Enter your name:
      <input
        id='name-input'
        type='text'
        name='name'
        value={''}
        onChange={handleChange}
      />
    </label>
    <label>Cheese:
      <input
        type='checkbox'
        name='cheese'
        value={cheese}
        onChange={handleChange}
      />
    </label>
    <label>pineapple:
      <input
        type='checkbox'
        name='pineapple'
        value={pineapple}
        onChange={handleChange}
      />
    </label>
    <label>pepperoni:
      <input
        type='checkbox'
        name='pepperoni'
        value={pepperoni}
        onChange={handleChange}
      />
    </label>
    <label>olives:
      <input
        type='checkbox'
        name='olives'
        value={olives}
        onChange={handleChange}
      />
    </label>

    <label>Choose your Size
      <select
        id='size-dropdown'
        className='size'
        name='size'
        onChange={handleChange}
        value={size}
      >
      <option value='SMALL'>SMALL</option>
      <option value='MEDIUM'>MEDIUM</option>
      <option value='LARGE'>LARGE</option>
      </select>
    </label>
    <label>Special Instructions:
        <textarea
        id='special-text'
        name='specialText'
        value={''}
        onChange={handleChange}
        />
    </label>
    <button id='order-button' type='submit'>
      Order
    </button>
  </form>
  )
}