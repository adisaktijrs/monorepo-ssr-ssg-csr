import { InferGetServerSidePropsType } from "next/types";

export async function getServerSideProps() {
  console.info(
    `Initiate fetch: both component: ${new Date().toLocaleTimeString()}`
  );

  const res = await fetch(
    `http://localhost:5000/api?key=${process.env.VITE_API_KEY}`
  );
  const { data } = await res.json();
  return { props: { message: data } };
}

const Security = ({
  message,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.info(`Render: component: ${new Date().toLocaleTimeString()}`);
  return (
    <>
      <p>
        welcome to the secret message page. Below is a data that you could only
        get when you have a api key.
      </p>
      <p className="text-red-800">{message}</p>
    </>
  );
};

export default Security;
