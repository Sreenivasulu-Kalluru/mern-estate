import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="max-w-lg p-3 mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Sign Up</h1>
      <form className="flex flex-col gap-4 p-4 rounded-md shadow-xl">
        <input
          type="text"
          placeholder="Username"
          className="p-3 transition border rounded-lg focus:outline-none"
          id="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 transition border rounded-lg focus:outline-none"
          id="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 transition border rounded-lg focus:outline-none"
          id="password"
        />
        <button className="p-3 text-white uppercase transition rounded-lg bg-slate-700 hover:bg-opacity-95 disabled:opacity-80">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account? </p>
        <Link to="/sign-in">
          <span className="text-blue-700 hover:underline">Sign In</span>
        </Link>
      </div>
    </div>
  );
}
