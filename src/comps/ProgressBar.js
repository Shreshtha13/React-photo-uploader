import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'

const ProgressBar = (props) => {
    const { url, progress } = useStorage(props.file)
    useEffect(() => {
        if (url)
            props.setFile(null)
    }, [url, props.setFile])
    return (
        <div className='progress-bar' style={{ width: progress + '%' }}></div>
    )
}

export default ProgressBar