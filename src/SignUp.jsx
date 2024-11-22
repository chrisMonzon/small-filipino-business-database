function SignUp() {
    return (
        <div>
            <h1> Sign Up </h1>

            <div>
                <label>
                Username:
                <input type="username" placeholder="Username"/>
                </label>
            </div>
            <input type="password" placeholder="Password"/>
            <input type="confirmation" placeholder="Confirm Password"/>
            <input type="email" placeholder="Email"/>
        </div>
    );
}

export default SignUp;