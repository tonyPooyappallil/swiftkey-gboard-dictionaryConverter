import React from 'react';

function ZipUpload({ onUpload }) {
    
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onUpload(file);
  };

  return (
    <div>
      <input type="file" accept=".zip" onChange={handleFileChange} />
    </div>
  );
}

export default ZipUpload;
