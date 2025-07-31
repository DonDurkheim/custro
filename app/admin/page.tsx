"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Users, Clock, CalendarDays } from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar
} from 'recharts';

const COLORS = ['#facc15', '#00C49F', '#0088FE', '#FFBB28', '#FF8042', '#A28DFF', '#FF6B6B'];

export default function AdminDashboard() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (isLoggedIn === 'true') {
      setLoggedIn(true);
      fetchLeads();
    } else {
      setLoggedIn(false);
    }
  }, []);

  const fetchLeads = async () => {
    try {
      const response = await axios.get('https://custro-backend.onrender.com/leads');
      setLeads(response.data);
      setLoading(false);
    } catch (err: any) {
      setError(err);
      setLoading(false);
      console.error('Error fetching leads:', err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    setLoggedIn(false);
    router.push('/admin'); // Redirect to login page
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', {
        username,
        password,
      });

      if (response.data.success) {
        localStorage.setItem('adminLoggedIn', 'true');
        setLoggedIn(true);
        fetchLeads(); // Fetch leads after successful login
      } else {
        alert('Invalid credentials');
      }
    } catch (err: any) {
      console.error('Login error:', err);
      alert('Login failed');
    }
  };

  // Prepare data for charts
  const getStartOfWeek = (date: Date) => {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust for Monday start
    return new Date(date.setDate(diff));
  };

  const now = new Date();
  const startOfWeek = getStartOfWeek(new Date(now.getFullYear(), now.getMonth(), now.getDate()));
  startOfWeek.setHours(0, 0, 0, 0);
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 7);
  endOfWeek.setHours(0, 0, 0, 0);

  const leadsThisWeek = leads.filter((lead: any) => {
    const leadDate = new Date(lead.createdAt);
    return leadDate >= startOfWeek && leadDate < endOfWeek;
  });

  // Leads by Time of Day (This Week)
  const leadsByHour = Array.from({ length: 24 }, (_, i) => ({ hour: `${i}:00`, leads: 0 }));
  leadsThisWeek.forEach((lead: any) => {
    const hour = new Date(lead.createdAt).getHours();
    leadsByHour[hour].leads += 1;
  });

  // Leads by Weekday (This Week)
  const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const leadsByWeekday = weekdays.map(day => ({ name: day, leads: 0 }));
  leadsThisWeek.forEach((lead: any) => {
    const day = new Date(lead.createdAt).getDay();
    const weekdayIndex = day === 0 ? 6 : day - 1; // Adjust for Monday start (0=Sun, 1=Mon, ..., 6=Sat)
    leadsByWeekday[weekdayIndex].leads += 1;
  });


  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background-start-rgb to-background-end-rgb flex flex-col items-center justify-center font-sora text-white">
        <div className="glass-card p-8 rounded-xl shadow-xl max-w-md w-full">
          <h1 className="text-center text-3xl font-bold mb-6 gradient-text">Admin Login</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 glass rounded-lg border border-white/10 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 bg-transparent text-white placeholder-gray-400"
                placeholder="Enter your username"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 glass rounded-lg border border-white/10 focus:border-primary-400 focus:ring-1 focus:ring-primary-400 bg-transparent text-white placeholder-gray-400"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary-400 to-primary-300 text-dark-900 py-3 rounded-lg font-bold text-lg flex items-center justify-center space-x-2 glow-effect hover:shadow-primary-400/50 transition-all duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background-start-rgb to-background-end-rgb flex items-center justify-center font-sora text-white">
        <p>Loading dashboard data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background-start-rgb to-background-end-rgb flex items-center justify-center font-sora text-white">
        <p>Error loading data: {error.message}</p>
        <button onClick={fetchLeads} className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Retry</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background-start-rgb to-background-end-rgb text-white font-sora">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="glass-button px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
            Logout
          </button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-6 flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-primary-400/20 to-blue-500/20 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-primary-400" />
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">{leads.length}</div>
              <div className="text-gray-400 text-sm">Total Leads</div>
            </div>
          </div>
          {/* Add more key metrics here if needed */}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold mb-4 gradient-text flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>Leads by Time of Day (This Week)</span>
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={leadsByHour} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="hour" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(250, 204, 21, 0.3)', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend />
                <Line type="monotone" dataKey="leads" stroke="#facc15" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-card p-6">
            <h2 className="text-xl font-bold mb-4 gradient-text flex items-center space-x-2">
              <CalendarDays className="w-5 h-5" />
              <span>Leads by Weekday (This Week)</span>
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={leadsByWeekday} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(250, 204, 21, 0.3)', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend />
                <Bar dataKey="leads" fill="#00C49F" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Leads Table */}
        <div className="glass-card p-6 mt-8">
          <h2 className="text-xl font-bold mb-4 gradient-text flex items-center space-x-2">
            <Users className="w-5 h-5" />
            <span>All Leads</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-transparent border-collapse">
              <thead>
                <tr className="bg-white/10">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-300">Name</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-300">Email</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-300">Company</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-300">Phone</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-300">Product</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-300">Submitted At</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead: any, index: number) => (
                  <tr key={index} className="border-t border-white/10 hover:bg-white/5">
                    <td className="py-3 px-4 text-sm text-gray-300">{lead.name}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{lead.email}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{lead.company}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{lead.phone}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{lead.product}</td>
                    <td className="py-3 px-4 text-sm text-gray-300">{new Date(lead.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
