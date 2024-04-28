const dynamic = "force-dynamic";

async function getData() {
  const res = await fetch("http:localhost:5000/slow", { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  console.info(
    `Finished fetch: Slow component: ${new Date().toLocaleTimeString()}`
  );
  return res.json();
}

async function Slow() {
  const res = await getData();
  return <p>{res.data}</p>;
}

export default Slow;
