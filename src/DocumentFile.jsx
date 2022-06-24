import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import document from './document.pdf';
// import ace from 'brace';
import jsPDF from "jspdf";
import { useState } from "react";

const DocumentFile = () => {
  let [document, setDocument] = useState('');
  let [text, setText] = useState('');
  const buildDoc = () => {
    const doc = new jsPDF();
  
    doc.text("Hello wosdasdsadrld!", 10, 10);
    doc.text(text, 20, 30);
    //doc.save("a4.pdf");
    //console.log('path',doc);
    // console.log('out',doc.output("bloburl"));
    let url = doc.output('bloburi');
    //let blob = new Blob([a], { type: 'application/pdf' })
    
    //tab.location.href = fileURL;
    console.log(url);

    setDocument(url)
  }
  
  const handleChange = (e) => {
    // if (e.target.value !== text){
      setText(e.target.value);
      buildDoc();
    // }
  } 

  return( 
    <div className="card">
      {/* <div className="card-header">
        <button className="btn btn-primary" type="button" onClick={buildDoc}>
          Teste de montagem
        </button>
        <input type='text' value={text} onChange={handleChange}></input>
      </div> */}

      <iframe  class="card-img" src={document} width="100%" height="750"/>
    </div>
  )
}
export default DocumentFile;