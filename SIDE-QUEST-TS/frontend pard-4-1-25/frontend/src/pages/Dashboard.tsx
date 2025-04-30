import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>('');

  // You might want to fetch user data when the dashboard loads
  useEffect(() => {
    const checkAuthAndFetchUser = async () => {
      try {
      // Authentication check here
      // Check for token
      const token = localStorage.getItem('token');
      console.info("token: ", token);

      const isAuthenticated = !!token;


        if (!isAuthenticated) {
          navigate('/login');
          return;
        }

        // Fetch user data
        // Replace this with your actual API call to get user data
        const fetchUserData = async () => {
          try {
            // Example API call:
            // const response = await fetch('/api/user', {
            //   headers: {
            //     'Authorization': `Bearer ${localStorage.getItem('token')}`
            //   }
            // });
            // const data = await response.json();
            // setUserName(data.name);

            // Temporary placeholder:
            setUserName('John Doe');
          } catch (error) {
            console.error('Error fetching user data:', error);
            setUserName('User');
          }
        };

        fetchUserData();
      } catch (error) {
        console.error('Authentication error:', error);
        navigate('/login');
      }
    };

    checkAuthAndFetchUser();
  }, [navigate]);

  const handleLogout = () => {
    // Add your logout logic here
    // For example:
    // localStorage.removeItem('token');
    // clearUserSession();
    setUserName('');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="ml-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Example dashboard content */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {/* Add an icon here if desired */}
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Welcome
                        </dt>
                        <dd className="flex items-baseline">
                          <div className="text-2xl font-semibold text-gray-900">
                            {userName || 'User'}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              {/* Add more dashboard widgets here */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
