import React from 'react';
import {PostRequest} from '../../services/ApiService';
import ErrorModal from '../../components/UI/Modal/ErrorModal';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

export default class LoginPage extends React.Component {

  state = {
    error: [],
    errorModal: false,
    loader: false
  }

  userLoginHandler = (e) => {
    e.preventDefault();
    let user = {};
    user.email = this.refs.email.value;
    user.password = this.refs.password.value;
    this.setState({loader: true});
    PostRequest('auth/login', user).then((response) => {
      this.setState({loader: false});
      localStorage.setItem('projectName-accessToken', response.data.token);
      localStorage.setItem('projectName-user', JSON.stringify(response.data.user));
      this.props.history.push('/user-details');
    }).catch((error) => {
      this.setState({loader: false, errorModal: true});
      if (error.response.data.messages)
        this.setState({error: error.response.data.messages})
      else if (error.response.data.message)
        this.setState({error: error.response.data.message})
    })
  }

  closeErrorModal = () => {
    this.setState({errorModal: false})
  }

  render() {

    return (<div className="d-flex align-items-center justify-content-center vh-100">
      <Backdrop show={this.state.loader}/>
      <ErrorModal show={this.state.errorModal} error={this.state.error} remove={this.closeErrorModal}/>
      <form className="form-signin" onSubmit={this.userLoginHandler}>
        <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" autoFocus="autofocus" ref="email"/>
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" ref="password"/>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/>&nbsp;Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
      </form>
    </div>);
  }
}
