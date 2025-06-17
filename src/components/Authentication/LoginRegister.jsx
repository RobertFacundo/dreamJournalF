import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuthentication';
import './LoginRegister.scss';

export const LoginRegister = React.memo(() => {
    const [showPassword, setShowPassword] = useState(false);
    const { isLoginView,
        credentials,
        switchToLogin,
        switchToRegister,
        handleChange,
        handleSubmit,
        loading,
        error } = useAuth();

    return (
        <div className='auth-wrapper'>
            <div className='auth-container'>
                <h2 className='form-title'>{isLoginView ? 'Login' : 'Register'}</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name='username'
                        placeholder='Write your username'
                        value={credentials.username}
                        onChange={handleChange}
                        required
                    />
                    <div className="input-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            name='password'
                            placeholder='... and password'
                            value={credentials.password}
                            onChange={handleChange}
                            required
                        />
                        <button
                            type='button'
                            onClick={() => setShowPassword(prev => !prev)}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: 0,
                                transform: 'translateY(-50%)',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            {showPassword ? '💤' : '😴'}
                        </button>
                    </div>
                    <button className='form-button'>
                        {isLoginView ? 'Login' : 'Register'}
                    </button>
                </form>

                {loading && <p>Loading....</p>}
                {error && <p>{error}</p>}

                <p>
                    {isLoginView
                        ? "Don't you have an account?"
                        : "Already have an account?"
                    }{""}
                    <button onClick={isLoginView ? switchToRegister : switchToLogin}>
                        {isLoginView ? 'Register' : 'Log in'}
                    </button>
                </p>
            </div>
        </div>
    )
})