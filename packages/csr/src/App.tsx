import useSWR from "swr";
import "./App.css";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function App() {
  const { data, isLoading } = useSWR<{ data: string }>(
    `http://localhost:5000/api?key=${import.meta.env.VITE_API_KEY}`,
    fetcher
  );

  return (
    <>
      <h1 className="text-3xl text-blue-600">Hello world!</h1>
      <p>This is an example of react app with CSR rendering strategy</p>
      <p className="text-red-800">{isLoading ? "loading..." : data?.data}</p>
    </>
  );
}

export default App;
