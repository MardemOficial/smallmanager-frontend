import { createContext, useState } from 'react'

const auth = createContext();
const token = useState();
const refreshToken = useState();

function AuthenticationContext() {
    return (
        <div>
            AuthenticationContext
        <div>
            
        </div>
        </div>
    );
}

export default AuthenticationContext;