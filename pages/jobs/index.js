// to fetch data
import Link from "next/link";
import { useEffect, useState } from "react";
// import './pages/jobs/Home.module.css';

<ul class="flex border-b">
<li class="-mb-px mr-1">
  <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-20 text-blue-700 font-semibold" href="/">Home</a>
</li>
<li class="mr-1">
  <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="/jobs">Jobs</a>
</li>
<li class="mr-1">
  <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="https://github.com/explore">Github</a>
</li>
<li class="mr-1">
  <a class="bg-white inline-block py-2 px-4 text-gray-400 font-semibold" href="#">Secure Job</a>
</li>
</ul>

export const getStaticProps = async () => {
  try {
    const res = await fetch("http://localhost:1337/api/jobs?populate=*");
    const data = await res.json();

    return {
      props: {
        getJobs: data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        getJobs: [],
      },
    };
  }
};

// import Link from 'next/link';

// ...

const JobPage = () => {
  // Minimising the paragraphs on the card component
  const MAX_LENGTH = 300;

  const [getJobs, setGetJobs] = useState([]);

  // function to fetch the data
  async function FetchData(params) {
    const res = await fetch("http://localhost:1337/api/jobs?populate=*");
    const data = await res.json();
    console.log(data);
    setGetJobs(data.data);
  }

  //useEffect hook to run the app everytime the page loads
  useEffect(() => {
    // calling the fetch data method
    FetchData();
  }, []);

  return (
    <ul>
      <>
        <section className="w-full px-4 py-24 mx-auto max-w-7xl md:w-4/5">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {/* {getJobs && */}
             { getJobs?.map(job => (
                <li key={job.key}>
                  <Link href={"/jobs/" + job.id}>
                    <div className="text-gray-900 hover:text-purple-700 cursor-pointer">
                      <h2 className="mb-2 text-xl font-bold leading-snug text-gray-900">
                        {job.attributes.vacancy}
                      </h2>
                    </div>
                  </Link>
                  <p className="mb-4 text-sm font-normal text-gray-600">
                    {job.attributes.description.substring(0, MAX_LENGTH) +
                      " ..."}
                  </p>
                  <Link href="#">
                    <div className="flex items-center text-gray-700 cursor-pointer">
                      <div className="avatar">
                        <img
                          className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
                          src={`http://localhost:1337${job.attributes.image.data.attributes.url}`}
                          alt={"Photo of " + job.attributes.recruiter}
                        />
                      </div>
                      <div className="ml-2">
                        <p className="text-sm font-semibold text-gray-900">
                          {job.attributes.recruiter}
                        </p>
                        <p className="text-sm text-gray-600">
                          {job.attributes.email}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
          </div>

          {/* btns */}
         <div className = "button-container"></div>
          <div className="flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
          <button>  <Link href="/">
              <div className="px-3 py-2 text-indigo-500 border border-indigo-500 border-solid hover:text-black md:w-auto cursor-pointer">
                Home
              </div>
            </Link></button>
          </div>

          {/* <div className="flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
          <button> <Link href="/jobs">
              <div className="px-3 py-2 text-indigo-500 border border-indigo-500 border-solid hover:text-black md:w-auto cursor-pointer">
                Jobs
              </div>
            </Link></button>
          </div>

          <div className="flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
          <button>  <Link href="/">
              <div className="px-3 py-2 text-indigo-500 border border-indigo-500 border-solid hover:text-black md:w-auto cursor-pointer">
                Github
              </div>
            </Link>
            </button>
          </div> */}


        </section>
      </>
    </ul>
  );
};

export default JobPage;
