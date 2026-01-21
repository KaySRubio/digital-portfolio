import { useState, useEffect } from "react";
import type { SupabaseClient, Session, AuthChangeEvent } from "@supabase/supabase-js";
import { verifyOptToken, sendLoginEmail, signInWithPassword } from '../../utils/supabaseRequests';

type VocabLoginProps = {
  supabase: SupabaseClient | null;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setSession: React.Dispatch<React.SetStateAction<Session | null>>;
}

const VocabLogin = ({supabase, setEmail, email, setSession}: VocabLoginProps) => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);

  useEffect(() => {
    // Check if we have token_hash in URL (magic link callback)
    const params = new URLSearchParams(window.location.search);
    const tokenHash = params.get("token_hash");
    const type = params.get("type");

    if (tokenHash) {
      verifyOptTokenLocally(tokenHash, type);
    }

    // Check for existing session
    if(!supabase) return;
    supabase.auth.getSession().then(
      ({ data }: { data: { session: Session | null } }) => {
          setSession(data.session);
      }
    );

    // Listen for auth changes
    const {
        data: { subscription },
    } = supabase.auth.onAuthStateChange((_event: AuthChangeEvent, session: Session | null) => {
        setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if(verifying) {
      setStatusMsg("Confirming your link and verifying...");
    }
  }, [verifying])

  useEffect(() => {
    if(verifying) {
      setStatusMsg("Verifying...");
    }
  }, [loading])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const verifyOptTokenLocally = async (tokenHash: any, type: any) => {
    if (tokenHash) {
      const verified = await verifyOptToken(supabase, tokenHash, type)
      if(!verified) {
        setStatusMsg('Error verifying opt token');
      }
      setVerifying(false);
    } 
  }

  const loginByEmailLink = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLoading(true);
    const loginEmailSent = await sendLoginEmail(supabase, email);
    if(loginEmailSent) {
      setStatusMsg('Check your email for a login link');
    }
    setLoading(false);
  };

  const handleLogin = async () => {
    setLoading(true);
    const signedIn = await signInWithPassword(supabase, email, password);
    if(!signedIn) {
      setStatusMsg('Error! Incorrect email or password');
    }
    setLoading(false);
  };

  return (
    <div className='vocab-login-page'>
      <h2>Sign in</h2>
      <form className='vocab-login-form' onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          autoComplete="username"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='vocab-text-button' disabled={loading} type='submit'>Log In</button>
        <button type='button' className='vocab-text-button' disabled={loading} onClick={loginByEmailLink}>Send me link</button>
      </form>
      <p>{statusMsg}</p>
    </div>
  );
}
export default VocabLogin;