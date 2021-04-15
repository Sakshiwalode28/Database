import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UploadFile from './Components/UploadFile';
import SectionC from './Components/SectionC';
import Files from './Components/Files';

function App() {
  const [files, setFiles] = useState([])

  useEffect(() => {
    const localFiles = localStorage.getItem('files');
    console.log({ localStorage });
    if (localFiles) {
      setFiles(JSON.parse(localFiles));
    }
  }, []);

  const addFiles = async file => {
    setFiles([...files, file])
  };
  

  useEffect(() => {
    localStorage.setItem('files', JSON.stringify(files))
  }
    , [files]);
 const removeFile = id => {
    setFiles(files.filter(file => file.id !== id));
  }

  return (
    <Container fluid className='App'>
      <h1 className='first__h1'>TOOL TO DISPLAY TEXT INTO A TABLE</h1>
      <UploadFile addFiles={addFiles} />

       <SectionC/>

      <Files files={files} removeFile={removeFile} />
    </Container>
 );
}
export default App;













{/* <Router>
        <Switch>

          <Route path='/FirstPage'>
            <FirstPage />
          </Route>

          <Route path='/DataTable'>
            <DataTable />
          </Route>

        </Switch>
      </Router> */}
{/* <FirstPage/>
      <DataTable/>
    </div> */}