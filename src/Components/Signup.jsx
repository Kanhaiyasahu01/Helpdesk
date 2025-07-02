export const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-[#55D6C2] via-[#4AC5B2] to-[#3BB5A1] flex items-center justify-center p-4'>
      <div className='bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-2xl text-center max-w-md w-full border border-white/20'>
        <div className='mb-8'>
          <div className='w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center'>
            <PlusCircle className='text-white text-2xl' />
          </div>
          <h2 className='text-3xl font-bold text-gray-800 mb-2'>Create Account</h2>
          <p className='text-gray-600'>Join our Helpdesk system today</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input 
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
              type="text" 
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder='Username' 
              required
            />
          </div>
          <div>
            <input 
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder='Email Address' 
              required
            />
          </div>
          <div>
            <input 
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder='Password' 
              required
            />
          </div>
          <div>
            <input 
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
              type="password" 
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder='Confirm Password' 
              required
            />
          </div>
          <button 
            type="submit"
            className='w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg py-3 font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg transform hover:scale-105'
          >
            Create Account
          </button>
        </form>

        <div className='flex justify-between items-center mt-6 text-sm'>
          <button className='text-red-600 hover:text-red-700 font-medium transition-colors'>
            Need Help?
          </button>
          <button className='text-[#55D6C2] hover:text-[#4AC5B2] font-medium transition-colors'>
            Sign In Instead
          </button>
        </div>
      </div>
    </div>
  );
};
