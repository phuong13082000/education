import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <>    
      <Button variant="link">
        <Link to="/">Page not found. Back to homepage</Link>
      </Button>
    </>
  );
}
