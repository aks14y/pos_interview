export default function Header({selectedCandiadateData}) {
  return (
    <div className="px-12 py-6  bg-white text-slate-500">
      <button className="">← &emsp; Back to My Jobs</button>
      <div className="py-4 flex flex-row items-baseline justify-between bg-white">
        <h1 className="text-4xl font-bold">Post_UXdesigner_sr001</h1>
        <h4>{selectedCandiadateData.length} Candidates</h4>
      </div>
    </div>
  );
}
