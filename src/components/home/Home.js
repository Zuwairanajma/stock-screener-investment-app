import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
      <h3 className="mb-8 text-2xl">Select a course you&apos;d like to enroll</h3>
      <div className="grid gap-10 px-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <div className="card w-64 bg-base-100 border-none rounded-lg overflow-hidden">
          <figure className="rounded-t-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbXB1dGVyJTIwY291cnNlfGVufDB8fDB8fHww"
              alt="Shoes"
              className="w-full h-40 object-cover rounded-full"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title text-xl font-bold mt-4 mb-2">Computer Course</h2>
            <p className="mb-4 text-gray-700">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions">
            <Link to={`/details/1`}>
              <button  className="btn btn-primary bg-[#97bf0f] p-2 text-white">Enroll Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-64 bg-base-100 border-none rounded-lg overflow-hidden">
          <figure className="rounded-t-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbXB1dGVyJTIwY291cnNlfGVufDB8fDB8fHww"
              alt="Shoes"
              className="w-full h-40 object-cover rounded-full"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title text-xl font-bold mt-4 mb-2">Computer Course</h2>
            <p className="mb-4 text-gray-700">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions">
            <Link to={`/details/2`}>
              <button className="btn btn-primary bg-[#97bf0f] p-2 text-white">Enroll Now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-64 bg-base-100 border-none rounded-lg overflow-hidden">
          <figure className="rounded-t-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbXB1dGVyJTIwY291cnNlfGVufDB8fDB8fHww"
              alt="Shoes"
              className="w-full h-40 object-cover rounded-full"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title text-xl font-bold mt-4 mb-2">Computer Course</h2>
            <p className="mb-4 text-gray-700">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions">
            <Link to={`/details/3`}>
              <button className="btn btn-primary bg-[#97bf0f] p-2 text-white">Enroll Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home