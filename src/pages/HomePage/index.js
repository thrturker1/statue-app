import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Welcome!</h1>
        <p className="lead">Discover amazing features and content.</p>
        <hr className="my-4" />
        <p>Explore and enjoy your stay with us.</p>
        <Link to="/login" className="btn btn-primary btn-md" role="button">
          Get Started
        </Link>
      </div>
    </div>
  );
};

