import { useState } from 'react';

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
        id="size-dropdown"
        className="Size"
        name="Size"
        onChange={handleChange}
        value={size}
      >
      <option value="SMALL">SMALL</option>
      <option value="MEDIUM">MEDIUM</option>
      <option value="LARGE">LARGE</option>
      </select>
    </label>

    <label htmlfor="special-text">Special Instructions:</label>
    <textarea
      id="special-text"
      name="specialText"
      value={''}
      onChange={handleChange}
    />

    <button id="order-button" type="submit">
      Order
    </button>
  </form>
  )
}