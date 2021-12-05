import React, { useState } from "react";

const Remove = (props) => {
  const [display, setDisplay] = useState({ display: "none" });

  const showModal = () => {
    setDisplay({ display: "block" });
  };

  const closePopup = () => {
    setDisplay({ display: "none" });
  };

  const deleteUserHandler = () => {
    fetch(`http://localhost:8080/api/tutorials/${props.user.id}`, {
      method: "DELETE",
    });
    props.edited(true);
  };

  return (
    <>
      <button onClick={showModal} className="btn btn-light">
        🗑️
      </button>
      <div class="modal" tabindex="-1" role="dialog" style={display}>
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Confirm Delete!</h4>
            </div>
            <div class="modal-body">
              <h1>Are you sure you want to delete?</h1>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                onClick={deleteUserHandler}
              >
                Yes
              </button>
              <button type="button" class="btn btn-light" onClick={closePopup}>
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Remove;
