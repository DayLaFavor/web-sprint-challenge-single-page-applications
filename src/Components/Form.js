import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as yup from 'yup';
import axios from 'axios';



const yupForm = yup.object().shape({
    name: yup.string().required('name is required').min(2, 'name must be at least 2 characters'),
    size: yup.string().oneOf(['Small', 'Medium', 'Large']),
    special: yup.string(),
    pepperoni: yup.boolean(),
    dicedTomatos: yup.boolean(),
    sausage: yup.boolean(),
    olives: yup.boolean(),
    cadBacon: yup.boolean(),
    garlic: yup.boolean(),
    spicySausage: yup.boolean(),
    artHearts: yup.boolean(),
    chicken: yup.boolean(),
    cheese: yup.boolean(),
    onions: yup.boolean(),
    pineapple: yup.boolean(),
    pepper: yup.boolean(),
    extraCheese: yup.boolean(),
    sub: yup.boolean(),
    instructions: yup.string(),
})

const defaultVal = {
    size: '',
    special: '',
    pepperoni: false,
    dicedTomatos: false,
    sausage: false,
    olives: false,
    cadBacon: false,
    garlic: false,
    spicySausage: false,
    artHearts: false,
    chicken: false,
    cheese: false,
    onions: false,
    pineapple: false,
    pepper: false,
    extraCheese: false,
    sub: false,
    instructions: '',
}

function Form() {
  const [isValid, setIsValid] = useState(true);
  const [form, setForm] = useState(defaultVal);
  const [errorState, setError] = useState({
    size: '',
    special: '',
    pepperoni: '',
    dicedTomatos: '',
    sausage: '',
    olives: '',
    cadBacon: '',
    garlic: '',
    spicySausage: '',
    artHearts: '',
    chicken: '',
    cheese: '',
    onions: '',
    pineapple: '',
    pepper: '',
    extraCheese: '',
    sub: '',
    instructions: '',
    })

    useEffect(() => {
        yupForm.isValid(form)
            .then(valid => {
                setIsValid()
            });
    }, [form]);

    const validate = (e) => {
      yup.reach(yupForm, e.target.name)
        .validate(e.target.value)
        .then(valid => {
            setError({...errorState, [e.target.name]: ''})
            })
            .catch(error => {
              console.log(error.errors)
              setError({...errorState, [e.target.name]: error.errors[0]})
            })
    };

    const inputChange = e => {
        e.persist();
        validate(e)
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setForm({ ...form, [e.target.name]: value });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://reqres.in/api/orders`, form)
            .then(res => { console.log('RES', res) })
            .catch(err => console.log(err.response));
        setForm(defaultVal)
    };

    return (
        <div>
            <h1>Build Your Own Pizza</h1>
            <br/>
            <form onSubmit={formSubmit} id='pizzaForm'>
              <label htmlFor='size-dropdown'>Choice of Size</label>
                <select 
                  id='sizeDropdown' 
                  name='size'
                  value={form.size} 
                  onChange={inputChange}>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                </select>
              {errorState.name.length > 1 ? <p className='error'>{errorState.name}</p> : null}
            <br/>

            <h3 htmlFor='toppings'>Add Toppings</h3>
            <p>
              <input
                id='toppings'
                type='checkbox'
                checked={form.pepperoni}
                onChange={inputChange}
                name='pepperoni'
              />pepperoni
              <input
                id='toppings'
                type='checkbox'
                checked={form.dicedTomatos}
                onChange={inputChange}
                name='dicedTomatos'
              />Diced Tomatos
              <input
                id='toppings'
                type='checkbox'
                checked={form.sausage}
                onChange={inputChange}
                name='sausage'
              />Sausage
              <input 
                id='toppings'
                type='checkbox'
                checked={form.olives}
                onChange={inputChange}
                name='olives'
              />Black olives 
              <input
                id='toppings'
                type='checkbox'
                checked={form.cadBacon}
                onChange={inputChange}
                name='cadBacon'
              />Canadian Bacon
              <input 
                id='toppings'
                type='checkbox'
                checked={form.garlic}
                onChange={inputChange}
                name='garlic'
              />Roasted garlic 
              <input 
                id='toppings'
                type='checkbox'
                checked={form.spicySausage}
                onChange={inputChange}
                name='spicySausage'
              />Spicy Italian Sausage
              <input 
                id='toppings'
                type='checkbox'
                checked={form.artHearts}
                onChange={inputChange}
                name='artHearts'
              />Artichoke Hearts
              <input 
                id='toppings'
                type='checkbox'
                checked={form.chicken}
                onChange={inputChange}
                name='chicken'
              />Grilled Chicken 
              <input 
                id='toppings'
                type='checkbox'
                checked={form.cheese}
                onChange={inputChange}
                name='cheese'
              />Three Cheese
              <input 
                id='toppings'
                type='checkbox'
                checked={form.onions}
                onChange={inputChange}
                name='onions'
              />Onions 
              <input 
                id='toppings'
                type='checkbox'
                checked={form.pineapple}
                onChange={inputChange}
                name='pineapple'
              />Pineapple 
              <input 
                id='toppings'
                type='checkbox'
                checked={form.pepper}
                onChange={inputChange}
                name='pepper'
              />Green Pepper 
              <input 
                id='toppings'
                type='checkbox'
                checked={form.extraCheese}
                onChange={inputChange}
                name='extraCheese'
              />Extra Cheese
              </p>
              
              <p>
                <input
                  id='sub'
                  type='checkbox'
                  checked={form.sub}
                  name='sub'
                />Gluten Free Crust
              </p>

              <p>
                <label htmlFor='instructions'>Special Instructions: </label>
                <textarea
                  name='instructions'
                  id='specialText'
                  value={form.instructions}
                  onChange={inputChange}
                />
              </p>

              <button 
              name='orderButton'
              id='orderButton'
              type='submit'>
                Add to Order
              </button>
          </form>
          </div>
  );
}


export default Form;