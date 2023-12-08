function Portfolio() {
  return (
    <div className="h-[645px] " id="portfolio">
      <h2 className="text-center py-11 text-2xl">Projects</h2>
      <div className="flex h-[400px] justify-center gap-10 items-center">
        <Project />
        <Project />
      </div>
    </div>
  );
}
function Project() {
  return <div className="w-[500px] h-[300px] bg-portfolio "></div>;
}
export default Portfolio;
