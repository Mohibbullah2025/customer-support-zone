
const Navbar = () => {
  return (
    <div className="navbar px-0 flex-nowrap shadow bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content rounded-box z-10 mt-3 overflow-hidden pb-4 w-40 p-2">
        <li><a>Home</a></li>
        <li><a>FAQ</a></li>
        <li><a>Changelog</a></li>
        <li><a>Blog</a></li>
        <li><a>Download</a></li>
        <li><a>Contact</a></li>
        <li className="btn btn-ghost bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">+ New Ticket</li>
    </ul>
    </div>
    <a className="btn btn-ghost text-xl p-0">CS — Ticket System</a>
  </div>
  <div className="navbar-end hidden md:flex items-center gap-4 ">
     <ul className="menu menu-horizontal items-center">
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
    </ul>
    <button className="btn btn-ghost bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">+New Ticket</button>
  
  </div>
</div>
  )
};

export default Navbar
