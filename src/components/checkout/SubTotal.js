import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useHistory } from 'react-router-dom'
import { getCartTotal } from '../reducer'
import { useStateValue } from '../stateProvider'
import "./subtotal.css"

const SubTotal = () => {
  const history = useHistory()
    const [{cart, user}] = useStateValue();
    const direct = () => {
      user ? history.push("/payment") : history.push('/login')
    }
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) => (
                <>
                  <p>
                    Subtotal ({cart.length} items) : <strong>{value}</strong>
                  </p>
                  <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                  </small>
                </>
              )}
            decimalScale={2}
            value={getCartTotal(cart)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₹'}
            />
            {cart.length>=1 && <button onClick={direct}>
                Procced checkout
            </button>}
        </div>
    )
}

export default SubTotal
