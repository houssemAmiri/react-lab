import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>Hello To my React lab</h1>
      <Link to="code-splitting">Code splitting</Link> <br />
      <Link to="useEffect-problems">UseEffect problems</Link>
    </div>
  );
}
