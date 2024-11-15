const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Login With</h2>
            <div className="space-y-3">
                <button className="btn btn-outline border-2 border-blue-600 text-blue-600">Login with Google</button>
                <button className="btn btn-outline border-2 border-stone-700 text-stone-700">Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;