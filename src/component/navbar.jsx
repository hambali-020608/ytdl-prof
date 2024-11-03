import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar({ children }) {
  return (
      <nav className="navbar navbar-expand-lg bg-primary">
          <div className="container">
          <h1 className='fw-bold  '>YTDL<div className=' fw-bold text-white d-inline'>-PROF</div></h1> 
              <div className="navbar-collapse">
                  <div className="navbar-nav">
                      {children}
                  </div>
              </div>
          </div>
      </nav>
  );
}

export default Navbar;
