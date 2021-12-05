import React, { useState } from "react";

const EditUser = (props) => {
  const [title, setTitle] = useState(props.user.title);
  const [description, setDescription] = useState(props.user.description);
  const [display, setDisplay] = useState({ display: "none" });

  const showModal = () => {
    setDisplay({ display: "block" });
  };

  const closePopup = () => {
    setDisplay({ display: "none" });
  };

  const editUserHandler = () => {
    let data = { title: title, description: description };
    fetch(`http://localhost:8080/api/tutorials/${props.user.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    closePopup();
    props.edited(true);
  };

  return (
    <>
      <button onClick={showModal} className="btn btn-light">
        ✏️
      </button>
      <div class="modal" tabindex="-1" role="dialog" style={display}>
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Details</h4>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Description</label>
                <input
                  type="text"
                  class="form-control"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                onClick={editUserHandler}
              >
                Save
              </button>
              <button type="button" class="btn btn-light" onClick={closePopup}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;
