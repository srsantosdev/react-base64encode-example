import './styles.css'

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'

function Dropzone({ onFileUploaded }) {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0]

    onFileUploaded(file)
  }, [onFileUploaded])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />

      <p className="dropzone-message">
        <FiUpload size={18} />
        Selecione um arquivo
      </p>
    </div>
  )
}

export default Dropzone;