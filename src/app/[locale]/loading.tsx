export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-ethsun-gold/20 border-t-ethsun-gold rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm text-gray-400 font-medium">Chargement...</p>
      </div>
    </div>
  );
}
