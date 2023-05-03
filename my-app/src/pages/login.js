import Head from "next/head";

export default function Login() {
  return (
    <div className>
      <Head>
        <title>Login Page</title>
        <link rel="icon" href="/galager.ico" />
      </Head>
      <div className="bg-slate-800 flex items-center justify-center h-screen">
        <form className="">
          <div className="mb-4">
            <label className="text-white text-2xl">Email:</label>
            <input className="w-full px-4 py-2 border rounded-lg text-green-500" type="email" required />
          </div>
          <div className="mb-8">
            <label className="text-white text-2xl">Password:</label>
            <input className="w-full px-4 py-2 border rounded-lg text-green-500" type="password" required />
          </div>
          <button className="text-2xl w-full px-4 py-2 text-black bg-blue-500 rounded hover:bg-sky-700" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
