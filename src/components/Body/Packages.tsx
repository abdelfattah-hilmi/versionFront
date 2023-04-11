function Packages(){
    
    return (
    <>
    <header aria-label="Page Header" className="bg-gray-50">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="md:flex items-center justify-center md:justify-end gap-4 sm:gap-2">
        <div className="flex items-center justify-center md:justify-end gap-4 sm:gap-2">
          <div className="relative">
            <label className="sr-only" htmlFor="search"> Search </label>
    
            <input
              className="h-10 w-full rounded-full border-none bg-white pl-4 pr-10 text-sm shadow-sm sm:w-56"
              id="search"
              type="search"
              placeholder="Search by IP"
            />
    
            <button
              type="button"
              className="absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
            >
              <span className="sr-only">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
    
          
        </div>
    
       
    
        
      </div>
    
      <div className="mt-8">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Packages Consulting
        </h1>
    
        <p className="mt-1.5 text-sm text-gray-500">
          Click on the details button to see all related data 🚀
        </p>
      </div>
    </div>
    </header>
    </>
    )
    }
    
    export default Packages