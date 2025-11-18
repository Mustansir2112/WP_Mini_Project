import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { X } from 'lucide-react';

export default function SignupPage({ setIsLoggedIn ,setOnPage}) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: fullName,
                email,
                password
            })
        });

        const data = await res.json();

        if (res.status === 201) {
            localStorage.setItem('token', data.token);
            setIsLoggedIn(true);
            setOnPage('auctions');
            navigate('/auctions');
        } 
        else if(res.status){
            alert(data.message);
        }
        else {
            alert(data.message || 'Something went wrong');
        }
    };

    useEffect(() => {
        if (localStorage.getItem('token')) navigate('/auctions');
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 relative">
                <Link to="/" className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                    <X size={24} />
                </Link>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Create Account</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
                            placeholder='xyz@gmail.com'
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500"
                            placeholder='password'
                            required
                        />
                    </div>

                    <button type="submit" className="w-full bg-brand-600 text-white py-3 rounded-lg hover:bg-brand-700 transition font-semibold">
                        Sign Up
                    </button>
                </form>

                <p className="text-center mt-4 text-gray-600">
                    Already have an account?{' '}
                    <Link to="/Login" className="text-brand-600 hover:underline font-semibold">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
