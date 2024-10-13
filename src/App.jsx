// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [todayTracking, setTodayTracking] = useState(120);
//   const [yesterdayTracking, setYesterdayTracking] = useState(95);
//   const [totalTracking, setTotalTracking] = useState(10500);
//   const [randomIP, setRandomIP] = useState({});
  
//   useEffect(() => {
//     // Simulate fetching random IP details (could replace with real API)
//     const fetchRandomIP = () => {
//       setRandomIP({
//         ip: '192.168.1.1',
//         country: 'USA',
//         requestTime: new Date().toLocaleTimeString(),
//       });
//     };
//     fetchRandomIP();
//   }, []);

//   return (
//     <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
//       {/* Dashboard Heading */}
//       <h1 className="text-4xl font-extrabold text-gray-800 mb-12">Tracking Dashboard</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        
//         {/* Today Tracking */}
//         <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
//           <h2 className="text-lg font-medium uppercase tracking-wide">Today's Tracking</h2>
//           <p className="mt-4 text-5xl font-bold">{todayTracking}</p>
//         </div>

//         {/* Yesterday Tracking */}
//         <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
//           <h2 className="text-lg font-medium uppercase tracking-wide">Yesterday's Tracking</h2>
//           <p className="mt-4 text-5xl font-bold">{yesterdayTracking}</p>
//         </div>

//         {/* Total Tracking */}
//         <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
//           <h2 className="text-lg font-medium uppercase tracking-wide">Total Tracking</h2>
//           <p className="mt-4 text-5xl font-bold">{totalTracking}</p>
//         </div>

//         {/* Random IP Address */}
//         <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
//           <h2 className="text-lg font-medium uppercase tracking-wide">Random IP Address</h2>
//           <p className="mt-4 text-xl"><strong>IP:</strong> {randomIP.ip}</p>
//           <p className="text-xl"><strong>Country:</strong> {randomIP.country}</p>
//           <p className="text-xl"><strong>Request Time:</strong> {randomIP.requestTime}</p>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default App;






// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [todayTracking, setTodayTracking] = useState(0);
//   const [yesterdayTracking, setYesterdayTracking] = useState(0);
//   const [totalTracking, setTotalTracking] = useState(0);
//   const [randomIP, setRandomIP] = useState({});

//   useEffect(() => {
//     // Simulating an API call to fetch tracking data
//     const fetchTrackingData = () => {
//       setTodayTracking(120); // Example value
//       setYesterdayTracking(95); // Example value
//       setTotalTracking(8703); // Example value
//     };

//     // Simulating fetching random IP details
//     const fetchRandomIP = () => {
//       setRandomIP({
//         ip: '192.168.1.1',
//         country: 'USA',
//         requestTime: new Date().toLocaleTimeString(),
//       });
//     };

//     fetchTrackingData();
//     fetchRandomIP();
//   }, []);

//   return (
//     <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
//       <h1 className="text-4xl font-extrabold text-gray-800 mb-12">Tracking Dashboard</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
//         {/* Today Tracking */}
//         <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
//           <h2 className="text-lg font-medium uppercase tracking-wide">Today&apos;s Tracking</h2>
//           <p className="mt-4 text-5xl font-bold">{todayTracking}</p>
//         </div>

//         {/* Yesterday Tracking */}
//         <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
//           <h2 className="text-lg font-medium uppercase tracking-wide">Yesterday&apos;s Tracking</h2>
//           <p className="mt-4 text-5xl font-bold">{yesterdayTracking}</p>
//         </div>

//         {/* Total Tracking */}
//         <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
//           <h2 className="text-lg font-medium uppercase tracking-wide">Total Tracking</h2>
//           <p className="mt-4 text-5xl font-bold">{totalTracking}</p>
//         </div>

