import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

const UploadForm = () => {

    const [file, setFile] = useState(null)
    const [error, setError] = useState('')


    const fileUploader = (event) => {
        let selected = event.target.files[0]
        const types = ['image/jpeg', 'image/png']
        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setError('')
        }
        else {
            setFile(null)
            setError('Please select a valid file type (jpeg/png).')
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={fileUploader} />
                <span>+</span>
            </label>
            <div className='output'>
                {error && <div className='errorMsg'>{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )

}

export default UploadForm