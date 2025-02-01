"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HexMap from "./components/HexMap";

export default function Home() {
  const [candidateData, setCandidateData] = useState<any>([]);
  const [selectedCandidates, setSelectedCandidates] = useState<any>([]);
  const [selectedCandiadateData, setSelectedCandiadateData] = useState<any>([]);

  useEffect(() => {
    const fetchCandidatesData = async () => {
      try {
        const response = await fetch(
          "https://forinterview.onrender.com/people"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCandidateData(data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchCandidatesData();
  }, []);

  const handleCandidateClick = (newCandidate) => {
    setSelectedCandidates((prev) => [...prev, newCandidate]);
    getCandidateData(newCandidate);
  };

  const getCandidateData = async (newCandidate) => {
    try {
      const response = await fetch(
        `https://forinterview.onrender.com/people/${newCandidate}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      const extarctedData = extractSkillsByPerson(data);
      setSelectedCandiadateData((prev) => [...prev, extarctedData]);
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  const extractSkillsByPerson = (data) => {
    if (!data?.data?.data?.skillset) return null; // Safety check

    const personId = data.id; // Extract person's ID
    const skills = [];

    data.data.data.skillset.forEach((category) => {
      category.skills.forEach((skill) => {
        skill.pos.forEach((position) => {
          skills.push({
            skill_name: skill.name,
            consensus_score: position.consensus_score,
          });
        });
      });
    });

    return { person_id: personId, skills };
  };

  return (
    <div className=" mx-auto px-2 min-h-screen">
      <Header selectedCandiadateData={selectedCandiadateData} />
      <div className="flex flex-row">
        {candidateData.length > 0 ? (
          <Sidebar
            candidateData={candidateData}
            onCandidateClick={handleCandidateClick}
          />
        ) : (
          "Loading ..."
        )}
        {selectedCandiadateData.length > 0 && (
          <HexMap
            candidatesList={selectedCandidates}
            candidateData={candidateData}
            selectedCandiadateData={selectedCandiadateData}
          />
        )}
      </div>
    </div>
  );
}
