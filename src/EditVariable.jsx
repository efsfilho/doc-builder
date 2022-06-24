import { render } from "@testing-library/react";
import React, { useState, createRef, useRef, useEffect } from "react";

const EditVariable = (props) => {
  let [content, setContent] = useState({});

  const handleChange = (e) => {
    
    e.preventDefault();
    let changed = content;

    if (e.target.id === 'inputName')
      changed.name = e.target.value;
      
    if (e.target.id === 'inputValue')
      changed.value = e.target.value;

    props.updateVariable(changed);
  }

  useEffect(() => {
      setContent(props.variable);
  });

  return (
    <div>
      <div className="modal fade" id="editVariableModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content container">
            <div className="modal-body"> Index: {props.variable.index}

              <div className="my-2 mb-3 row">
                <div className="input-group">
                  <span className="col-sm-4 input-group-text">Name</span>
                  <input type="text" className="form-control" id="inputName" placeholder="Variable name" value={props.variable.name} onChange={handleChange}></input>
                </div>
              </div>

              <div className=" row">
                <div className="input-group">
                  <span className="col-sm-4 input-group-text" >Value</span>
                  <input type="text" className="form-control" id="inputValue" placeholder="Variable value" value={props.variable.value} onChange={handleChange}></input>
                </div>
              </div>

              {/* <div className="mb-3 row">
                <div className="input-group">
                  <button className="col-sm-4 btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Type</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Date</a></li>
                    <li><a className="dropdown-item" href="#">Text</a></li>
                  </ul>
                  <input type="text" className="form-control" aria-label="Text input with dropdown button"></input>
                </div>
              </div> */}
            </div>

            <div className="modal-footer mx-5">
              <button type="button" className="btn btn-secondary mx-5" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default EditVariable