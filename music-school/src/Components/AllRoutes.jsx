
import Signup from './Signup'
import Signin from './Signin'
import { Route, Routes } from 'react-router-dom'
import Home from './Home';

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/home" element={<Home />} />
                <Route path="/courses" element={<Home />} />
            </Routes>
        </div>
    )
}
