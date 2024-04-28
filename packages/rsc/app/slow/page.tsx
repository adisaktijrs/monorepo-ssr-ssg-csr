import { Suspense } from "react";
import Slow from "../components/Slow";
import Slowest from "../components/Slowest";

const Page = () => {
  return (
    <>
      <p>This is a static component.</p>
      <p>Instant.</p>
      <p className="mt-5">This component below has slow API to fetch</p>
      <Suspense fallback={<p className="text-red-400">loading...</p>}>
        <Slow />
      </Suspense>
      <p className="mt-5">This component below has slowest API to fetch</p>
      <Suspense fallback={<p className="text-red-400">loading...</p>}>
        <Slowest />
      </Suspense>
    </>
  );
};

export default Page;
