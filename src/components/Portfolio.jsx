function Portfolio() {
  return (
    <div className="h-[645px] bg-slate-400 ">
      <h2 className="text-center py-10 text-2xl">Projects</h2>
      <div className="flex h-[400px] bg-slate-300 justify-center gap-10 items-center">
        <Project />
        <Project />
      </div>
    </div>
  );
}
function Project() {
  return <div className="w-[400px] h-[300px] bg-white"></div>;
}
export default Portfolio;
