import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { X } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Login attempt with:', { email, password });
        // For now, just redirect to home
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 relative">
                <Link to="/" className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                    <X size={24} />
                </Link>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome Back</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                            placeholder="your@email.com" 
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <button 
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                    >
                        Login
                    </button>
                </form>
                <p className="text-center mt-4 text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/Signup" className="text-blue-600 hover:underline font-semibold">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}