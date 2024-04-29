const dynamic = "force-dynamic";

async function getData() {
  const res = await fetch("http:localhost:5000/slowest", { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  console.info(
    `Finished fetch: SuperSlow component: ${new Date().toLocaleTimeString()}`
  );
  return res.json();
}

async function Slowest() {
  const res = await getData();
  return <p>{res.data}</p>;
}

export default Slowest;
