

export default function navbar() {
    return (
      <div classNameName="navbar">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img className="w-50" src="https://files.thesirona.com/site-images/original/253x72.png" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex me-auto" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>

                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">CART</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">PROFILE</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

            <nav className="navbar navbar-expand bg-body-tertiary">
                <div className="container-fluid">
                    <ul className="navbar-nav mx-auto mb-2 fs-6 mb-lg-0 d-flex flex-wrap">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">SHOP ALL</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PERIOD CARE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">INTIMATE CARE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">TOILET HYGIENE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">HAIR REMOVAL</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PERSONAL SAFETY</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">KITS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">BLOG</a>
                        </li>

                    </ul>
                </div>
            </nav>
    
      </div>
    );
  }
  
