import { ArrowDownIcon } from '@heroicons/react/24/outline';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import LogoIcon from "./../../src/assets/svg/ChatLogo";

const FormComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [submittedValue, setSubmittedValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://odoobros.pythonanywhere.com/api/hello/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: inputValue }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setSubmittedValue(result.output); // Adjust based on your API response
      setInputValue('');  // Clear input field after submission
    } catch (error) {
      setError('Failed to submit the form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=''>
      <form onSubmit={handleSubmit} className="rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <div className='border-red-400 flex gap-2 h-14'>
            <input
              value={inputValue}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Message OdooChat"
            />
            <div className="flex items-center justify-between">
              <button
                className={`bg-blue-500 rounded-full h-full  hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                type="submit"
                disabled={loading}
              >
                <ArrowDownIcon className='w-5 h-5' />
              </button>
            </div>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {submittedValue && <div className='rounded-lg p-4 border-gray border-[.1px] mt-6 h-auto'>
            <div className='flex gap-3'>
              <div className='flex  justify-center'>
                <LogoIcon className="logo" />
              </div>
              <p className="text-green-500 flex">  {submittedValue}</p>
            </div>
          </div>}
        </div>
      </form>
    </div>
  );
}

export default FormComponent;
