// import './App.css';
import DocumentFile from "./DocumentFile";
import EditorPanel from "./EditorPanel";

const App = () => {
  return (
  // TODO main tag with footer
    // <div className="bg-secondary">
    <div className="">
      <div className="container py-5 ">
        <main>

          <div className="row">
            <div className="col-sm-7">
              {/* Document area */}
              <DocumentFile />
            </div>
            <div className="col-sm-5">
              <EditorPanel />
            </div>
          </div>
          {/* <DocumentFile /> */}
          {/*  Menu */}

        </main>
      </div>
    </div>
  );
  // return (
  //   <div >
  //     <DocumentFile />
  //     <EditorPanel />
  //   </div>
  // )
}

export default App;
