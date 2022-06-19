import React, { useRef, useEffect } from "react"
// import { useState, useRef, useEffect } from 'react';
// import { Collapse, Popover, Toast, Tooltip, Alert, Modal, Dropdown } from 'bootstrap';
import { Dropdown, Tooltip } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DropdownDemo = () => {
  const ddRef = useRef()  

  useEffect(() => {
    let drop = new Dropdown(ddRef.current);
  })

  return(

    <div className="py-2">
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" ref={ddRef} data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href="#">Action</a></li>
          <li><a className="dropdown-item" href="#">Another action</a></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
    </div>
  )
  
}

const TooltipDemo = () => {
  const tooltipRef = useRef();  

  useEffect(() => {
    var tooltip = new Tooltip(tooltipRef.current, {
      title: "This is the tooltip content!",
      placement: 'right',
      trigger: 'hover'
    })
  })
  
  return (
    <div className="py-2">
      <button className="btn btn-info" ref={tooltipRef}>
        Hover for tooltip
      </button>
    </div>
  )
}

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    // const [mounted, setMounted] = useState(true); // useState usado para iniciar variaveis

    this.state = {
      mounted: false,
    }

    // this.state = { counter: 0 }
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // console.log('FOISDas')
    setTimeout(() => {
      this.setState({ mounted: true })
    }, 2000);
  }

  render() {
    // return <h1>Olá, {this.props.name}</h1>;

    return(
      <div className="bg-secondary">
        <div className="container">
          <main>
            <div className="py-5 text-center">
              <img className="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
              <h2>Checkout form</h2>
              <p className="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
            </div>

            <div className="row g-5">

              {/* Right Menu */}
              <div className="col-md-5 col-lg-4 order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary">Your cart</span>
                  <span className="badge bg-primary rounded-pill">3</span>
                </h4>
                <ul className="list-group mb-3">
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Product name</h6>
                      <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">$12</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Second product</h6>
                      <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">$8</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Third item</h6>
                      <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">$5</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between bg-light">
                    <div className="text-success">
                      <h6 className="my-0">Promo code</h6>
                      <small>EXAMPLECODE</small>
                    </div>
                    <span className="text-success">−$5</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>$20</strong>
                  </li>
                </ul>
        
                <form className="card p-2">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Promo code"/>
                    <button type="submit" className="btn btn-secondary">Redeem</button>
                  </div>
                </form>
              </div>
              {/* Right Menu */}

              {/* Document */}
              <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Billing address</h4>
                <form className="needs-validation" novalidate="">
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label for="firstName" className="form-label">First name</label>
                      <input type="text" className="form-control" id="firstName" placeholder="" value="" required=""/>
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
        
                    <div className="col-sm-6">
                      <label for="lastName" className="form-label">Last name</label>
                      <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>
        
                    <div className="col-12">
                      <label for="username" className="form-label">Username</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text">@</span>
                        <input type="text" className="form-control" id="username" placeholder="Username" required=""/>
                      <div className="invalid-feedback">
                          Your username is required.
                        </div>
                      </div>
                    </div>
        
                    <div className="col-12">
                      <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                      <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                      <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>
        
                    <div className="col-12">
                      <label for="address" className="form-label">Address</label>
                      <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
                      <div className="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>
        
                    <div className="col-12">
                      <label for="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                      <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
                    </div>
        
                    <div className="col-md-5">
                      <label for="country" className="form-label">Country</label>
                      <select className="form-select" id="country" required="">
                        <option value="">Choose...</option>
                        <option>United States</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </div>
        
                    <div className="col-md-4">
                      <label for="state" className="form-label">State</label>
                      <select className="form-select" id="state" required="">
                        <option value="">Choose...</option>
                        <option>California</option>
                      </select>
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>
        
                    <div className="col-md-3">
                      <label for="zip" className="form-label">Zip</label>
                      <input type="text" className="form-control" id="zip" placeholder="" required=""/>
                      <div className="invalid-feedback">
                        Zip code required.
                      </div>
                    </div>
                  </div>
        
                  <hr className="my-4"></hr>
        
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="same-address"/>
                    <label className="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
                  </div>
        
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="save-info"/>
                    <label className="form-check-label" for="save-info">Save this information for next time</label>
                  </div>
        
                  <hr className="my-4"></hr>
        
                  <h4 className="mb-3">Payment</h4>
        
                  <div className="my-3">
                    <div className="form-check">
                      <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required=""/>
                      <label className="form-check-label" for="credit">Credit card</label>
                    </div>
                    <div className="form-check">
                      <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required=""/>
                      <label className="form-check-label" for="debit">Debit card</label>
                    </div>
                    <div className="form-check">
                      <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required=""/>
                      <label className="form-check-label" for="paypal">PayPal</label>
                    </div>
                  </div>
        
                  <div className="row gy-3">
                    <div className="col-md-6">
                      <label for="cc-name" className="form-label">Name on card</label>
                      <input type="text" className="form-control" id="cc-name" placeholder="" required=""/>
                      <small className="text-muted">Full name as displayed on card</small>
                      <div className="invalid-feedback">
                        Name on card is required
                      </div>
                    </div>
        
                    <div className="col-md-6">
                      <label for="cc-number" className="form-label">Credit card number</label>
                      <input type="text" className="form-control" id="cc-number" placeholder="" required=""/>
                      <div className="invalid-feedback">
                        Credit card number is required
                      </div>
                    </div>
        
                    <div className="col-md-3">
                      <label for="cc-expiration" className="form-label">Expiration</label>
                      <input type="text" className="form-control" id="cc-expiration" placeholder="" required=""/>
                      <div className="invalid-feedback">
                        Expiration date required
                      </div>
                    </div>
        
                    <div className="col-md-3">
                      <label for="cc-cvv" className="form-label">CVV</label>
                      <input type="text" className="form-control" id="cc-cvv" placeholder="" required=""/>
                      <div className="invalid-feedback">
                        Security code required
                      </div>
                    </div>
                  </div>
        
                  <hr className="my-4"></hr>
        
                  <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>

                </form>
              </div>
              {/* Document */}
            </div>
          </main>
        
          <footer className="my-5 pt-5 text-muted text-center text-small">
            <p className="mb-1">© 2017–2021 Company Name</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#">Privacy</a></li>
              <li className="list-inline-item"><a href="#">Terms</a></li>
              <li className="list-inline-item"><a href="#">Support</a></li>
            </ul>
          </footer>
        
        </div>
      </div>
    )
  }
}
