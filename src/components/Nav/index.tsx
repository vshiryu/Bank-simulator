import { Link } from "react-router-dom";
import { routes } from "../../constants/routes";

export const Nav = (): JSX.Element => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={routes.home}>Home</Link>
        </li>
      </ul>
    </nav>
  );
};
