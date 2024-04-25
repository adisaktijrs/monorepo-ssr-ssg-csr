import { InferGetServerSidePropsType } from "next/types";

export async function getServerSideProps() {
  console.info(`Initiate fetch: ${new Date().toLocaleTimeString()}`);
  const [slowRes, slowestRes] = await Promise.all([
    fetch(`http:localhost:5000/slow`),
    fetch(`http:localhost:5000/slowest`),
  ]);
  console.log(slowRes, slowestRes);
  const [slow, slowest] = await Promise.all([
    slowRes.json(),
    slowestRes.json(),
  ]);
  return { props: { slow, slowest } };
}

const Slow = ({
  slow,
  slowest,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.info(`Render: ${new Date().toLocaleTimeString()}`);
  return (
    <>
      <p>Data from slow API (3 second) delay</p>
      <p className="text-red-800">{slow.data}</p>
      <p>Data from super slow API (5 second) delay</p>
      <p className="text-red-800">{slowest.data}</p>
    </>
  );
};

export default Slow;
