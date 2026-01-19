import { useState, useEffect } from "react";
import type { SupabaseClient, Session, AuthChangeEvent } from "@supabase/supabase-js";
import { verifyOptToken, sendLoginEmail, signInWithPassword } from '../../utils/supabaseRequests';


type LoginProps = {
  supabase: SupabaseClient;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setSession: React.Dispatch<React.SetStateAction<Session | null>>;
}

const Login = ({supabase, setEmail, email, setSession}: LoginProps) => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");

    // Check URL params on initial render
  const params = new URLSearchParams(window.location.search);
  const hasTokenHash = params.get("token_hash");

  const [verifying, setVerifying] = useState(!!hasTokenHash);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);

  useEffect(() => {
    verifyOptTokenLocally();

    // Check for existing session
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

  const verifyOptTokenLocally = async () => {
    // Check if we have token_hash in URL (magic link callback)
    const params = new URLSearchParams(window.location.search);
    const token_hash = params.get("token_hash");
    const type = params.get("type");
    
    if (token_hash) {
      const verified = await verifyOptToken(supabase, token_hash, type)
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

  const loginByEmailAndPassword = async () => {
    setLoading(true);
    const signedIn = await signInWithPassword(supabase, email, password);
    if(!signedIn) {
      setStatusMsg('Error! Incorrect email or password');
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Sign in</h2>
      <form>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button disabled={loading} onClick={loginByEmailLink}>Send login link</button>
        <p>Or enter password: </p>
        <input
          type="text"
          placeholder="password"
          value={password}
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={loading} onClick={loginByEmailAndPassword}>Sign In</button>
      </form>
      <p>{statusMsg}</p>
    </div>
  );
}
export default Login;