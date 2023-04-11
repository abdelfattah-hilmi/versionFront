function NavBar(){
    return (
        <>
    <header aria-label="Site Header" className="bg-white">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="md:flex md:items-center md:gap-12">
          <a className="block text-teal-600" href="/">
            <span className="sr-only">Home</span>
            
          </a>
        </div>
  
        <div className="hidden md:block">
          <nav aria-label="Site Nav">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-black font-bold transition hover:text-gray-900/75"
                  href="/vms"
                >
                  Virtual Machines
                </a>
              </li>
  
              <li>
                <a
                  className="text-black font-bold transition hover:text-gray-900/75"
                  href="/packages"
                >
                  Packages
                </a>
              </li>
  
              
            </ul>
          </nav>
        </div>
  
      </div>
    </div>
  </header>
  </>
    )
  
}

export default NavBar