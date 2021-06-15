import './app.css'
import React, { useCallback, useState } from 'react'

import { api } from './services/api'

import Dropzone from './components/Dropzone'

function App() {
  const [image, setImage] = useState(null)

  const getBase64 = useCallback((file) => {
    return new Promise(resolve => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
    })
  }, [])

  const onFileUploaded = useCallback(async (file) => {
    const base64 = await getBase64(file)

    api.post('/images', { codeE: base64 })

    setImage(base64)
  }, [getBase64])

  return (
    <main>
      <h1>Upload de imagens</h1>

      <div className="dropzone-container">
        <Dropzone onFileUploaded={onFileUploaded} />
      </div>

      <section className="image-container">
        {image && <img src={image} alt="Base 64 Test" />}
      </section>
    </main>
  );
}

export default App;
