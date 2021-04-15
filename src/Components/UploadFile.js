
import React, { useState } from 'react'
import { v4 } from 'uuid';


 const UploadFile =({addFiles})=> {

  const [uploadFile, setUploadFile] = useState(null);


//   onChange=(e) => {
//     const files = e.target.files;
//     console.log('data file', files)
//     const reader = new FileReader();
// reader.readAsDataURL(files[0])

// reader.onload=(e) =>{
//   console.log('data', e.target.result)
// }
//   }

  
  
const handleSubmit = e => {
  e.preventDefault()
  if(uploadFile===''){
    return alert('Please insert a file')
  }
  const file= {
    uploadFile,
    id: v4()
  }
   addFiles(file)

   setUploadFile('')

}

  
    return (

      <div>
        

        <form className='first__box' >

          <label className='first__lable'>Select a text file:</label>
          <input type="file" name='file' className='first__file' accept='.txt'  value={uploadFile}  onChange={(e) => setUploadFile(e.target.value)} />

          <button type='submit' className='first__btn' onClick={handleSubmit}
          >UPLOAD</button>
        </form>
      </div>

    );
  
  }

export default UploadFile;