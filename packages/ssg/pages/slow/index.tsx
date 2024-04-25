import { InferGetServerSidePropsType } from "next/types";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  console.info(`Initiate fetch: ${new Date().toLocaleTimeString()}`);
  const [slowRes, slowestRes] = await Promise.all([
    fetch(`http:localhost:5000/slow/time`),
    fetch(`http:localhost:5000/slowest`),
  ]);

  const [slow, slowest] = await Promise.all([
    slowRes.json(),
    slowestRes.json(),
  ]);
  return { props: { slow, slowest } };
}

const Slow = ({
  slow,
  slowest,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  console.info(`Render: ${new Date().toLocaleTimeString()}`);
  const [time, setTime] = useState("");

  // use state and effect to fix hydration mismatch problem
  // see: https://react.dev/errors/418?invariant=418
  useEffect(() => {
    const date = new Date();
    setTime(`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`);
  }, []);

  return (
    <>
      <p>Client time: {time}</p>
      <p className="text-red-800">{slow.data}</p>
      <p>Data from super slow API (5 second) delay</p>
      <p className="text-red-800">{slowest.data}</p>
    </>
  );
};

export default Slow;
