import { useState } from "react";
import { Bell, LogOut, LayoutDashboard, PlusCircle, Ticket, Calendar, Clock, AlertCircle, CheckCircle, XCircle, FileText } from 'lucide-react';
export const Home = ({ activeBar, activeModal }) => {
  const [formData, setFormData] = useState({
    ticketNo: 'TK-2025-001',
    date: new Date().toLocaleDateString(),
    name: '',
    department: '',
    subject: '',
    category: '',
    type: '',
    priority: 'Medium',
    description: ''
  });

  const tickets = [
    { id: 'TK-2025-001', subject: 'Login Issues', status: 'Open', priority: 'High', date: '2025-07-01', department: 'HR' },
    { id: 'TK-2025-002', subject: 'Email Configuration', status: 'In Progress', priority: 'Medium', date: '2025-06-30', department: 'IT' },
    { id: 'TK-2025-003', subject: 'Software Installation', status: 'Resolved', priority: 'Low', date: '2025-06-29', department: 'Finance' },
    { id: 'TK-2025-004', subject: 'Network Connectivity', status: 'Pending', priority: 'High', date: '2025-06-28', department: 'Operations' },
    { id: 'TK-2025-005', subject: 'Printer Issues', status: 'Resolved', priority: 'Medium', date: '2025-06-27', department: 'Admin' }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Open': return <AlertCircle className="w-4 h-4 text-blue-500" />;
      case 'In Progress': return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'Resolved': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'Pending': return <XCircle className="w-4 h-4 text-red-500" />;
      default: return <FileText className="w-4 h-4 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'text-red-600 bg-red-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  if (!activeModal) return null;

  return (
    <div
      className={`relative mt-16 mb-12 transition-all duration-300 bg-gray-50 min-h-screen ${
        activeBar ? "ml-0 md:ml-64" : "ml-0"
      }`}
    >
      <div className="p-6">
        {activeModal === "dashboard" && (
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">Dashboard</h2>
              <p className="text-gray-600">Welcome back! Here's your ticket overview.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-between mb-4">
                  <Ticket className="w-8 h-8" />
                  <span className="text-2xl font-bold">24</span>
                </div>
                <h3 className="text-lg font-semibold">Total Tickets</h3>
                <p className="text-blue-100 text-sm">+3 from last week</p>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-between mb-4">
                  <CheckCircle className="w-8 h-8" />
                  <span className="text-2xl font-bold">18</span>
                </div>
                <h3 className="text-lg font-semibold">Resolved</h3>
                <p className="text-green-100 text-sm">75% completion rate</p>
              </div>

              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-6 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-between mb-4">
                  <Clock className="w-8 h-8" />
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold">In Progress</h3>
                <p className="text-yellow-100 text-sm">Avg. 2.5 days</p>
              </div>

              <div className="bg-gradient-to-br from-red-500 to-red-600 p-6 rounded-xl shadow-lg text-white transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-between mb-4">
                  <AlertCircle className="w-8 h-8" />
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold">Pending</h3>
                <p className="text-red-100 text-sm">Requires attention</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {tickets.slice(0, 3).map((ticket) => (
                  <div key={ticket.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(ticket.status)}
                      <div>
                        <p className="font-medium text-gray-800">{ticket.subject}</p>
                        <p className="text-sm text-gray-600">{ticket.id} • {ticket.department}</p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                      {ticket.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeModal === "newticket" && (
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">Create New Ticket</h2>
              <p className="text-gray-600">Fill out the form below to submit a new support request.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ticket Number
                    </label>
                    <input
                      type="text"
                      name="ticketNo"
                      value={formData.ticketNo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#55D6C2] focus:border-transparent bg-gray-50"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date
                    </label>
                    <input
                      type="text"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#55D6C2] focus:border-transparent bg-gray-50"
                      readOnly
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#55D6C2] focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#55D6C2] focus:border-transparent"
                      required
                    >
                      <option value="">Select Department</option>
                      <option value="IT">Information Technology</option>
                      <option value="HR">Human Resources</option>
                      <option value="Finance">Finance</option>
                      <option value="Operations">Operations</option>
                      <option value="Admin">Administration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#55D6C2] focus:border-transparent"
                    placeholder="Brief description of the issue"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#55D6C2] focus:border-transparent"
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="Hardware">Hardware</option>
                      <option value="Software">Software</option>
                      <option value="Network">Network</option>
                      <option value="Account">Account Access</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#55D6C2] focus:border-transparent"
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="Bug Report">Bug Report</option>
                      <option value="Feature Request">Feature Request</option>
                      <option value="Support">Technical Support</option>
                      <option value="Question">General Question</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Priority
                    </label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#55D6C2] focus:border-transparent"
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                      <option value="Critical">Critical</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#55D6C2] focus:border-transparent resize-none"
                    placeholder="Provide detailed information about your issue..."
                    required
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-[#55D6C2] to-[#4AC5B2] text-white rounded-lg hover:from-[#4AC5B2] to-[#3BB5A1] transition-all shadow-lg font-medium"
                  >
                    Submit Ticket
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {activeModal === "myticket" && (
          <div>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gray-800 mb-2">My Tickets</h2>
              <p className="text-gray-600">Track and manage all your support requests.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                  <div className="flex items-center space-x-4">
                    <input
                      type="text"
                      placeholder="Search tickets..."
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#55D6C2] focus:border-transparent"
                    />
                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#55D6C2] focus:border-transparent">
                      <option value="">All Status</option>
                      <option value="Open">Open</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                      <option value="Pending">Pending</option>
                    </select>
                  </div>
                  <span className="text-sm text-gray-600">{tickets.length} tickets found</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ticket ID</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {tickets.map((ticket) => (
                      <tr key={ticket.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm font-medium text-gray-900">{ticket.id}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-900">{ticket.subject}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(ticket.status)}
                            <span className="text-sm text-gray-900">{ticket.status}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                            {ticket.priority}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-900">{ticket.department}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="text-sm text-gray-500">{ticket.date}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button className="text-[#55D6C2] hover:text-[#4AC5B2] text-sm font-medium">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
