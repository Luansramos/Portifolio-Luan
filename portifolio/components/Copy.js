import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';


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
                className='btn rounded-full border border-white/50 max-w-[170px]
        px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>

                <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>

                    
                    {copied ? 'copiado!' : 'copiar'}
                
                </span>

                <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]  ' />
                
            </button>

        </div>
    );
};

export default ClickAndCopy;