//         {/* Random IP Address */}
//         <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
//           <h2 className="text-lg font-medium uppercase tracking-wide">Random IP Address</h2>
//           <p className="mt-4 text-xl"><strong>IP:</strong> {randomIP.ip}</p>
//           <p className="text-xl"><strong>Country:</strong> {randomIP.country}</p>
//           <p className="text-xl"><strong>Request Time:</strong> {randomIP.requestTime}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [todayTracking, setTodayTracking] = useState(120);
//   const [yesterdayTracking, setYesterdayTracking] = useState(95);
//   const [totalTracking, setTotalTracking] = useState(10500);
//   const [randomIP, setRandomIP] = useState({ ip: '192.168.1.1', country: 'USA', requestTime: new Date().toLocaleTimeString() });

//   // Helper function to get a random IP address
//   const getRandomIP = () => {
//     return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
//   };

//   // Randomly increase today's tracking
//   useEffect(() => {
//     const increaseTracking = () => {
//       const randomIncrease = Math.floor(Math.random() * 10) + 1; // Random increment between 1 and 10
//       setTodayTracking(prev => prev + randomIncrease);
//       setTotalTracking(prev => prev + randomIncrease);
      
//       // Change IP address when tracking changes
//       setRandomIP({
//         ip: getRandomIP(),
//         country: 'USA', // You could replace this with a real lookup
//         requestTime: new Date().toLocaleTimeString(),
//       });
//     };

//     // Set a random interval for increasing today's tracking (between 1s to 5s)
//     const interval = setInterval(increaseTracking, Math.random() * (5000 - 1000) + 1000);

//     // Clear interval on component unmount
//     return () => clearInterval(interval);
//   }, []);

//   // Reset today's tracking at midnight and transfer the value to yesterdayTracking
//   useEffect(() => {
//     const checkMidnight = () => {
//       const now = new Date();
//       const midnight = new Date();
//       midnight.setHours(24, 0, 0, 0); // Set to midnight

//       const timeUntilMidnight = midnight.getTime() - now.getTime();

//       // Set timeout to reset tracking at midnight
//       const midnightTimeout = setTimeout(() => {
//         setYesterdayTracking(todayTracking);  // Transfer today's tracking to yesterday's
//         setTodayTracking(0);  // Reset today's tracking to 0
//       }, timeUntilMidnight);

//       // Clean up timeout on unmount
//       return () => clearTimeout(midnightTimeout);
//     };

//     checkMidnight(); // Check when the app starts

//     const intervalCheckMidnight = setInterval(checkMidnight, 1000 * 60); // Recheck every minute to ensure reset

//     return () => clearInterval(intervalCheckMidnight);
//   }, [todayTracking]);

//   return (
//     <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
//       <h1 className="text-4xl font-extrabold text-gray-800 mb-12">Tracking Dashboard</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
//         {/* Today Tracking */}
//         <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
//           <h2 className="text-lg font-medium uppercase tracking-wide">Today&apos;s Tracking</h2>
//           <p className="mt-4 text-5xl font-bold">{todayTracking}</p>
//         </div>

//         {/* Yesterday Tracking */}
//         <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
//           <h2 className="text-lg font-medium uppercase tracking-wide">Yesterday&apos;s Tracking</h2>
//           <p className="mt-4 text-5xl font-bold">{yesterdayTracking}</p>
//         </div>

//         {/* Total Tracking */}
//         <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
//           <h2 className="text-lg font-medium uppercase tracking-wide">Total Tracking</h2>
//           <p className="mt-4 text-5xl font-bold">{totalTracking}</p>
//         </div>

//         {/* Random IP Address */}
//         <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
//           <h2 className="text-lg font-medium uppercase tracking-wide">IP Address</h2>
//           <p className="mt-4 text-xl"><strong>IP:</strong> {randomIP.ip}</p>
//           <p className="text-xl"><strong>Country:</strong> {randomIP.country}</p>
//           <p className="text-xl"><strong>Request Time:</strong> {randomIP.requestTime}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const MAX_TRACKING_PER_DAY = 711;
//   const SECONDS_IN_A_DAY = 86400;
//   const AVERAGE_INCREMENT = MAX_TRACKING_PER_DAY / SECONDS_IN_A_DAY; // ~0.008 increments per second

