import React, { useState, useEffect } from "react";
import LandingPage from "./pages/Landing_page";
import AchievementsPage from "./pages/Achievements_page";
import TeamPage from "./pages/Team_page";

function App() {
  const getPath = () =>
    (window.location.pathname + window.location.hash).toLowerCase();

  const [currentPath, setCurrentPath] = useState(getPath);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(getPath());
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  const isAchievements = currentPath.includes("achievements");
  const isTeams = currentPath.includes("teams");

  if (isAchievements) {
    return <AchievementsPage />;
  }

  if (isTeams) {
    return <TeamPage />;
  }

  return <LandingPage />;
}

export default App;