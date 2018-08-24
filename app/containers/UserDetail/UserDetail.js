import React from 'react';
import DetailsContainer from './Details';
import PaymentContainer from './Payment';
import ReviewModal from '../../components/UI/Modal/ReviewModal';
import Layout from '../../hoc/Layout/Layout';

export default class UserDetailPage extends React.Component {

  state = {
    activePage: 'details',
    reviewModal: false
  }

  changeDetailsInfoHandler = (flag) => {
    if(flag == 'details') this.setState({activePage: 'details'})
    if(flag == 'payment') this.setState({activePage: 'payment'})
  }

  showReviewModalHandler = () => this.setState({reviewModal: true});

  removeReviewModal = () => this.setState({reviewModal: false});

  render() {

    let activePage = <DetailsContainer />

    if(this.state.activePage == 'details') activePage = <DetailsContainer showModal={this.showReviewModalHandler} />
    else if(this.state.activePage == 'payment') activePage = <PaymentContainer />

    return (<Layout><div>
      <ReviewModal show={this.state.reviewModal} remove={this.removeReviewModal} />

      <div className="page-content">
        <div className="container p-0">
          <div className="card no-bg">
            <h5 className="card-header">User Detail</h5>
            <div className="card-body py-0">
              <div className="row">
                <div className="col-12 col-lg-3 col-md-3 divider">
                  <div className="nav flex-column nav-pills py-4">
                    <a href="#" className={this.state.activePage == 'details' ? 'nav-link active' : 'nav-link'} onClick={() => this.changeDetailsInfoHandler('details')}>Details</a>
                    <a href="#" className="nav-link">Rides</a>
                    <a href="#" className={this.state.activePage == 'payment' ? 'nav-link active' : 'nav-link'} onClick={() => this.changeDetailsInfoHandler('payment')}>Payments</a>
                    <a href="#" className="nav-link">Services</a>
                  </div>
                </div>
                {activePage}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></Layout>);
  }
}
