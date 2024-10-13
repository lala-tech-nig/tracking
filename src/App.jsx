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






import React, { useState, useEffect } from 'react';

const App = () => {
  const [todayTracking, setTodayTracking] = useState(0);
  const [yesterdayTracking, setYesterdayTracking] = useState(0);
  const [totalTracking, setTotalTracking] = useState(0);
  const [randomIP, setRandomIP] = useState({});

  useEffect(() => {
    // Simulating an API call to fetch tracking data
    const fetchTrackingData = () => {
      setTodayTracking(120); // Example value
      setYesterdayTracking(95); // Example value
      setTotalTracking(8703); // Example value
    };

    // Simulating fetching random IP details
    const fetchRandomIP = () => {
      setRandomIP({
        ip: '192.168.1.1',
        country: 'USA',
        requestTime: new Date().toLocaleTimeString(),
      });
    };

    fetchTrackingData();
    fetchRandomIP();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-12">Tracking Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {/* Today Tracking */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
          <h2 className="text-lg font-medium uppercase tracking-wide">Today&apos;s Tracking</h2>
          <p className="mt-4 text-5xl font-bold">{todayTracking}</p>
        </div>

        {/* Yesterday Tracking */}
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
          <h2 className="text-lg font-medium uppercase tracking-wide">Yesterday&apos;s Tracking</h2>
          <p className="mt-4 text-5xl font-bold">{yesterdayTracking}</p>
        </div>

        {/* Total Tracking */}
        <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
          <h2 className="text-lg font-medium uppercase tracking-wide">Total Tracking</h2>
          <p className="mt-4 text-5xl font-bold">{totalTracking}</p>
        </div>

        {/* Random IP Address */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
          <h2 className="text-lg font-medium uppercase tracking-wide">Random IP Address</h2>
          <p className="mt-4 text-xl"><strong>IP:</strong> {randomIP.ip}</p>
          <p className="text-xl"><strong>Country:</strong> {randomIP.country}</p>
          <p className="text-xl"><strong>Request Time:</strong> {randomIP.requestTime}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
