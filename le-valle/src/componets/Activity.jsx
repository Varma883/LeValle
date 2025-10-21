import React from 'react';

const Activity = () => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Recent Activity Card */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Recent Activity</h2>
        <div className="space-y-3">
          {/* Activity Item 1 */}
          <div className="flex items-center p-3 bg-green-50 rounded-lg">
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-green-500 rounded-full text-white mr-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <div>
              <p className="text-gray-800 font-medium">Michael Johnson</p>
              <p className="text-gray-600 text-sm">Parked BMW X5 in P3-A12</p>
            </div>
            <p className="ml-auto text-gray-500 text-sm">2 min ago</p>
          </div>

          {/* Activity Item 2 */}
          <div className="flex items-center p-3 bg-blue-50 rounded-lg">
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full text-white mr-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div>
              <p className="text-gray-800 font-medium">Sarah Rodriguez</p>
              <p className="text-gray-600 text-sm">Started break at 2:30 PM</p>
            </div>
            <p className="ml-auto text-gray-500 text-sm">15 min ago</p>
          </div>

          {/* Activity Item 3 - System Alert */}
          <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-yellow-500 rounded-full text-white mr-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            </div>
            <div>
              <p className="text-gray-800 font-medium">System Alert</p>
              <p className="text-gray-600 text-sm">Alex Wilson performance below threshold</p>
            </div>
            <p className="ml-auto text-gray-500 text-sm">1 hour ago</p>
          </div>
        </div>
      </div>

      {/* Quick Actions Card */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Quick Actions</h2>
        <div className="space-y-3">
          {/* Action Item 1 */}
          <div className="p-3 bg-blue-50 rounded-lg hover:bg-blue-100 cursor-pointer">
            <p className="text-blue-700 font-medium">Generate Performance Report</p>
            <p className="text-blue-500 text-sm">Export detailed analytics for all valets</p>
          </div>

          {/* Action Item 2 */}
          <div className="p-3 bg-green-50 rounded-lg hover:bg-green-100 cursor-pointer">
            <p className="text-green-700 font-medium">Schedule Training Session</p>
            <p className="text-green-500 text-sm">Organize training for underperforming valets</p>
          </div>

          {/* Action Item 3 */}
          <div className="p-3 bg-purple-50 rounded-lg hover:bg-purple-100 cursor-pointer">
            <p className="text-purple-700 font-medium">View Parking Analytics</p>
            <p className="text-purple-500 text-sm">Check parking lot utilization and trends</p>
          </div>

          {/* Action Item 4 */}
          <div className="p-3 bg-orange-50 rounded-lg hover:bg-orange-100 cursor-pointer">
            <p className="text-orange-700 font-medium">Manage Shifts & Schedules</p>
            <p className="text-orange-500 text-sm">Update valet work schedules and assignments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;