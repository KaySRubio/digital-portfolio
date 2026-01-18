import { useState } from 'react';
import type { FirebaseApp } from 'firebase/app';
import { authenticate } from '../../utils/firebaseRequests';

type LoginProps = {
  app: FirebaseApp;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUserEmail: React.Dispatch<React.SetStateAction<string | null>>;
}

const Login = ({app, setLoggedIn, setUserEmail}: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      setError(null);
      const userCredential = await authenticate(app, email, password);
      setLoggedIn(true);
      setUserEmail(userCredential.user.email)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (firebaseError: any) {
      console.error('Login error:', firebaseError.code, firebaseError.message);
      setError(firebaseError.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Log In</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}
  
export default Login;