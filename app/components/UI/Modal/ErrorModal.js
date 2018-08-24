import React from 'react';

export default class ErrorModal extends React.Component {

  componentDidMount() {
    console.log(this.props.error)
    console.log(typeof this.props.error);
  }

  mainArea = (event) => {
    event.stopPropagation();
  }

  removeModalHandler = () => {
    this.props.remove();
  }

  render() {
    let message = '';
    if (this.props.error.length && typeof this.props.error == 'object') {
      message = this.props.error[0].replace(/[^a-zA-Z ]/g, " ");
    } else {
      message = this.props.error;
    }
    return (<div>
      {
        this.props.show
          ? <div className="showmodal" onClick={this.removeModalHandler}>
              <div className="backdrop"></div>
              <div className="modal animated-modal fadeInDowns" id="CardError" tabIndex="-1" role="dialog" aria-labelledby="CardError" aria-hidden="true" onClick={this.props.modalClosed}>
                <div className="modal-dialog modal-dialog-centered cus-modal" role="document">
                  <div className="modal-content" onClick={this.mainArea}>
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.removeModalHandler}>
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <img width="150" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaE0VwmSZlZkNEUR0McIpdtc1lXTLdICRZx-fKm1207UEdealw" className="img-fluid img-middle" alt=""/>
                      <h5 className="text-center font-weight-normal mt-3">{message}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          : null
      }
    </div>)
  }
}
