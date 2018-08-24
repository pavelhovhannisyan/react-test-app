import React from 'react';

export default class DetailsContainer extends React.Component {

  state = {
    reviewAlert: false,
    user: {}
  }

  componentWillMount() {
    if(localStorage.getItem('projectName-user')) {
      let user = localStorage.getItem('projectName-user');
      console.log(JSON.parse(user));
      this.setState({user: JSON.parse(user)})
    }
  }

  showReviewAlertHandler = () => {
    this.setState({reviewAlert: true});
  }

  updateUserDetailsToViewModal = () => {
    this.props.showModal()
  }

  render() {

    let requestDriver;

    if (this.state.reviewAlert) {
      requestDriver = <div className="col-12">
        <div className="alert alert-warning fade show mt-4 d-flex align-items-center justify-content-between" role="alert">
          <div className="font-regular">
            <i className="fa fa-file mr-2" aria-hidden="true"></i>Driver request
          </div>
          <button type="button" className="btn btn-primary float-right" data-dismiss="alert" aria-label="Close" onClick={this.updateUserDetailsToViewModal}>
            Review
          </button>
        </div>
      </div>
    } else
      requestDriver = null;

    return (<div className="col-12 col-lg-9 col-md-9">
      <div className="row d-flex align-items-center">
        {requestDriver}
        <div className="col-12 col-lg-6 col-md-6">
          <div className="user-info pt-4">
            <div className="media">
              <img className="mr-3 rounded-circle" src="https://www.logicprohelp.com/forum/download/file.php?avatar=33592_1503606655.jpg" alt="" onClick={this.showReviewAlertHandler}/>
              <div className="media-body align-self-center">
                <h4 className="mt-0">Daniel Lipsumocsky</h4>
                <p className="text-primary mb-0">{this.state.user.email ? this.state.user.email : 'sample@sample.com'}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-6 text-right mt-3 mt-md-0">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Rides"/>
            <label className="form-check-label" htmlFor="inlineCheckbox1">Rides</label>
          </div>
          <div className="form-check form-check-inline ml-2">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="Driver"/>
            <label className="form-check-label" htmlFor="inlineCheckbox2">Driver</label>
          </div>
          <div className="form-check form-check-inline ml-2">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="SuperAdmin"/>
            <label className="form-check-label" htmlFor="inlineCheckbox3">Superadmin</label>
          </div>
        </div>
      </div>
      <hr/>
      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Status</th>
                  <th scope="col">ID</th>
                  <th scope="col">Registerd date</th>
                  <th scope="col">Last Login</th>
                  <th scope="col">Last Ride</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-success">
                    <span className="circle-status bg-success mr-2"></span>Riding</td>
                  <td>239389292</td>
                  <td>18 Jun 2018 13:00</td>
                  <td>9 Mar 2018 23:03</td>
                  <td>19 Apr 2018 23:09</td>
                </tr>
                <tr>
                  <td>
                    <span className="circle-status bg-gray mr-2"></span>Offline</td>
                  <td>239389292</td>
                  <td>18 Jun 2018 13:00</td>
                  <td>9 Mar 2018 23:03</td>
                  <td>19 Apr 2018 23:09</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>);
  }
}
