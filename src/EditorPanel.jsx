import React, { useState, createRef, useRef, useEffect } from "react";
import { Button } from "bootstrap";
import VariableButton from "./EditVariable";
// import { NormalModuleReplacementPlugin } from "webpack";
import { Modal } from "bootstrap";


const EditorPanel = () => {
  let [vars, setVars] = useState([]);
  let [varToEdit, setVarToEdit] = useState({});

  const newVariable = () => {
    let variable = {
      // name: `NewVar${(Math.random()*100).toFixed(2)}`,
      name: `NewVar1`,
      type: null,
      value: ''
    };

    vars.forEach(e => {
      if (e.name.includes('NewVar')) {
        let n = Number(e.name.replace(/NewVar/, '')) + 1;
        variable.name = `NewVar${n}`
      }
    });

    setVars(e => [...e, variable] );
  }

  const updateVariable = (changed) => {
    let updatedVars = vars.slice();

    updatedVars[changed.index] = {
      index: null,
      name: changed.name,
      type: changed.type,
      value: changed.value
    }

    setVars(updatedVars);
  }

  // Update variable edit modal content
  const editVariable = (i) => {
    let edit = vars[i];
    edit.index = i;
    let editModal = new Modal(document.getElementById('editVariableModal'));
    editModal.show();

    setVarToEdit({index: i, ...edit});
  }

  return(
    // <div className="container-fluid py-3 bg-secondary ">
      <div className="card">
        <div className="card-body">
  
          {/* Variable edit modal */}
          <VariableButton variable={varToEdit} updateVariable={updateVariable}/>

          <div className="mb-3">
            <button className="btn btn-secondary" type="button" onClick={newVariable}>Add Variable
              <i className="bi bi-plus"></i>
            </button>
          </div>

          {
            // Variable buttons rendering area
            vars.length > 0 &&
            <div className="mb-3 rounded border border-1">
            {
              vars.map((e, i) => (
                // <button className="btn btn-primary" type="button" key={i} onClick={() => editVariable(i)} data-bs-toggle="modal" data-bs-target="#variableModal">                  
                <button className="btn btn-primary ms-2 mt-2 " type="button" key={i} onClick={() => editVariable(i)}>
                  {e.name}
                </button>
              ))
            }
            <div className="mb-2"></div>
            </div>
          }

          <div className="mb-3">
            <textarea className="form-control" id="textArea" placeholder="Textarea" rows="10"></textarea>
          </div>

        </div>
      {/* </div> */}
    </div>    
  )
}




const But = props => {
  const itemsRef = useRef([]);
  // you can access the elements with itemsRef.current[n]
  useEffect(() => {
     itemsRef.current = itemsRef.current.slice(0, props.items.length);
     console.log(itemsRef.current)
  });
  return props.items.map((item, i) => (
    <input 
        key={i} 
        ref={el => itemsRef.current[i] = el} 
        style={{ width: `${(i + 1) * 100}px` }}
    />
  ));
}

const EditorPanel3 = () => {
  var [panel, setPanel] = useState([]);
  const add = () => setPanel(e => [...e, {value: ''}] );
  useEffect(() => { console.log("button sadasdsa", panel); })
  return (
    <div className="App">
      Adddsdasdsd
      <br />
      <button onClick={add}>Cause re-render</button>
      <But items={panel} />
    </div>
  )
}

export default EditorPanel