import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import document from './document.pdf';
import ace from 'brace';
// var PDFDocument = require('pdfkit').default;
// import fs from 'fs';
// import PDFDocument from "pdfkit";
// import "blodstream;
// import makePdf from "./makePdf";

const PdfViewer = (props) => {

  return (
    <div className="card">
      {/* <div className="card-body"> */}
        <iframe src={props.src} width="100%" height="1000"/>
      {/* </div> */}
    </div>
  )
}

const buildDoc = () => {
  var editor = ace.edit('editor');
  // editor.setTheme('ace/theme/monokai');
  // editor.getSession().setMode('ace/mode/javascript');
  // editor.setValue(initialFnCode);
  editor
    .getSession()
    .getSelection()
    .clearSelection();

  // var iframe = document.querySelector('iframe');
  window.execEditor(editor.getValue())
  // executeFn(initialFnCode, PDFDocument, lorem, waitForData, iframe);

  editor.getSession().on('change', function() {
    try {
      // executeFn(editor.getValue(), PDFDocument, lorem, waitForData, iframe);
      window.execEditor(editor.getValue())
    } catch (e) {
      console.error(e);
    }
  });
  
}

export default class MainDoc extends React.Component {
  teste() {
    window.mountPdf();
    // buildDoc();    
  }
  render() {
    return(
      <div className="bg-secondary">
        <div className="container">
          <main>
            <div className="py-5 text-center">
              <img className="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
              <h2>Checkout form</h2>
              <p className="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
            </div>


            {/* <div className="row g-5"> */}
              <button className="btn btn-primary" type="button" onClick={this.teste}>
                TES button
              </button>
              <button className="btn btn-primary" type="button" onClick={buildDoc}>
                editor
              </button>

              {/* <div className="card" id="editor" width="100" height="400" 
                style={{display: 'inline-block', marginRight: '20px'}}
              ></div> */}
              {/* <div id="editor" style={{
                width: '600px',
                height: '775px',
                marginRight: '20px',
                display: 'inline-block'
              }}></div> */}
              {/* <iframe width="600" height="775"></iframe> */}
            {/* </div> */}
            <div className="row g-2">
              
              <div className="col-md-5 col-lg-4 order-md-last">
                <div className="card-body">
                  <div className="cart-title">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                      <span className="text-primary">Your cart</span>
                      <span className="badge bg-primary rounded-pill">3</span>
                    </h4>
                  </div>
                  <div className="card-body">

                    <div id="editor" className="bg-dark "
                      style={{
                        // width: '600px',
                        height: '775px',
                        // marginRight: '20px',
                        // display: 'inlinfontkite-block'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            {/* </div>
            <div className="row g-5"> */}
              
              {/* Right Menu */}
              <div className="col-md-5 col-lg-4 order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-primary">Your cart</span>
                  <span className="badge bg-primary rounded-pill">3</span>
                </h4>
                <ul className="list-group mb-3">
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Product name</h6>
                      <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">$12</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Second product</h6>
                      <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">$8</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Third item</h6>
                      <small className="text-muted">Brief description</small>
                    </div>
                    <span className="text-muted">$5</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between bg-light">
                    <div className="text-success">
                      <h6 className="my-0">Promo code</h6>
                      <small>EXAMPLECODE</small>
                    </div>
                    <span className="text-success">−$5</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>$20</strong>
                  </li>
                </ul>
        
                <form className="card p-2">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Promo code"/>
                    <button type="submit" className="btn btn-secondary">Redeem</button>
                  </div>
                </form>
              </div>
              {/* Right Menu */}

              {/* Document */}
              {/* <div className="card" style="width: 18rem;"> */}
              <div className="col-md-7 col-lg-8">
                {/* <div className="card" >
                  <PdfViewer src={document} width="600" height="775"/>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div> */}
                {/* <PdfViewer teste='ASFDSA'/> */}
                {/* <iframe src="blob:http://pdfkit.org/bdddf6c6-dc03-4477-829b-bbd36c8d362d" width="600" height="775"></iframe> */}
                {/* <PdfViewer src={document} /> */}
                <div className="card">
                    <iframe src={document} width="100%" height="1000"/>
                    {/* <iframe width="100%" height="1000"/> */}
                    {/* <iframe width="600" height="775"></iframe> */}
                </div>
              </div>
              
              {/* Document */}
            </div>
          </main>
        
          <footer className="my-5 pt-5 text-muted text-center text-small">
            <p className="mb-1">© 2017–2021 Company Name</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#">Privacy</a></li>
              <li className="list-inline-item"><a href="#">Terms</a></li>
              <li className="list-inline-item"><a href="#">Support</a></li>
            </ul>
          </footer>
        
        </div>
      </div>
    )
  }
}