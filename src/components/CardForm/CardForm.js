import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'

const CardForm = () => {

    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')



  return (
    <>
    <div className="card">
        <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
        />
    </div>
    <br />
    <form>
        <div className="row">
            <div className="col-sm-11">
                <label for="name">Card Number</label>
                <input
                    type='text'
                    className='form-control'
                    value={number}
                    onChange={(e) => {
                        SetNumber(e.target.value);
                      }}
                      onFocus={(e) => SetFocus(e.target.name)}
                />
            </div>
        </div>
    </form>
    </>
  )
}

export default CardForm