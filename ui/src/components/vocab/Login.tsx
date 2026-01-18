import { useState, useEffect } from "react";

type LoginProps = {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: any;
  setEmail: React.Dispatch<React.SetStateAction<string | null>>;
  email: string | null;
}

const Login = ({supabase, setLoggedIn, setEmail, email}: LoginProps) => {
  const [loading, setLoading] = useState(false);
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [session, setSession] = useState(null);


     // Check URL params on initial render
    const params = new URLSearchParams(window.location.search);
    const hasTokenHash = params.get("token_hash");

    const [verifying, setVerifying] = useState(!!hasTokenHash);
    const [authError, setAuthError] = useState(null);
    const [authSuccess, setAuthSuccess] = useState(false);

    useEffect(() => {
        // Check if we have token_hash in URL (magic link callback)
        const params = new URLSearchParams(window.location.search);
        const token_hash = params.get("token_hash");
        const type = params.get("type");

        if (token_hash) {
            // Verify the OTP token
            supabase.auth.verifyOtp({
                token_hash,
                type: type || "email",
            }).then(({ error }) => {
                if (error) {
                    setAuthError(error.message);
                } else {
                    setAuthSuccess(true);
                    // Clear URL params
                    window.history.replaceState({}, document.title, "/");
                }
                setVerifying(false);
            });
        }

        // Check for existing session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        // Listen for auth changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => subscription.unsubscribe();
    }, []);

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: window.location.origin,
            }
        });
        if (error) {
            alert(error.error_description || error.message);
        } else {
            alert("Check your email for the login link!");
        }
        setLoading(false);
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setSession(null);
    };





    // Show verification state
    if (verifying) {
        return (
            <div>
                <h1>Authentication</h1>
                <p>Confirming your magic link...</p>
                <p>Loading...</p>
            </div>
        );
    }

    // Show auth error
    if (authError) {
        return (
            <div>
                <h1>Authentication</h1>
                <p>✗ Authentication failed</p>
                <p>{authError}</p>
                <button
                    onClick={() => {
                        setAuthError(null);
                        window.history.replaceState({}, document.title, "/");
                    }}
                >
                    Return to login
                </button>
            </div>
        );
    }

    // Show auth success (briefly before session loads)
    if (authSuccess && !session) {
        return (
            <div>
                <h1>Authentication</h1>
                <p>✓ Authentication successful!</p>
                <p>Loading your account...</p>
            </div>
        );
    }

    // If user is logged in, show welcome screen
    if (session) {
      setLoggedIn(true);
        return (
            <div>
                <p>You are logged in as: {session.user.email}</p>
                <button onClick={handleLogout}>
                    Sign Out
                </button>
            </div>
        );
    }

    const signInWithEmailAndPassword = async () => {
        setLoading(true);
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) throw error;
        setLoading(false);
        console.log('data');
        return data; 
    };

    // Show login form
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
                <button disabled={loading} onClick={handleLogin}>
                    {loading ? <span>Loading</span> : <span>Send magic link</span>}
                </button>
                <p>Or enter password: </p>
                <input
                    type="text"
                    placeholder="password"
                    value={password}
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button disabled={loading} onClick={signInWithEmailAndPassword}>
                    {loading ? <span>Loading</span> : <span>Sign In</span>}
                </button>
            </form>
        </div>
    );
}
export default Login;