//   const [todayTracking, setTodayTracking] = useState(120);
//   const [yesterdayTracking, setYesterdayTracking] = useState(95);
//   const [totalTracking, setTotalTracking] = useState(10500);
//   const [remainingDailyIncrease, setRemainingDailyIncrease] = useState(MAX_TRACKING_PER_DAY);
//   const [randomIP, setRandomIP] = useState({ ip: '192.168.1.1', country: 'USA', requestTime: new Date().toLocaleTimeString() });

//   // Helper function to get a random IP address
//   const getRandomIP = () => {
//     return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
//   };

//   // Function to increase tracking steadily and limit it to 711 per day
//   useEffect(() => {
//     const increaseTracking = () => {
//       // Calculate remaining increases for today
//       const increment = Math.min(AVERAGE_INCREMENT, remainingDailyIncrease); // Ensure we don't go over the max per day
//       if (remainingDailyIncrease > 0) {
//         setTodayTracking(prev => prev + increment);
//         setTotalTracking(prev => prev + increment);
//         setRemainingDailyIncrease(prev => prev - increment);

//         // Change IP address when tracking changes
//         setRandomIP({
//           ip: getRandomIP(),
//           country: 'USA', // You could replace this with a real lookup
//           requestTime: new Date().toLocaleTimeString(),
//         });
//       }
//     };

//     // Steady interval to distribute the increments over the entire day (24 hours)
//     const interval = setInterval(increaseTracking, 1000); // 1 second intervals for steady tracking increase

//     // Clear interval on component unmount
//     return () => clearInterval(interval);
//   }, [remainingDailyIncrease]);

//   // Reset today's tracking at midnight and transfer the value to yesterdayTracking
//   useEffect(() => {
//     const checkMidnight = () => {
//       const now = new Date();
//       const midnight = new Date();
//       midnight.setHours(24, 0, 0, 0); // Set to midnight

//       const timeUntilMidnight = midnight.getTime() - now.getTime();

//       // Set timeout to reset tracking at midnight
//       const midnightTimeout = setTimeout(() => {
//         setYesterdayTracking(todayTracking);  // Transfer today's tracking to yesterday's
//         setTodayTracking(0);  // Reset today's tracking to 0
//         setRemainingDailyIncrease(MAX_TRACKING_PER_DAY); // Reset the daily cap for tomorrow
//       }, timeUntilMidnight);

//       // Clean up timeout on unmount
//       return () => clearTimeout(midnightTimeout);
//     };

//     checkMidnight(); // Check when the app starts

//     const intervalCheckMidnight = setInterval(checkMidnight, 1000 * 60); // Recheck every minute to ensure reset

//     return () => clearInterval(intervalCheckMidnight);
//   }, [todayTracking]);

//   return (
//     <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
//       <h1 className="text-4xl font-extrabold text-gray-800 mb-12">Tracking Dashboard</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
//         {/* Today Tracking */}
//         <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
//           <h2 className="text-lg font-medium uppercase tracking-wide">Today&apos;s Tracking</h2>
//           <p className="mt-4 text-5xl font-bold">{Math.round(todayTracking)}</p>
//         </div>

//         {/* Yesterday Tracking */}
//         <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
//           <h2 className="text-lg font-medium uppercase tracking-wide">Yesterday&apos;s Tracking</h2>
//           <p className="mt-4 text-5xl font-bold">{yesterdayTracking}</p>
//         </div>

//         {/* Total Tracking */}
//         <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
//           <h2 className="text-lg font-medium uppercase tracking-wide">Total Tracking</h2>
//           <p className="mt-4 text-5xl font-bold">{Math.round(totalTracking)}</p>
//         </div>

//         {/* Random IP Address */}
//         <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
//           <h2 className="text-lg font-medium uppercase tracking-wide">IP Address</h2>
//           <p className="mt-4 text-xl"><strong>IP:</strong> {randomIP.ip}</p>
//           <p className="text-xl"><strong>Country:</strong> {randomIP.country}</p>
//           <p className="text-xl"><strong>Request Time:</strong> {randomIP.requestTime}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';

