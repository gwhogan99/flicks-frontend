import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function SearchPage() {
  return <h1>Search Page</h1>;
}

function SubscriptionsPage() {
  return <h1>Subscriptions Page</h1>;
}

function LandingPage() {
  return <h1>Welcome to Flicks! Please log in or sign up.</h1>;
}

function App() {
  const user = true; // Replace this with your actual login logic later

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/search" /> : <LandingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/subscriptions" element={<SubscriptionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
