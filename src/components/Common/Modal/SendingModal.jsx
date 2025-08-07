export default function SendingModal({ show }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="w-full max-w-sm bg-white border border-gray-300 px-6 py-5 rounded-xl shadow-2xl text-black text-center animate-pulse">
        <p className="text-lg sm:text-xl font-semibold text-purple-600">Sending...</p>
        <p className="text-sm text-gray-600 mt-2">
          Please wait while your message is being delivered.
        </p>
      </div>
    </div>
  );
}
