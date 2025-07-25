'use client';

import React, { useEffect, useState } from 'react';

export default function CurrencySwitcher() {
  const [mounted, setMounted] = useState(false);
  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const getPrice = () => {
    if (currency === 'USD') return '40';
    if (currency === 'GBP') return '30';
    return '40'; // Default fallback
  };

  return (
    <div className="fixed top-4 left-4 z-50 bg-black/80 text-white px-4 py-2 mt-40 rounded shadow-lg flex flex-col space-y-2 w-fit">
      <div className="flex space-x-2">
        <button
          onClick={() => setCurrency('USD')}
          className={`px-3 py-1 rounded ${currency === 'USD' ? 'bg-white text-black' : 'hover:bg-white/20'}`}
        >
          USD $
        </button>
        <button
          onClick={() => setCurrency('GBP')}
          className={`px-3 py-1 rounded ${currency === 'GBP' ? 'bg-white text-black' : 'hover:bg-white/20'}`}
        >
          GBP £
        </button>
      </div>
      <div className="text-sm mt-1">
        Price: {currency} {getPrice()}
      </div>
    </div>
  );
}

