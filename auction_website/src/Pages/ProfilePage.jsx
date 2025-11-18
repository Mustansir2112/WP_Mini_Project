import React, { useState, useEffect } from 'react';
import { User, Mail, Trophy, TrendingUp, Award, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [myBids, setMyBids] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      navigate('/login');
      return;
    }

    fetchUserData(token);
    fetchMyBids(token);
  }, [navigate]);

  const fetchUserData = async (token) => {
    try {
      const response = await fetch('http://localhost:3000/api/user/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        console.error('Failed to fetch user data');
        localStorage.removeItem('token');
        navigate('/login');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMyBids = async (token) => {
    try {
      const response = await fetch('http://localhost:3000/api/user/bids', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setMyBids(data.bids || []);
      }
    } catch (error) {
      console.error('Error fetching bids:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-brand-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Unable to load profile data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="bg-brand-100 w-24 h-24 rounded-full flex items-center justify-center">
              <User className="text-brand-600" size={48} />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {userData.name}
              </h1>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 mb-4">
                <Mail size={18} />
                <span>{userData.email}</span>
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="bg-brand-50 px-4 py-2 rounded-lg">
                  <p className="text-sm text-gray-600">Member Since</p>
                  <p className="font-semibold text-gray-800">
                    {new Date(userData.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-1">Total Bids</p>
                <p className="text-3xl font-bold text-gray-800">
                  {userData.totalBids || 0}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <TrendingUp className="text-blue-600" size={32} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-1">Won Auctions</p>
                <p className="text-3xl font-bold text-gray-800">
                  {userData.wonAuctions || 0}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Trophy className="text-green-600" size={32} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-1">Active Bids</p>
                <p className="text-3xl font-bold text-gray-800">
                  {userData.activeBids || 0}
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Award className="text-purple-600" size={32} />
              </div>
            </div>
          </div>
        </div>

        {/* My Bids Section */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">My Bids</h2>
          
          {myBids.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">You haven't placed any bids yet</p>
              <button
                onClick={() => navigate('/auctions')}
                className="mt-4 bg-brand-600 text-white px-6 py-3 rounded-lg hover:bg-brand-700 transition font-semibold"
              >
                Browse Auctions
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {myBids.map((bid, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">
                        {bid.itemTitle}
                      </h3>
                      <p className="text-sm text-gray-600">{bid.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Your Bid</p>
                      <p className="text-xl font-bold text-brand-600">
                        ${bid.amount.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> 
                      Ends in {bid.endTime}
                    </span>
                    <span className={`px-3 py-1 rounded-full ${
                      bid.status === 'winning' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {bid.status === 'winning' ? 'Winning' : 'Outbid'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}