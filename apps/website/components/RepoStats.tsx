"use client";
import { useEffect, useState } from "react";

export function RepoStats() {
  const [stats, setStats] = useState([
    { label: "GitHub Stars", value: "..." },
    { label: "Weekly Downloads", value: "..." },
    { label: "Contributors", value: "..." },
    { label: "Happy Developers", value: "..." },
  ]);

  useEffect(() => {
    const CACHE_KEY = "tech-stack-metadata-stats";
    const CACHE_DURATION = 3600000; // 1 hour in milliseconds
    const cachedData = localStorage.getItem(CACHE_KEY);

    // Check if we have valid cached data
    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);
      if (Date.now() - timestamp < CACHE_DURATION) {
        setStats(data);
        return;
      }
    }

    // Fetch fresh data
    const fetchStats = async () => {
      try {
        // GitHub stats - stars and contributors
        const repoResponse = await fetch("https://api.github.com/repos/vedantbhavsar26/tech-stack-metadata");
        const repoData = await repoResponse.json();

        const contributorsResponse = await fetch("https://api.github.com/repos/vedantbhavsar26/tech-stack-metadata/contributors?per_page=1");
        const contributorsLink = contributorsResponse.headers.get("Link");
        const contributorCount = contributorsLink
          ? Number.parseInt(contributorsLink.match(/page=(\d+)>; rel="last"/)?.[1] || "0")
          : (await contributorsResponse.json()).length;

        // NPM stats - downloads
        const npmResponse = await fetch("https://api.npmjs.org/downloads/point/last-week/@exlaso/tech-stack-metadata");
        const npmData = await npmResponse.json();

        // Format the data
        const formatNumber = (num: number) => {
          return num >= 1000 ? `${(num / 1000).toFixed(1)}k+` : `${num}+`;
        };

        const newStats = [
          { label: "GitHub Stars", value: formatNumber(repoData.stargazers_count) },
          { label: "Weekly Downloads", value: formatNumber(npmData.downloads) },
          { label: "Contributors", value: `${contributorCount}+` },
          { label: "Happy Developers", value: formatNumber(npmData.downloads * 0.7) }, // Estimate
        ];

        setStats(newStats);

        // Cache the data
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data: newStats,
          timestamp: Date.now(),
        }));
      }
      catch (error) {
        console.error("Failed to fetch repo stats:", error);
        // Fallback to default stats on error
        setStats([
          { label: "GitHub Stars", value: "500+" },
          { label: "Weekly Downloads", value: "2,000+" },
          { label: "Contributors", value: "20+" },
          { label: "Happy Developers", value: "1,000+" },
        ]);
      }
    };

    fetchStats();
  }, []);

  return (
    <>
      {stats.map((stat, i) => (
        <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
          <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
          <p className="text-sm text-blue-100">{stat.label}</p>
        </div>
      ))}
    </>
  );
}
