
export function LanguageSwitch({ className = '' }: { className?: string }) {
  return (
      <button type="button" disabled className={`flex ${className} text-gray-5`}>
      <div className="i-material-symbols-language"></div>
    </button>
  );
}