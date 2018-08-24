import React from 'react';

export default class ReviewModal extends React.Component {

  mainArea = (event) => {
    event.stopPropagation();
  }

  removeModalHandler = () => {
    this.props.remove();
  }

  render() {

    return (<div>
      {
        this.props.show
          ? <div className="showmodal">
              <div className="backdrop"></div>
              <div className="modal animated-modal fadeInDown" id="ModalPostJob" role="dialog" aria-labelledby="ModalPostJob" aria-hidden="true" onClick={this.removeModalHandler}>
                <div className="modal-dialog modal-dialog-centered cus-modal modal-lg" role="document" onClick={this.mainArea}>
                  <div className="modal-content code-editor">
                    <div className="modal-header">
                      <h5 className="modal-title">Requested in area "Trstena"</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.removeModalHandler}>
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body py-0 px-0">
                      <div className="table-responsive">
                        <table className="table modal-table">
                          <thead>
                            <tr>
                              <th>Document name</th>
                              <th>Required</th>
                              <th>File</th>
                              <th>Approval</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Driver Licence</td>
                              <td>Yes</td>
                              <td className="text-primary">
                                <span>img-0055.jpg
                                  <i className="fa fa-external-link ml-2" aria-hidden="true"></i>
                                </span>
                              </td>
                              <td>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                  <label className="form-check-label" namefor="defaultCheck1">
                                    Approve
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Driver Licence</td>
                              <td>Yes</td>
                              <td className="text-primary">
                                <span>img-0055.jpg
                                  <i className="fa fa-external-link ml-2" aria-hidden="true"></i>
                                </span>
                              </td>
                              <td>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                  <label className="form-check-label" namefor="defaultCheck1">
                                    Approve
                                  </label>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Driver Licence</td>
                              <td>Yes</td>
                              <td className="text-primary">
                                <span>img-0055.jpg
                                  <i className="fa fa-external-link ml-2" aria-hidden="true"></i>
                                </span>
                              </td>
                              <td>
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                  <label className="form-check-label" namefor="defaultCheck1">
                                    Approve
                                  </label>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="modal-footer">
                      <button className="btn btn-primary">Done</button>
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
