import { useState } from 'react';

const CurrencyCounter = () => {
    const [currencyValues, setCurrencyValues] = useState({
        2000: 0,
        500: 0,
        200: 0,
        100: 0,
        50: 0,
        20: 0,
        10: 0,
        5: 0,
        2: 0,
        1: 0
    });

    const handleChange = (denomination, value) => {
        const numValue = value === '' ? 0 : parseInt(value);
        if (!isNaN(numValue)) {
            setCurrencyValues(prev => ({
                ...prev,
                [denomination]: numValue
            }));
        }
    };

    const calculateTotal = () => {
        return Object.entries(currencyValues).reduce((total, [denomination, count]) => {
            return total + (parseInt(denomination) * count);
        }, 0);
    };

    const formatIndianCurrency = (num) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0
        }).format(num);
    };

    const currencyNotes = [
        { value: 2000, image: '../dist/assets/images/2000.jpg', alt: '2000 rupee note' },
        { value: 500, image: '../dist/assets/images/500.jpg', alt: '500 rupee note' },
        { value: 200, image: '../dist/assets/images/200.jpg', alt: '200 rupee note' },
        { value: 100, image: '../dist/assets/images/100.jpg', alt: '100 rupee note' },
        { value: 50, image: '../dist/assets/images/50.jpg', alt: '50 rupee note' },
        { value: 20, image: '../dist/assets/images/20.jpg', alt: '20 rupee note' },
        { value: 10, image: '../dist/assets/images/10.jpg', alt: '10 rupee note' },
        { value: 5, image: '../dist/assets/images/5.jpg', alt: '5 rupee coin' },
        { value: 2, image: '../dist/assets/images/2.jpg', alt: '2 rupee coin' },
        { value: 1, image: '../dist/assets/images/1.jpg', alt: '1 rupee coin' }
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-indigo-600 py-4 px-6">
            <h1 className="text-2xl font-bold text-white text-center">Indian Currency Counter</h1>
          </div>
          
          <div className="p-6">
            {/* Desktop - 2 columns */}
            <div className="hidden md:grid grid-cols-2 gap-6">
              <div className="space-y-6">
                {currencyNotes.slice(0, 5).map((note) => (
                  <div key={note.value} className="flex items-center gap-4">
                    <div className="w-24 h-16 flex-shrink-0 bg-gray-100 rounded flex items-center justify-center">
                      <img 
                        src={note.image} 
                        alt={note.alt} 
                        className="h-full object-contain"
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = "https://via.placeholder.com/80x40?text=₹"+note.value;
                        }}
                      />
                    </div>
                    <div className="flex-grow">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        ₹{note.value} {note.value >= 20 ? 'Note' : 'Coin'}
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          min="0"
                          value={currencyValues[note.value]}
                          onChange={(e) => handleChange(note.value, e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <div className="w-24 px-2 py-2 bg-gray-50 rounded-md text-right font-medium">
                          ₹{(note.value * currencyValues[note.value]).toLocaleString('en-IN')}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6">
                {currencyNotes.slice(5).map((note) => (
                  <div key={note.value} className="flex items-center gap-4">
                    <div className="w-24 h-16 flex-shrink-0 bg-gray-100 rounded flex items-center justify-center">
                      <img 
                        src={note.image} 
                        alt={note.alt} 
                        className="h-full object-contain"
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = "https://via.placeholder.com/80x40?text=₹"+note.value;
                        }}
                      />
                    </div>
                    <div className="flex-grow">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        ₹{note.value} {note.value >= 20 ? 'Note' : 'Coin'}
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          min="0"
                          value={currencyValues[note.value]}
                          onChange={(e) => handleChange(note.value, e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <div className="w-24 px-2 py-2 bg-gray-50 rounded-md text-right font-medium">
                          ₹{(note.value * currencyValues[note.value]).toLocaleString('en-IN')}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile - 1 column */}
            <div className="md:hidden space-y-6">
              {currencyNotes.map((note) => (
                <div key={note.value} className="flex items-center gap-4">
                  <div className="w-20 h-14 flex-shrink-0 bg-gray-100 rounded flex items-center justify-center">
                    <img 
                      src={note.image} 
                      alt={note.alt} 
                      className="h-full object-contain"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "https://via.placeholder.com/80x40?text=₹"+note.value;
                      }}
                    />
                  </div>
                  <div className="flex-grow">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ₹{note.value} {note.value >= 20 ? 'Note' : 'Coin'}
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        min="0"
                        value={currencyValues[note.value]}
                        onChange={(e) => handleChange(note.value, e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                      <div className="w-20 px-2 py-2 bg-gray-50 rounded-md text-right font-medium">
                        ₹{(note.value * currencyValues[note.value]).toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900">Total Amount:</h2>
                <div className="text-2xl font-bold text-indigo-600">
                  {formatIndianCurrency(calculateTotal())}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CurrencyCounter;