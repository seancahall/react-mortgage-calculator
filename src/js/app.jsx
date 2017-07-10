import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0,
      rate: 0,
      term: 0,
      period: 12,
      result: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  calculate({ rate, period, term, balance }) {

    let monthlyInterestRate = (this.state.rate / 100) / this.state.period;
    let numberOfPayments = this.state.term * this.state.period;
    let compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);
    let interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);
    let monthlyPayment = this.state.balance * interestQuotient;
    let mortgage = monthlyPayment.toFixed(2).toString();
    let output = '$' + mortgage + ' is your payment.';

    let newState = { result: output};

    this.setState( newState );

  }

  render() {
    return (
    <div className="container">
      <div className="form-horizontal">
        <fieldset>
        <div className="form-group">
            <div className="col-md-4 col-md-offset-4">
                <legend>
                  <h3>Mortgage Calculator</h3>
                </legend>
            </div>
        </div>
        <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="balance">Loan Balance</label>
            <div className="col-md-4">
            <input step="0.01" className="form-control input-md"
              name="balance"
              type="number"
              value={this.state.balance}
              onChange={this.handleInputChange} />
            </div>
        </div>
        <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="rate">Interest Rate (%)</label>
            <div className="col-md-4">
            <input step="0.01" className="form-control input-md"
              name="rate"
              type="number"
              value={this.state.rate}
              onChange={this.handleInputChange} />
            </div>
        </div>
        <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="term">Loan Term (years)</label>
            <div className="col-md-4">
            <input className="form-control input-md"
              name="term"
              type="number"
              value={this.state.term}
              onChange={this.handleInputChange} />
            </div>
        </div>
        <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="period">Period</label>
            <div className="col-md-4">
            <select name="period" className="form-control" value={this.state.period} onChange={this.handleInputChange}>
              <option value="12">Monthly</option>
              <option value="6">Bi-monthly</option>
            </select>
            </div>
        </div>
        <div className="form-group">
            <div className="col-md-4 col-md-offset-4">
              <button className="btn btn-primary" name="submit" onClick={() => this.calculate(this.state)}>Calculate</button>
            </div>
        </div>
        <div id="output">{this.state.result}</div>
      </fieldset>
      </div>
    </div>);
  }
}
