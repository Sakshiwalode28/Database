import React from 'react'
import { Table, Col , Row } from 'reactstrap'
import { FaCheckDouble } from 'react-icons/fa'

const Files = ({ files, removeFile }) => {
    return (
        <Table className='mt-5 mb-2 '>
            {files.map(file => (
                <Row>
                    <Col  className='file__here' key={file.id}>
                        {file.uploadFile}
                        <span className='float-right' onClick={() => removeFile(file.id)}></span>
                    </Col>
                    <Col  className='file__here' key={file.id}>
                        {file.uploadFile}
                        <span className='float-right' onClick={() => removeFile(file.id)}></span>
                    </Col>
                    <Col  className='file__here' key={file.id}>
                        {file.uploadFile}
                        <span className='float-right' onClick={() => removeFile(file.id)}></span>
                    </Col>
                    <Col  className='file__here' key={file.id}>
                        {file.uploadFile}
                        <span className='float-right' onClick={() => removeFile(file.id)}><FaCheckDouble /></span>
                    </Col>
                   
                </Row>
            ))}
        </Table>

    )
}
export default Files;