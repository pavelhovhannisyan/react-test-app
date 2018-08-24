import React from 'react';

export default class PaymentContainer extends React.Component {

  render() {

    return (
      <div className="col-12 col-lg-9 col-md-9">
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Card Number</th>
                    <th scope="col">Expiration</th>
                    <th scope="col">CVC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-bottom">
                    <td>4363 9380 8398 9039 0293</td>
                    <td>03/12/20</td>
                    <td>371</td>
                  </tr>
                  <tr>
                    <td>4363 9380 8398 9039 0293</td>
                    <td>03/12/20</td>
                    <td>371</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>);
  }
}
