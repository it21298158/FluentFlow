import React from "react";

export default function UpdatedUser({ handleOnSubmit, value, handleChange }) {
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    handleOnSubmit(e); // Call the handleOnSubmit function passed from the parent component
  };

  return (
    <>
      <div id="editEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h4 className="modal-title">Update Vocabulary</h4>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-hidden="true"
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Vocabulary</label>
                  <input
                    type="text"
                    value={value.vocabulary}
                    name="vocabulary"
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Definition</label>
                  <input
                    type="text"
                    value={value.definition}
                    name="definition"
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Synonym</label>
                  <input
                    type="text"
                    value={value.synonym}
                    name="synonym"
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Antonym</label>
                  <input
                    type="text"
                    value={value.antonym}
                    name="antonym"
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Update"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
