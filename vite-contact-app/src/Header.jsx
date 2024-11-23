export default function Header() {
  return (
    <section className="flex py-2 justify-center w-full h-20 shadow-md">
      <div className="flex justify-between max-w-[980px] w-[980px] items-center h-full">
        <p className="text-2xl font-bold text-pink-500">Contact App</p>
        <button className="px-3 py-2 rounded-lg bg-pink-500 text-white text-semibold">
          Login / Register
        </button>
      </div>
    </section>
  );
}
