import React from "react";

const Hexmap = ({ candidatesList, candidateData, selectedCandiadateData }) => {
  console.log("seleced,", selectedCandiadateData);
  return (
    <div className="overflow-x-auto p-4 flex flex-row">
      <div className="flex flex-col">
        {selectedCandiadateData[0].skills.map((skill, idx) => (
          <React.Fragment key={skill.id}>
            {/* Skill Name */}
            <div className="pr-2 font-medium text-gray-700 ">
              {skill.skill_name}
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="grid grid-cols-[20px_repeat(10,1fr)] gap-4">
        
        {selectedCandiadateData.map((person) => (
          <div className="gap-1" key={person.id}>
            {person.skills.map((skill, idx) => (
              <React.Fragment key={skill.id}>
                <div
                  key={idx}
                  className={`gap-2 h-6 w-6 flex items-center justify-center border-solid border-indigo-500 ${
                    true ? `bg-level-${skill.consensus_score}` : "bg-gray-100"
                  }`}
                >
                  {skill.consensus_score}
                </div>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hexmap;
