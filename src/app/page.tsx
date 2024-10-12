export default function Home() {
  return (
    <>
      {/* <Navigation /> */}
      <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 bg-gradient-to-t from-gray-700 via-rose-500 to-orange-400">
        <main className="flex flex-col gap-8 items-center bg-white p-8 rounded-xl w-full max-w-[700px] shadow-md">
          <h1 className="text-black text-center">
            👷‍♀️ This website is under construction 👷‍♀️
          </h1>

          <p className="text-wrap text-center">
            I am currently in the process of rebuilding my portfolio website
            with React & Tailwind! When I have finished my first version it will
            be released here.
          </p>
          <p className="text-wrap text-center">
            Many thanks,
            <br />
            Lucy ❤️
          </p>
        </main>
      </div>
    </>
  );
}
