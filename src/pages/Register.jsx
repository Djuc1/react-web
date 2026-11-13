import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-blue-50 px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl shadow-indigo-900/10 md:grid md:grid-cols-2">
        <section className="relative flex flex-col justify-between overflow-hidden bg-indigo-700 p-8 text-white sm:p-10 lg:p-12">
          <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-indigo-500/40" />
          <div className="absolute -bottom-28 -left-16 h-64 w-64 rounded-full bg-indigo-800/50" />
          <div className="relative">
            <div className="mb-12 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl font-extrabold text-indigo-700 shadow-lg">
              RJ
            </div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
              React Jobs
            </p>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Your next opportunity starts here.
            </h1>
            <p className="mt-5 max-w-sm text-lg leading-8 text-indigo-100">
              Create an account to explore React roles and find the right fit for your skills.
            </p>
          </div>
          <p className="relative mt-12 text-sm text-indigo-200">
            Join a community built for React developers.
          </p>
        </section>

        <section className="p-8 sm:p-10 lg:p-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Create your account</h2>
            <p className="mt-2 text-gray-600">Get started with React Jobs.</p>
          </div>
          <div className="space-y-5">
            <div>
              <label htmlFor="username" className="mb-2 block text-sm font-semibold text-gray-700">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                placeholder="Choose a username"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-semibold text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="Create a password"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="mb-2 block text-sm font-semibold text-gray-700">
                Confirm password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                placeholder="Re-enter your password"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
              />
            </div>
            <button
              type="button"
              className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white shadow-md shadow-indigo-600/20 transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200"
            >
              Create account
            </button>
          </div>
          <p className="mt-7 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-700">
              Sign in
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
};


export default Register;
