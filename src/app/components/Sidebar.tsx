export default function Sidebar({candidateData, onCandidateClick}) {

  return (
    <div className="w-80 bg-white border-r border-gray-200 border-2">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b-2  p-3">
        Most Recommended
      </h2>
      <div className="p-3 text-custom-yellow border-b-2">
        <ul className="space-y-2 ">
          {...candidateData.slice(0,3).map((candidate, index) => (
            <li key={index} onClick={() => onCandidateClick(candidate.id)}  className="text-gray-700 border-b-2 pb-1">
              {candidate.name}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-gray-500">
          Recommendations are based on your skill requirements and candidate's
          performance.
        </p>
      </div>
      <div className="mt-14 p-3 border-solid border-t-2">
        <ul className="space-y-2 ">
          {...candidateData.slice(3).map((candidate, index) => (
            <li key={index} onClick={() => onCandidateClick(candidate.id)} className="text-gray-700 border-b-2 pb-1">
              {candidate.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
