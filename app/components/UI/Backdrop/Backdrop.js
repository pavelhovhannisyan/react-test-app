import React from 'react';

const backdrop = (props) => (
    props.show ? <div className="backdrop">

      <div className="modal fade" id="CardAlert" tabIndex="-1" role="dialog" aria-labelledby="CardAlert" aria-hidden="true">
         <div className="modal-dialog modal-dialog-centered cus-modal modal-flat modal-payment" role="document">
            <div className="modal-content">
               <div className="modal-body">
                  <h4 className="alert-msg">One moment please ....</h4>
               </div>
            </div>
         </div>
      </div>

      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

    </div> : null
);

export default backdrop;
