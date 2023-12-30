import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center mt-5">
          <h1 className="display-4">404 - Page Not Found</h1>
          <p className="lead">The page you are looking for might be in another castle.</p>
          <img
            src="https://i.imgur.com/qIufhof.png"
            alt="Mario 404"
            className="img-fluid mt-4" 
            style={{ maxWidth: '80%', height: 'auto' }}
          />
          <p className="mt-4">
            <Link to="/" className="btn btn-primary btn-md" role="button">
              Go to home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};


