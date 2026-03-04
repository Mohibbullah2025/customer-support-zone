
const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2">
        <li><a>Home</a></li>
        <li><a>FAQ</a></li>
        <li><a>Changelog</a></li>
        <li><a>Blog</a></li>
        <li><a>Download</a></li>
        <li><a>Contact</a></li>
        <li className="btn btn-ghost bg-linear-to-r from-[#422AD5] to-[#594ea1] text-[#320cda]">+ New Ticket</li>
    </ul>
    </div>
    <a className="btn btn-ghost text-xl">CS — Ticket System</a>
  </div>
  <div className="navbar-end hidden md:block">
     <ul className="menu menu-horizontal px-5 items-center">
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
      <li className="btn btn-ghost bg-blue-700 bg-linear-to-r from-[#422AD5] to-[#594ea1] text-[#320cda]">+ New Ticket</li>
    </ul>
    
  </div>
</div>
  )
};

export default Navbar
