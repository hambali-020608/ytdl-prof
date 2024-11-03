import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar({ children }) {
  return (
      <nav className="navbar navbar-expand-lg bg-primary">
          <div className="container">
              <a className="navbar-brand" href="#">YTDL-PROF</a>
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
