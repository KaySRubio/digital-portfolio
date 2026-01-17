import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import type { FirebaseError } from 'firebase/auth';
import type { FirebaseApp } from 'firebase/app';

type LoginProps = {
  app: FirebaseApp;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUserEmail: React.Dispatch<React.SetStateAction<string | null>>;
}

const Login = ({app, setLoggedIn, setUserEmail}: LoginProps) => {
  const auth = getAuth(app);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission

    try {
      setError(null); // Clear previous errors
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Signed in successfully
      // const user = userCredential.user;
      // console.log('User logged in:', user);
      // Redirect or update UI to show user is logged in
      setLoggedIn(true);
      setUserEmail(userCredential.user.email)

    } catch (firebaseError: FirebaseError) {
      // Handle errors here
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