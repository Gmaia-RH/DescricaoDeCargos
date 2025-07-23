import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { Header } from "@/components/Header";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}
