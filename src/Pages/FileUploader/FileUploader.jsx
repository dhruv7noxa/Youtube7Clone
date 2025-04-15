import React, { useState } from 'react';
import './FileUploader.css';

const FileUploader = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
  };

  return (
    <div className="file-uploader">
      <h1>Upload Files</h1>
      <input type="file" multiple onChange={handleFileChange} />
      <div className="file-preview">
        {files.map((file, index) => (
          <div key={index} className="file-item">
            {renderFilePreview(file)}
            <p>{file.name}</p>
            <a href={URL.createObjectURL(file)} target="_blank" rel="noopener noreferrer">
              Access File
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderFilePreview = (file) => {
  const fileType = file.type.split('/')[0];

  switch (fileType) {
    case 'image':
      return <img src={URL.createObjectURL(file)} alt={file.name} />;
    case 'video':
      return (
        <video controls>
          <source src={URL.createObjectURL(file)} type={file.type} />
          Your browser does not support the video tag.
        </video>
      );
    case 'application':
      return file.type === 'application/pdf' ? (
        <embed src={URL.createObjectURL(file)} type="application/pdf" width="600" height="400" />
      ) : (
        <p>{file.name}</p>
      );
    default:
      return <p>{file.name}</p>;
  }
};

export default FileUploader;


