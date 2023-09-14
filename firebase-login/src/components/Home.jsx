import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import UserInfo from "./UserInfo";
import { useAuthState } from 'react-firebase-hooks/auth';

function Home() {
    const [user] = useAuthState(auth); // uesr にユーザ-の状態を保管
    // userinfo の出力もしくは、ログインボタンの出力を行う
    return (
        <div>
            {user ? (
                <>
                    <UserInfo />
                    <SignOutButton />
                </>
            ) : (
                <SiginInButton />
            )}
        </div>
    );
}

const SiginInButton = () => {
    const SiginInWithGoogle = () => {
        // firebase で google login
        signInWithPopup(auth, provider);
    };
    return (
        <>
            <p>ログアウト状態</p>
            <button onClick={SiginInWithGoogle}>Gooleでログイン</button>
        </>
    );
};

const SignOutButton = () => {
    return (
        <>
            <p>ログイン状態</p>
            <button
                onClick={() => {
                    auth.signOut();
                }}
            >
                ログアウト
            </button>
        </>
    );
};

export default Home;
