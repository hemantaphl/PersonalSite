export default function SuccessModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white/30 backdrop-blur-md shadow-lg border border-white/40 rounded-md p-5 w-full max-w-xs mx-4">
        <div className="flex justify-end">
          <button type="button" className="text-gray-600 hover:text-gray-900" onClick={onClose}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="text-center">
          <div className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-green-100 text-green-600 mx-auto mb-3">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
              <path d="M16 2L6 12.01l-4-4L0 10l6 6L18 4z" />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-gray-800">Message sent!</h3>
          <p className="text-sm text-gray-600 mt-1">Thank you! I’ll get back to you soon.</p>
          <button
            className="mt-4 px-4 py-1.5 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
            onClick={onClose}
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}
