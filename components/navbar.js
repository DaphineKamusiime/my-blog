import Link from 'next/link'

const Navbar = () => {
    return ( 
        <header className="sticky top-0 z-10 text-gray-600 bg-white shadow-lg body-font">
            <div className="container flex flex-row flex-wrap items-center justify-between p-5 mx-auto">
                <div className="flex items-center font-medium text-indigo-500">
                    <span className="ml-1 text-xl text-center">Secure Job</span>
                </div>
                    <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
                        <Link href='/' className="mr-5 underline hover:text-gray-900 underline-offset-2 decoration-2 decoration-indigo-500">Home</Link>
                        <Link  href='/jobs' className="mr-5 hover:text-gray-900">Jobs</Link>
                       <Link   href='https://github.com/DaphineKamusiime/my-blog' className="mr-5 hover:text-gray-900">Github </Link>
                        {/* <Link  href='/login' className="mr-5 hover:text-gray-900">Login</Link> */}
                    </nav>
            </div>
        </header>
     );
}
 
export default Navbar;