const App = () => {
  const MAX_TRACKING_PER_DAY = 711;
  const SECONDS_IN_A_DAY = 86400;
  const AVERAGE_INCREMENT = MAX_TRACKING_PER_DAY / SECONDS_IN_A_DAY; // ~0.008 increments per second

  const [todayTracking, setTodayTracking] = useState(120);
  const [yesterdayTracking, setYesterdayTracking] = useState(95);
  const [totalTracking, setTotalTracking] = useState(10500);
  const [remainingDailyIncrease, setRemainingDailyIncrease] = useState(MAX_TRACKING_PER_DAY);
  const [randomIP, setRandomIP] = useState({ ip: '192.168.1.1', country: 'USA', requestTime: new Date().toLocaleTimeString() });

  // List of sample countries
  const countries = ['USA', 'Canada', 'Germany', 'France', 'India', 'Nigeria', 'Brazil', 'Japan', 'Australia', 'South Africa'];

  // Helper function to get a random IP address
  const getRandomIP = () => {
    return `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
  };

  // Helper function to get a random country
  const getRandomCountry = () => {
    return countries[Math.floor(Math.random() * countries.length)];
  };

  // Function to increase tracking steadily and limit it to 711 per day
  useEffect(() => {
    const increaseTracking = () => {
      // Calculate remaining increases for today
      const increment = Math.min(AVERAGE_INCREMENT, remainingDailyIncrease); // Ensure we don't go over the max per day
      if (remainingDailyIncrease > 0) {
        setTodayTracking(prev => prev + increment);
        setTotalTracking(prev => prev + increment);
        setRemainingDailyIncrease(prev => prev - increment);

        // Change IP address and country when tracking changes
        setRandomIP({
          ip: getRandomIP(),
          country: getRandomCountry(), // Get random country
          requestTime: new Date().toLocaleTimeString(),
        });
      }
    };

    // Steady interval to distribute the increments over the entire day (24 hours)
    const interval = setInterval(increaseTracking, 1000); // 1 second intervals for steady tracking increase

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [remainingDailyIncrease]);

  // Reset today's tracking at midnight and transfer the value to yesterdayTracking
  useEffect(() => {
    const checkMidnight = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0); // Set to midnight

      const timeUntilMidnight = midnight.getTime() - now.getTime();

      // Set timeout to reset tracking at midnight
      const midnightTimeout = setTimeout(() => {
        setYesterdayTracking(todayTracking);  // Transfer today's tracking to yesterday's
        setTodayTracking(0);  // Reset today's tracking to 0
        setRemainingDailyIncrease(MAX_TRACKING_PER_DAY); // Reset the daily cap for tomorrow
      }, timeUntilMidnight);

      // Clean up timeout on unmount
      return () => clearTimeout(midnightTimeout);
    };

    checkMidnight(); // Check when the app starts

    const intervalCheckMidnight = setInterval(checkMidnight, 1000 * 60); // Recheck every minute to ensure reset

    return () => clearInterval(intervalCheckMidnight);
  }, [todayTracking]);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-12">Tracking Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {/* Today Tracking */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
          <h2 className="text-lg font-medium uppercase tracking-wide">Today&apos;s Tracking</h2>
          <p className="mt-4 text-5xl font-bold">{Math.round(todayTracking)}</p>
        </div>

        {/* Yesterday Tracking */}
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
          <h2 className="text-lg font-medium uppercase tracking-wide">Yesterday&apos;s Tracking</h2>
          <p className="mt-4 text-5xl font-bold">{yesterdayTracking}</p>
        </div>

        {/* Total Tracking */}
        <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
          <h2 className="text-lg font-medium uppercase tracking-wide">Total Tracking</h2>
          <p className="mt-4 text-5xl font-bold">{Math.round(totalTracking)}</p>
        </div>

        {/* Random IP Address */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
          <h2 className="text-lg font-medium uppercase tracking-wide">Tracker IP Address</h2>
          <p className="mt-4 text-xl"><strong>IP:</strong> {randomIP.ip}</p>
          <p className="text-xl"><strong>Country:</strong> {randomIP.country}</p>
          <p className="text-xl"><strong>Request Time:</strong> {randomIP.requestTime}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
