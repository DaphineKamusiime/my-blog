import Link from 'next/link'


// to fetch data
 
export const getStaticProps = async () => { 
  try{
    // create a fetch request to http://127.0.0.1:1337/api/jobs?populate=* and populate with the data as Json.
    const res = await fetch('http://127.0.0.1:1337/api/jobs?populate=*')
    const data = await res.json()

    console.log(data)
    return {
      props: {
           getJobs: data.data
      }
 }
 

  } catch (e) { 
    console.error(e) 
  } 
  return {
    props: {
         getJobs: []
    }
}
  }
  
  
    
const JobPage = ({getJobs}) => {
  // Minimising the paragrahps on the card component
  const MAX_LENGTH = 250

  return (
    <ul>
      <>
        <section className="w-full px-4 py-24 mx-auto max-w-7xl md:w-4/5">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {getJobs.map((job) => (
              <li key={job.key}>
                <Link  href={'/jobs/' + job.id}>
                  <div className="text-gray-900 hover:text-purple-700 cursor-pointer">
                    <h2 className="mb-2 text-xl font-bold leading-snug text-gray-900">
                      {job.attributes.vacancy}
                    </h2>
                  </div>
                </Link>
                <p className="mb-4 text-sm font-normal text-gray-600">
                  {job.attributes.description.substring(0, MAX_LENGTH) + ' ...'}
                </p>
                <Link  href="#">
                  <div className="flex items-center text-gray-700 cursor-pointer">
                    <div className="avatar">
                      <img
                        className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
                        src={`http://localhost:1337${job.attributes.image.data?.attributes.url}`}
                        alt={'Photo of ' + job.attributes.recruiter}
                      />
                    </div>
                    <div className="ml-2">
                      <p className="text-sm font-semibold text-gray-900">
                        {job.attributes.recruiter}
                      </p>
                      <p className="text-sm text-gray-600">{job.attributes.email}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </div>
          {/* btns */}
          <div className="flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
            <Link  href="/">
              <div className="px-3 py-2 text-indigo-500 border border-indigo-500 border-solid hover:text-black md:w-auto cursor-pointer">
                Home
              </div>
            </Link>
          </div>
        </section>
      </>
    </ul>
  );
};
export default JobPage;