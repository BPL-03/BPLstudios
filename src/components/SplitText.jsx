import React from 'react';

/**
 * Splits text into individual characters with staggered animation delays.
 * Wraps words in inline-blocks to prevent broken line wrapping.
 */
export default function SplitText({ text, className = '' }) {
  if (!text) return null;

  let charCount = 0;

  return (
    <span className={`inline-block ${className}`}>
      {text.split(' ').map((word, wordIdx) => {
        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.22em]">
            {word.split('').map((char) => {
              const delay = `${(charCount * 0.015).toFixed(3)}s`;
              charCount++;

              return (
                <span key={charCount} className="split-char-container">
                  <span
                    className="split-char"
                    style={{ transitionDelay: delay }}
                  >
                    {char}
                  </span>
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
