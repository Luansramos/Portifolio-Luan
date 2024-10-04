import React, { useState } from 'react';

const ClickAndCopy = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reseta o estado após 2 segundos
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div>
      <button
        onClick={handleCopy}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
      >
        {copied ? 'Copied!' : 'Click to Copy'}
      </button>
      <p className="mt-2 text-gray-500">Text to copy: {textToCopy}</p>
    </div>
  );
};

export default ClickAndCopy;
