🏏 CricScore - Virtual Cricket Scorecard

CricScore is a fully functional, browser-based cricket scoring prototype designed to track matches ball-by-ball. It provides a seamless interface for managing teams, tracking live scores, calculating run rates, and generating detailed innings summaries without the need for a backend server.

🚀 Live Demo

The application is deployed and ready to use. Click the link below to start scoring:

👉 crickscoremmcoe.netlify.app

✨ Features

📋 Match Setup & Management

Custom Configuration: Set custom team names and match duration (number of overs).

Squad Entry: Input names for playing 11s and determine the toss winner/batting team.

🏏 Live Scoring Interface

Ball-by-Ball Tracking: Buttons for 0-7 runs, Wickets, and Extras (Wide, No Ball).

Smart Logic:

Automatic Strike Rotation on odd runs and over completion.

Wicket Handling: Prompts to select the next incoming batsman.

Bowler Rotation: Prompts to change bowlers after an over ends.

Undo Capability: "Undo" button to revert the last ball in case of scoring errors.

📊 Real-Time Statistics

Dynamic Scoreboard: Updates runs, wickets, and overs instantly.

Run Rates:

CRR (Current Run Rate) displayed throughout the match.

RRR (Required Run Rate) calculated automatically during the 2nd innings chase.

Projected Score: Estimates the final total based on the current run rate (1st Innings).

🏆 Comprehensive Summaries

Innings Summary: Detailed batting and bowling scorecards generated after the 1st innings.

Match Summary: A final report comparing both innings side-by-side with a clear Winner Banner (e.g., "Team A won by 4 wickets").

💾 Data Persistence

Uses Local Storage to save match progress. You can refresh the page or close the browser without losing the current score.

🛠️ Tech Stack

Technology

Usage

HTML5

Semantic structure and layout of the application.

CSS3

Custom styling, gradients, flexbox layouts, and responsive design.

JavaScript (ES6+)

Core game logic, DOM manipulation, state management, and calculations.

📂 Project Structure

/
├── index.html            # Landing page (Match Setup: Team names & Overs)
├── page2.html            # Squad Entry (Player names & Toss)
├── score.html            # 1st Innings Scoreboard Interface
├── score2.html           # 2nd Innings Scoreboard (Chase Logic)
├── innings_summary.html  # Mid-match summary report
├── match_summary.html    # Final match result & combined scorecards
├── style.css             # Global stylesheet for all pages
└── script.js             # Main application logic & state handling


📸 Screenshots

<!-- Upload screenshots to your repo's 'assets' folder and update the links below -->

<div align="center">
<img src="path/to/setup-screenshot.png" alt="Match Setup" width="300" />
<img src="path/to/scoreboard-screenshot.png" alt="Live Scoreboard" width="300" />
<img src="path/to/summary-screenshot.png" alt="Match Summary" width="300" />
</div>

⚡ Logic Overview

State Management

The app relies heavily on localStorage to maintain the "Match State" across different pages. Key data structures include:

teamScore: Tracks total runs, wickets, balls bowled, and completed overs.

matchStats: Objects storing individual player stats (runs, balls faced, wickets, economy).

matchState: Tracks the current Striker, Non-Striker, and Bowler to handle rotation logic.

Chase Calculation (2nd Innings)

When the 1st innings ends, the data is archived. The score2.html page initializes with the target score. The logic adapts to display Target instead of Projected Score and calculates the Runs Needed and Balls Remaining for the RRR display.

🤝 Contributing

Contributions are welcome! If you have ideas for improvements (e.g., wagon wheels, commentary logs), feel free to fork the repo.

Fork the project.

Create your Feature Branch (git checkout -b feature/AmazingFeature).

Commit your changes (git commit -m 'Add some AmazingFeature').

Push to the branch (git push origin feature/AmazingFeature).

Open a Pull Request.

📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

<p align="center">
Created with ❤️ for Cricket Fans
</p>
