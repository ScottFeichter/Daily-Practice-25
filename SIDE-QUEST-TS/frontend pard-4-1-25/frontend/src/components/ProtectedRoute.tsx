import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const location = useLocation();

  // Replace this with your actual auth check logic
  const isAuthenticated = () => {
    // Check if user is authenticated (e.g., check for valid token)
    // Return true if authenticated, false otherwise
    return true; // Replace with actual implementation
  };

  if (!isAuthenticated()) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
