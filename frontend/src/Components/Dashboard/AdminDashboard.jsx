import React, { useEffect, useState } from "react";
import axios from "axios";
// import Chart from "chart.js/auto";


const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const [users, setUsers] = useState([]);
  const [analytics, setAnalytics] = useState({});

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/events`
        );
        setEvents(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/users`
        );
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchAnalytics = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/analytics`
        );
        setAnalytics(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();
    fetchUsers();
    fetchAnalytics();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Manage Events</h3>
        <ul>
          {events.map((event) => (
            <li key={event._id} className="mb-2">
              {event.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">Manage Users</h3>
        <ul>
          {users.map((user) => (
            <li key={user._id} className="mb-2">
              {user.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Analytics</h3>
        <div>
          {/* Example chart using Chart.js */}
          <canvas id="myChart"></canvas>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
