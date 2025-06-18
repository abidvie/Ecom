


import React, { useRef } from 'react';

const OtpPage = () => {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^\d?$/.test(value)) return; // Allow only one digit

    // Move to next input if a digit is entered
    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }

    // Move back on empty value
    if (!value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otp = inputsRef.current.map((input) => input.value).join('');
    alert(`Entered OTP: ${otp}`);
    // You can send OTP to backend here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-2 text-center">🔐 OTP Verification</h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Enter the 6-digit code sent to your phone/email
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-between gap-2">
            {[0, 1, 2, 3].map((index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                ref={(el) => (inputsRef.current[index] = el)}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Verify OTP
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Didn’t get the code?{' '}
          <button className="text-blue-600 hover:underline">Resend</button>
        </p>
      </div>
    </div>
  );
};

export default OtpPage;
