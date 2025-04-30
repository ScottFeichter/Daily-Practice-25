import { client, ApiResponse } from './fetch';

// Types
export interface SignUpRequest {
    name: string;
    username: string;
    email: string;
    password: string;
    verify_password: string;
    terms_accepted: boolean;
}

export interface SignUpResponse {
    message?: string;
    user?: {
        id: number;
        email: string;
        // ... other user properties
    };
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    message: string;
    status: string;
    user: {
        id: string;
        username: string;
        email: string;
        name: string;
    };
}

export interface AuthError {
    message: string;
    field?: string;
}

// Auth API functions
export const signUp = async (data: SignUpRequest): Promise<ApiResponse<SignUpResponse>> => {
    try {
        return await client<SignUpResponse>('/api/signup', {
            method: 'POST',
            body: data,
        });
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Signup failed: ${error.message}`);
        }
        throw new Error('An unexpected error occurred during signup');
    }
};

export const login = async (data: LoginRequest): Promise<ApiResponse<LoginResponse>> => {
    try {
        return await client<LoginResponse>('/api/auth/login', {
            method: 'POST',
            body: data,
        });
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Login failed: ${error.message}`);
        }
        throw new Error('An unexpected error occurred during login');
    }
};

export const logout = async (): Promise<ApiResponse<void>> => {
    try {
        return await client<void>('/logout', {
            method: 'POST',
        });
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Logout failed: ${error.message}`);
        }
        throw new Error('An unexpected error occurred during logout');
    }
};

export const getCurrentUser = async (): Promise<ApiResponse<LoginResponse>> => {
    try {
        return await client<LoginResponse>('/me', {
            method: 'GET',
        });
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Failed to fetch current user: ${error.message}`);
        }
        throw new Error('An unexpected error occurred while fetching user data');
    }
};

interface MessageResponse {
    message: string;
}

// Password reset functions
export const requestPasswordReset = async (email: string): Promise<ApiResponse<MessageResponse>> => {
    try {
        return await client<MessageResponse>('/password-reset-request', {
            method: 'POST',
            body: { email },
        });
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Password reset request failed: ${error.message}`);
        }
        throw new Error('An unexpected error occurred during password reset request');
    }
};

export const resetPassword = async (token: string, newPassword: string): Promise<ApiResponse<MessageResponse>> => {
    try {
        return await client<MessageResponse>('/password-reset', {
            method: 'POST',
            body: {
                token,
                new_password: newPassword,
            },
        });
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Password reset failed: ${error.message}`);
        }
        throw new Error('An unexpected error occurred during password reset');
    }
};

// Email verification
export const verifyEmail = async (token: string): Promise<ApiResponse<MessageResponse>> => {
    try {
        return await client<MessageResponse>(`/verify-email/${token}`, {
            method: 'POST',
        });
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Email verification failed: ${error.message}`);
        }
        throw new Error('An unexpected error occurred during email verification');
    }
};

// Resend verification email
export const resendVerificationEmail = async (): Promise<ApiResponse<MessageResponse>> => {
    try {
        return await client<MessageResponse>('/resend-verification', {
            method: 'POST',
        });
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Failed to resend verification email: ${error.message}`);
        }
        throw new Error('An unexpected error occurred while resending verification email');
    }
};

// Update user profile
export interface UpdateProfileRequest {
    name?: string;
    username?: string;
    email?: string;
    current_password?: string;
    new_password?: string;
}

export const updateProfile = async (data: UpdateProfileRequest): Promise<ApiResponse<LoginResponse>> => {
    try {
        return await client<LoginResponse>('/profile', {
            method: 'PUT',
            body: data,
        });
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Profile update failed: ${error.message}`);
        }
        throw new Error('An unexpected error occurred while updating profile');
    }
};
