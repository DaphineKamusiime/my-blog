import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>
      <section classNameName="px-4 py-32 flex justify-center h-screen align-center bg-black">
        <div classNameName="w-full mx-auto lg:w-1/3">
          <Link
            href="#"
            title="Hellonext Home Page"
            classNameName="flex items-center"
          >
            <span classNameName="sr-only text-white">Kutty Home Page</span>
          </Link>
          <p classNameName="mt-5 mb-3 text-xl font-bold text-white md:text-2xl">
            Page not found (404)
          </p>
          <Link href="/">
            <span classNameName="mb-3 text-base font-medium text-gray-200">
              The page you&apos;re looking for may have moved or no longer exists.
              Head back to our{" "}
              <span classNameName="underline text-indigo-500 cursor-pointer">
                homepage
              </span>
              , or take a look at one of the sections below.
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
