import React, { Component } from 'react';

class Metrica extends Component {
  state = {
    selected: 'bank'
  };
  render() {
    return (
      <div className="row m-4">
        <div className="col-sm-10 m-4">
          <form>
            <div className="form-group row">
              <label for="inputMonth" className="col-sm-2 col-form-label">
                Month
              </label>
              <div className="col-sm-10">
                <select className="form-control">
                  <option>Select Month</option>
                  <option>January</option>
                  <option>Frbruary</option>
                  <option>March</option>
                </select>
              </div>
            </div>

            <fieldset className="form-group btn-group-justified">
              <div className="row">
                <legend className="col-form-label col-sm-2 pt-0">
                  Pay Through
                </legend>
                <div className="col-sm-10">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="gridRadios1"
                          value="bank"
                          checked={this.state.selected === 'bank'}
                          onChange={() => this.setState({ selected: 'bank' })}
                        />
                        <label className="form-check-label" for="gridRadios1">
                          Bank
                        </label>
                      </div>
                    </div>
                    {console.log(this.state.selected)}
                    <div className="col-sm-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="gridRadios2"
                          value="cheque"
                          checked={this.state.selected === 'cheque'}
                          onChange={() => this.setState({ selected: 'cheque' })}
                        />
                        <label className="form-check-label" for="gridRadios2">
                          Cheque
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-check mr-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gridRadios"
                          id="gridRadios3"
                          value="cash"
                          checked={this.state.selected === 'cash'}
                          onChange={() => {
                            this.setState({ selected: 'cash' });
                          }}
                        />
                        <label className="form-check-label" for="gridRadios3">
                          Cash
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            {this.state.selected === 'bank' ? (
              <fieldset className="form-group btn-group-justified">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">
                    Filter
                  </legend>
                  <div className="col-sm-10">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="filter"
                            id="filter1"
                            value="option1"
                            checked
                          />
                          <label className="form-check-label" for="filter1">
                            None
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="filter"
                            id="filter2"
                            value="option2"
                          />
                          <label className="form-check-label" for="filter2">
                            BdREN
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="form-check mr-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="filter"
                            id="filter3"
                            value="option3"
                          />
                          <label className="form-check-label" for="filter3">
                            Software Services
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            ) : (
              <div className="form-group row">
                <label for="inputMonth" className="col-sm-2 col-form-label">
                  Wing
                </label>
                <div className="col-sm-10">
                  <select className="form-control">
                    <option>Select Wing</option>
                    <option>Wing 1</option>
                    <option>Wing 2</option>
                    <option>Wing 3</option>
                  </select>
                </div>
              </div>
            )}

            <div className="form-group row">
              <div className="col-sm-12">
                <button type="submit" className="btn btn-primary float-right">
                  Generate Advice
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Metrica;
