import { auth } from "../firebase";

function UserInfo() {
    return (
        <>
            <h1 className="userInfo">UserInfo</h1>
            <img src={auth.currentUser.photoURL} alt=""></img>
            <p className="displayName">{auth.currentUser.displayName}</p>
        </>
    );
}

export default UserInfo;
