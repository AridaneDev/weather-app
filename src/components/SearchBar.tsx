import { type FormEvent } from "react";
interface Props {
  onSearch: (city: string) => void;
}

export function SearchBar({ onSearch }: Props) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("city") as HTMLInputElement;
    const city = input.value.trim();
    if (city) onSearch(city);
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
      <input
        name="city"
        type="text"
        placeholder="Ciudad..."
        className="flex-1 min-w-0 px-3 py-2 rounded-xl text-base text-gray-700 outline-none placeholder:text-gray-400 bg-white"
      />
      <button
        type="submit"
        className="shrink-0 px-3 py-2 bg-white text-gray-800 rounded-xl font-semibold hover:bg-gray-100 whitespace-nowrap"
      >
        Buscar
      </button>
    </form>
  );
}
