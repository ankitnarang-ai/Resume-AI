import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home/Home.tsx'
import CoverLetter from './components/cover-letter/CoverLetter.tsx'
import UploadForm from './components/upload-form/UploadForm.tsx'

const router = createBrowserRouter([
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
        element: <UploadForm />
      }
    ]
  },
])
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }

//     ]
//   },
// ]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
