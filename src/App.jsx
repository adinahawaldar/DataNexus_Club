import React, { useState, useEffect } from "react";

import LandingPage from "./pages/Landing_page";
import AchievementsPage from "./pages/Achievements_page";
import TeamPage from "./pages/Team_page";
import Events from "./pages/Events_page";

import { ThemeProvider } from "./context/ThemeContext";

function getRoute() {
  const pathname = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  if (pathname.startsWith("/achievements") || (pathname === "/" && hash.includes("achievements"))) {
    return "achievements";
  }
  if (pathname.startsWith("/teams") || (pathname === "/" && hash.includes("teams"))) {
    return "teams";
  }
  if (pathname.startsWith("/events") || (pathname === "/" && hash.includes("events"))) {
    return "events";
  }

  return "home";
}

function App() {
  const [currentRoute, setCurrentRoute] = useState(getRoute);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentRoute(getRoute());
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  useEffect(() => {
    if (currentRoute === "home" && window.location.hash.toLowerCase() === "#about") {
      setTimeout(() => {
        const el = document.getElementById("about");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }, [currentRoute]);

  const renderContent = () => {
    switch (currentRoute) {
      case "achievements":
        return <AchievementsPage />;
      case "teams":
        return <TeamPage />;
      case "events":
        return <Events />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <ThemeProvider>
      {renderContent()}
    </ThemeProvider>
  );
}

export default App;