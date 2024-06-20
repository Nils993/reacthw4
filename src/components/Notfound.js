import { Link } from "react-router-dom";
function Notfoundpage() {
  return (
    <div>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Notfoundpage;
