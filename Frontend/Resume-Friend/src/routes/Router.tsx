// src/routes/router.tsx
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/home/Home';
import CoverLetter from '../components/cover-letter/CoverLetter';
import HomeSpace from '../components/home-space/HomeSpace';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: 'cover-letter',
        element: <CoverLetter />
      },
      {
        path: '',
        element: <HomeSpace />
      }
    ]
  },
]);
