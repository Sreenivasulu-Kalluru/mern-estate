import { Link } from 'react-router-dom';

export function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <footer className="p-4 bg-slate-200">
      <div className="flex flex-wrap justify-around gap-4 px-10">
        <Link to="/">
          <h2 className="flex flex-wrap text-sm font-bold sm:text-xl">
            <span className="text-slate-500">VSK</span>
            <span className="text-slate-700">Estate</span>
          </h2>
        </Link>

        <p>Copyright&copy; {currYear}. All rights reserved</p>
      </div>
    </footer>
  );
}
