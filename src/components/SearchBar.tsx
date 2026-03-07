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
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md px-1">
      <input
        name="city"
        type="text"
        placeholder="Busca una ciudad..."
        className="flex-1 px-4 py-2 rounded-xl text-gray-700 outline-none placeholder:text-gray-700 bg-white"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-white text-gray-800 rounded-xl font-semibold hover:bg-gray-100"
      >
        Buscar
      </button>
    </form>
  );
}
