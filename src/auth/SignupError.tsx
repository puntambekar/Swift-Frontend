export const SignupError = ()=>{
    return( <>
        <div className="modal-overlay"></div>
        <div
          className={`modal show`}
          style={{ display: "block" }}
          tabIndex={-1}
          role="dialog"

        >
          <div className="modal-dialog modal-dialog-centered" >
            <div className="modal-content">
              <>
                <div className="modal-header">

                </div>
                <div className="modal-body">

                <p>Error.. the user already exist</p>
                </div>
                <div className="modal-footer d-flex justify-content-center">

                </div>
              </>
            </div>
          </div>
        </div>
      </>)
}