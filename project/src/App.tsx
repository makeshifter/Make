import React, { useState } from 'react';
import { Search, TrendingUp, Award, Star, Clock, Percent, TrendingDown, BarChart as ChartBar } from 'lucide-react';

interface PlayerProp {
  player: string;
  team: string;
  propType: string;
  fanduelLine: number;
  lastGames: number[];
  averageLast5: number;
  hitRate: number;
  trend: 'up' | 'down' | 'stable';
  prediction: 'Over' | 'Under';
  confidence: number;
  lastGameDates: string[];
}

function App() {
  const [selectedTab, setSelectedTab] = useState<'trending' | 'all'>('trending');

  const sampleProps: PlayerProp[] = [
    // Lakers vs Kings (March 13, 2024)
    {
      player: "LeBron James",
      team: "LAL",
      propType: "Points + Rebounds + Assists",
      fanduelLine: 44.5,
      lastGames: [49, 43, 46, 42, 45], // Mar 11, Mar 9, Mar 7, Mar 5, Mar 3
      lastGameDates: ["Mar 11", "Mar 9", "Mar 7", "Mar 5", "Mar 3"],
      averageLast5: 45.0,
      hitRate: 0.80,
      trend: 'up',
      prediction: "Over",
      confidence: 82
    },
    {
      player: "De'Aaron Fox",
      team: "SAC",
      propType: "Points + Assists",
      fanduelLine: 34.5,
      lastGames: [38, 35, 37, 36, 39], // Mar 11, Mar 9, Mar 7, Mar 5, Mar 3
      lastGameDates: ["Mar 11", "Mar 9", "Mar 7", "Mar 5", "Mar 3"],
      averageLast5: 37.0,
      hitRate: 1.00,
      trend: 'up',
      prediction: "Over",
      confidence: 88
    },
    {
      player: "Anthony Davis",
      team: "LAL",
      propType: "Points + Rebounds",
      fanduelLine: 41.5,
      lastGames: [43, 40, 44, 39, 42], // Mar 11, Mar 9, Mar 7, Mar 5, Mar 3
      lastGameDates: ["Mar 11", "Mar 9", "Mar 7", "Mar 5", "Mar 3"],
      averageLast5: 41.6,
      hitRate: 0.60,
      trend: 'stable',
      prediction: "Over",
      confidence: 75
    },
    {
      player: "Domantas Sabonis",
      team: "SAC",
      propType: "Points + Rebounds + Assists",
      fanduelLine: 43.5,
      lastGames: [48, 45, 47, 46, 49], // Mar 11, Mar 9, Mar 7, Mar 5, Mar 3
      lastGameDates: ["Mar 11", "Mar 9", "Mar 7", "Mar 5", "Mar 3"],
      averageLast5: 47.0,
      hitRate: 1.00,
      trend: 'up',
      prediction: "Over",
      confidence: 90
    },

    // Suns vs Timberwolves (March 13, 2024)
    {
      player: "Kevin Durant",
      team: "PHX",
      propType: "Points",
      fanduelLine: 30.5,
      lastGames: [33, 31, 32, 34, 30], // Mar 11, Mar 9, Mar 7, Mar 5, Mar 3
      lastGameDates: ["Mar 11", "Mar 9", "Mar 7", "Mar 5", "Mar 3"],
      averageLast5: 32.0,
      hitRate: 0.80,
      trend: 'up',
      prediction: "Over",
      confidence: 85
    },
    {
      player: "Anthony Edwards",
      team: "MIN",
      propType: "Points + Rebounds",
      fanduelLine: 35.5,
      lastGames: [39, 36, 38, 37, 40], // Mar 11, Mar 9, Mar 7, Mar 5, Mar 3
      lastGameDates: ["Mar 11", "Mar 9", "Mar 7", "Mar 5", "Mar 3"],
      averageLast5: 38.0,
      hitRate: 1.00,
      trend: 'up',
      prediction: "Over",
      confidence: 87
    },
    {
      player: "Devin Booker",
      team: "PHX",
      propType: "Points + Assists",
      fanduelLine: 37.5,
      lastGames: [41, 38, 40, 39, 42], // Mar 11, Mar 9, Mar 7, Mar 5, Mar 3
      lastGameDates: ["Mar 11", "Mar 9", "Mar 7", "Mar 5", "Mar 3"],
      averageLast5: 40.0,
      hitRate: 1.00,
      trend: 'up',
      prediction: "Over",
      confidence: 86
    },
    {
      player: "Karl-Anthony Towns",
      team: "MIN",
      propType: "Points + Rebounds",
      fanduelLine: 34.5,
      lastGames: [32, 31, 33, 30, 29], // Mar 11, Mar 9, Mar 7, Mar 5, Mar 3
      lastGameDates: ["Mar 11", "Mar 9", "Mar 7", "Mar 5", "Mar 3"],
      averageLast5: 31.0,
      hitRate: 0.00,
      trend: 'down',
      prediction: "Under",
      confidence: 85
    },

    // Mavericks vs Warriors (March 13, 2024)
    {
      player: "Luka Dončić",
      team: "DAL",
      propType: "Points + Rebounds + Assists",
      fanduelLine: 53.5,
      lastGames: [58, 55, 57, 56, 59], // Mar 11, Mar 9, Mar 7, Mar 5, Mar 3
      lastGameDates: ["Mar 11", "Mar 9", "Mar 7", "Mar 5", "Mar 3"],
      averageLast5: 57.0,
      hitRate: 1.00,
      trend: 'up',
      prediction: "Over",
      confidence: 92
    },
    {
      player: "Stephen Curry",
      team: "GSW",
      propType: "Points",
      fanduelLine: 29.5,
      lastGames: [32, 30, 31, 33, 29], // Mar 11, Mar 9, Mar 7, Mar 5, Mar 3
      lastGameDates: ["Mar 11", "Mar 9", "Mar 7", "Mar 5", "Mar 3"],
      averageLast5: 31.0,
      hitRate: 0.80,
      trend: 'up',
      prediction: "Over",
      confidence: 84
    },
    {
      player: "Kyrie Irving",
      team: "DAL",
      propType: "Points + Assists",
      fanduelLine: 34.5,
      lastGames: [37, 35, 36, 38, 39], // Mar 11, Mar 9, Mar 7, Mar 5, Mar 3
      lastGameDates: ["Mar 11", "Mar 9", "Mar 7", "Mar 5", "Mar 3"],
      averageLast5: 37.0,
      hitRate: 1.00,
      trend: 'up',
      prediction: "Over",
      confidence: 85
    },
    {
      player: "Klay Thompson",
      team: "GSW",
      propType: "Points",
      fanduelLine: 21.5,
      lastGames: [19, 18, 20, 17, 16], // Mar 11, Mar 9, Mar 7, Mar 5, Mar 3
      lastGameDates: ["Mar 11", "Mar 9", "Mar 7", "Mar 5", "Mar 3"],
      averageLast5: 18.0,
      hitRate: 0.00,
      trend: 'down',
      prediction: "Under",
      confidence: 88
    },

    // Rockets vs Wizards (March 13, 2024)
    {
      player: "Jalen Green",
      team: "HOU",
      propType: "Points",
      fanduelLine: 23.5,
      lastGames: [26, 24, 25, 27, 28], // Mar 11, Mar 9, Mar 7, Mar 5, Mar 3
      lastGameDates: ["Mar 11", "Mar 9", "Mar 7", "Mar 5", "Mar 3"],
      averageLast5: 26.0,
      hitRate: 1.00,
      trend: 'up',
      prediction: "Over",
      confidence: 83
    },
    {
      player: "Kyle Kuzma",
      team: "WAS",
      propType: "Points + Rebounds",
      fanduelLine: 31.5,
      lastGames: [34, 32, 33, 35, 36], // Mar 11, Mar 9, Mar 7, Mar 5, Mar 3
      lastGameDates: ["Mar 11", "Mar 9", "Mar 7", "Mar 5", "Mar 3"],
      averageLast5: 34.0,
      hitRate: 1.00,
      trend: 'up',
      prediction: "Over",
      confidence: 82
    },
    {
      player: "Alperen Şengün",
      team: "HOU",
      propType: "Points + Rebounds + Assists",
      fanduelLine: 37.5,
      lastGames: [41, 38, 40, 39, 42], // Mar 11, Mar 9, Mar 7, Mar 5, Mar 3
      lastGameDates: ["Mar 11", "Mar 9", "Mar 7", "Mar 5", "Mar 3"],
      averageLast5: 40.0,
      hitRate: 1.00,
      trend: 'up',
      prediction: "Over",
      confidence: 85
    },
    {
      player: "Tyus Jones",
      team: "WAS",
      propType: "Points + Assists",
      fanduelLine: 22.5,
      lastGames: [20, 19, 18, 17, 16], // Mar 11, Mar 9, Mar 7, Mar 5, Mar 3
      lastGameDates: ["Mar 11", "Mar 9", "Mar 7", "Mar 5", "Mar 3"],
      averageLast5: 18.0,
      hitRate: 0.00,
      trend: 'down',
      prediction: "Under",
      confidence: 86
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-indigo-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8" />
              <h1 className="text-2xl font-bold">PropPredictor</h1>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search players..."
                className="pl-10 pr-4 py-2 rounded-lg bg-indigo-500 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-indigo-200" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setSelectedTab('trending')}
            className={`px-4 py-2 rounded-lg font-medium ${
              selectedTab === 'trending'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Trending Props</span>
            </div>
          </button>
          <button
            onClick={() => setSelectedTab('all')}
            className={`px-4 py-2 rounded-lg font-medium ${
              selectedTab === 'all'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5" />
              <span>All Props</span>
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProps.map((prop, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{prop.player}</h3>
                  <p className="text-sm text-gray-500">{prop.team}</p>
                </div>
                <div className={`px-3 py-1 rounded-full ${
                  prop.prediction === 'Over' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {prop.prediction}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{prop.propType}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">FanDuel</span>
                    <span className="font-medium">{prop.fanduelLine}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center text-gray-600">
                    <ChartBar className="h-4 w-4 mr-1" />
                    Last 5 Avg
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{prop.averageLast5}</span>
                    {prop.trend === 'up' && <TrendingUp className="h-4 w-4 text-green-500" />}
                    {prop.trend === 'down' && <TrendingDown className="h-4 w-4 text-red-500" />}
                    {prop.trend === 'stable' && <span className="h-4 w-4 text-yellow-500">−</span>}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center text-gray-600">
                    <Percent className="h-4 w-4 mr-1" />
                    Hit Rate
                  </span>
                  <span className="font-medium">{(prop.hitRate * 100).toFixed(0)}%</span>
                </div>
                
                <div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    Last 5 Games
                  </div>
                  <div className="flex space-x-2">
                    {prop.lastGames.map((game, i) => (
                      <div 
                        key={i} 
                        className={`flex flex-col items-center px-2 py-1 rounded text-sm ${
                          game > prop.fanduelLine 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        <span>{game}</span>
                        <span className="text-xs mt-1 opacity-75">{prop.lastGameDates[i]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-white border-t mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p className="text-sm">
            Disclaimer: This is for entertainment purposes only. Please bet responsibly.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;