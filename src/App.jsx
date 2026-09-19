import React, { useState, useEffect } from "react";
import LandingPage from "./pages/Landing_page";
import AchievementsPage from "./pages/Achievements_page";
import TeamPage from "./pages/Team_page";

function App() {
  const getPath = () => {
    return (window.location.pathname + window.location.hash).toLowerCase();
  };

  const [currentPath, setCurrentPath] = useState(getPath());

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

  if (currentPath.includes("achievements")) {
    return <AchievementsPage />;
  }

  if (currentPath.includes("teams")) {
    return <TeamPage />;
  }

  return <LandingPage />;
}

export default App;