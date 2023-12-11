import React from "react";
import GitHubCalendar from "react-github-calendar";

function GitHubSection() {
  return (
    <div>
      <h2 className="text-center font-semibold text-4xl py-8">GitHub Stats</h2>
      <div>
        <div className="flex justify-center items-center">
          <div className="w-1/2 p-6" id="github-streak-stats">
            <a href="https://git.io/streak-stats">
              <img
                src="https://github-readme-streak-stats.herokuapp.com?user=noobnarayan"
                alt="GitHub Streak"
              />
            </a>
          </div>
          <div className="w-1/2   p-6">
            <GitHubCalendar
              username="noobnarayan"
              blockSize={15}
              blockMargin={5}
              theme={{
                light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"],
                dark: [
                  "hsl(0, 0%, 22%)",
                  "#4D455D",
                  "#7DB9B6",
                  "#F5E9CF",
                  "#E96479",
                ],
              }}
              transformData={(data) => {
                const sixMonthsAgo = new Date();
                sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5);
                return data.filter((day) => new Date(day.date) >= sixMonthsAgo);
              }}
            />
          </div>
        </div>
        <div className=" justify-center items-center hidden">
          <div className="w-1/2">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=noobnarayan&layout=compact&theme=dark"
              id="github-top-langs"
            />
          </div>
          <div className="w-1/2">
            <img
              src="https://github-readme-stats.vercel.app/api?username=noobnarayan&show_icons=true&theme=transparent"
              id="github-stats-card"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GitHubSection;
