import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = () => {
  const [content, setContent] = useState('');

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean']
    ]
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Rich Text Editor</h2>
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <ReactQuill
          value={content}
          onChange={setContent}
          modules={modules}
          className="h-52"
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
