// src/OverlayForm.tsx
import React from 'react';
import { useState } from 'react';

interface AddItemOverlayFormProps {
  show: boolean;
  onClose: () => void;
}

const AddItemOverlayForm: React.FC<AddItemOverlayFormProps> = ({ show, onClose}) => {
  if (!show) return null;
  const [response, setResponse] = useState<string | null>(null)
  const [artist, setArtist] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [medium, setMedium] = useState<string>('');
  const [size, setSize] = useState<number>(0);
  const [qty, setQty] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  const handleClick = async () => {
    const data = { 
      Artist: artist,
      Title: title,
      Medium: medium,
      Size: size,
      Qty: qty,
      Price: price
    };

    const res = await fetch('http://localhost:8080/add-item', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    const flaskData = await res.json()
    setResponse(flaskData.message)
    onClose()
}

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md relative">
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl mb-4 text-gray-700">Add New Item</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="artist">
              Artist
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="artist"
              type="text"
              placeholder="Artist"
              onChange={(e) => setArtist(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="medium">
              Medium
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="medium"
              type="text"
              placeholder="Medium"
              onChange={(e) => setMedium(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="size">
              Size
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="size"
              type="number"
              placeholder="Size"
              onChange={(e) => setSize(e.target.valueAsNumber)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="qty">
              Quantity
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="qty"
              type="number"
              placeholder="Quantity"
              onChange={(e) => setSize(e.target.valueAsNumber)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="number"
              placeholder="Price"
              onChange={(e) => setSize(e.target.valueAsNumber)}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleClick}
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddItemOverlayForm;
