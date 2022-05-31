import { Routes } from 'react-router-dom';
import './App.css';
import './assets/style.css';
import userRoute from './routes/UserRoutes';
import adminRoute from './routes/AdminRoutes';
import mainRoute from './routes/MainRoutes';

export default function App() {
  return (
    <div className="App">
      <Routes>
        {mainRoute}
        {userRoute}
        {adminRoute}
      </Routes>
    </div>
  );
}
