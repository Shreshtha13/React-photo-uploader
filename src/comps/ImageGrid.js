import { defaultTo } from 'lodash'
import React from 'react'
import useFirestore from '../hooks/useFirestore'

const ImageGrid = () => {
    const { docs } = useFirestore('images')
    console.log(docs)
    return (
        <div className='image-grid'>
            {docs && docs.map((doc) => {
                return (
                    <div className='imgWrap'>
                        <img src={doc.url} alt='object' key={doc.id} />
                    </div>
                )
            })}
        </div>
    )
}

export default ImageGrid