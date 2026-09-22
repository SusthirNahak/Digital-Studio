'use client';

export default function Error({ error, reset }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <h2 className="text-2xl font-bold text-neutral-900 mb-4">Something went wrong</h2>
      <p className="text-sm text-neutral-600 mb-6">{error?.message || 'An unexpected error occurred.'}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-neutral-900 text-white rounded text-sm hover:bg-neutral-800 transition cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}
