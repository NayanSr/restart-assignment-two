const Navigation = () => {
  const menus = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>FAQ</a>
      </li>
      <li>
        <a>Changelog</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <a>Download</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );

  return (
    <div className=" bg-white">
      <div className="navbar justify-between p-0">
        <div className="p-0">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {menus}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold">CS <span className="w-6 h-0.75 bg-black"></span>Ticket-System</a>
        </div>

        <div className="flex items-center">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[16px] gap-6">{menus}</ul>
          </div>
          <a className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] ml-6 font-semibold text-[16px]">+ New Ticket</a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
