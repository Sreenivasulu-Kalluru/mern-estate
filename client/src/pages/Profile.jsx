import { useSelector } from 'react-redux';

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="max-w-lg p-3 mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.avatar}
          alt="avatar"
          className="self-center object-cover w-24 h-24 rounded-full shadow-lg cursor-pointer"
        />
        <input
          type="text"
          placeholder="Username"
          className="p-3 border rounded-lg focus:outline-none"
          id="username"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 border rounded-lg focus:outline-none"
          id="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 border rounded-lg focus:outline-none"
          id="password"
        />
        <button className="p-3 text-white uppercase transition rounded-lg bg-slate-700 hover:bg-opacity-95">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-500 transition cursor-pointer hover:text-red-600">
          Delete Account
        </span>
        <span className="text-red-500 transition cursor-pointer hover:text-red-600">
          Sign Out
        </span>
      </div>
    </div>
  );
}
