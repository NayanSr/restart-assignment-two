const Footer = () => {
  return (
    <footer className="footer  bg-black text-white p-10 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 items-center">
      {/* //! col 01 */}
      <aside className="sm:border-r-2 border-b-stone-700 pr-2 mr-4 h-full">
        <h3 className="flex items-center text-xl font-semibold">
          CS
          <p className="mx-2 w-4 h-0.5 bg-white"></p>
          Ticket System
        </h3>
        <p className="text-justify">Providing fast, reliable, and efficient support solutions to help businesses manage customer requests seamlessly.</p>
      </aside>

      {/* //! col 02 */}
      <nav className="sm:border-r pr-2 border-b-stone-700 h-full">
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Our Mission</a>
        <a className="link link-hover">Contact Saled</a>
        
      </nav>
      {/* //! col 03 */}
      <nav className="sm:border-r pr-2 border-b-stone-700 h-full">
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Products & Services</a>
        <a className="link link-hover">Customer Stories</a>
        <a className="link link-hover">Download App</a>
        
      </nav>




      {/* //! col 04 */}
      <nav className="sm:border-r pr-2 border-b-stone-700 h-full">
        <h6 className="footer-title">Information</h6>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Terms and Conditions</a>
        <a className="link link-hover">Join Us</a>
      </nav>




      {/* //! col 05 */}
      <nav className="h-full">
        <h6 className="footer-title">Social Links</h6>
        <a className="link link-hover">For X</a>
        <a className="link link-hover">For Lin</a>
        <a className="link link-hover">For FB </a>
        <a className="link link-hover">For GM </a>
      </nav>
    </footer>
  );
};

export default Footer;
