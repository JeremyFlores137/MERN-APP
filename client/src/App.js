import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Register,Landing, Error, ProtectedRoute} from './pages'
import {
  AllJobs,
  AddJob,
  Stats,
  Profile,
  SharedLayout
} from './pages/dashboard'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
              }>
              <Route index element={<Stats/>}/>  {/*the users will be redirected to Stats page as soon as they log in*/}
              <Route path="all-jobs" element={<AllJobs/>}/>
              <Route path="add-job" element={<AddJob/>}/>
              <Route path="profile" element={<Profile/>}/>
            </Route> 
            <Route path="/register" element={<Register/>}/>
            <Route path="/landing" element={<Landing/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
      )
}

export default App;
