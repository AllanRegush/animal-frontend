import "./app.css";
import { Animal } from "./components/Animal";
import { useAnimalSearch } from "./hooks/UseAnimalSearch";

function App() {
  const { search, animals } = useAnimalSearch();

  return (
    <main className="flex flex-col items-center text-center container gap-2 pt-10">
      <h1 className="text-lg">Animal API</h1>
      <input
        className="max-w-32 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Search"
        onChange={(e) => {
          search(e.target.value);
        }}
      />
      <ul>
        {animals &&
          animals.map((animal) => <Animal key={animal.id} {...animal} />)}
      </ul>
      <p>Total Number of Animals: {animals.length} </p>
      {animals.length === 0 && "No Animals"}
    </main>
  );
}

export default App;
