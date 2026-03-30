import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import GerechtLijst from './components/GerechtLijst';
import GerechtToevoegen from './components/GerechtToevoegen';
import Weekplanner from './components/Weekplanner';
import Login from './components/Login';
import Profiel from './components/Profiel';
import AuthGuard from './components/AuthGuard';
import Layout from './components/Layout';
import { auth } from './firebase';
import { onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { gerechtService } from './services/gerechtService';

export default function App() {
  const [user, setUser] = useState<FirebaseUser | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const handleRandomRecept = () => {
    navigate('/cards');
    setTimeout(() => {
      gerechtService.triggerRandomGerecht();
    }, 100);
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout onRandomRecept={handleRandomRecept} />}>
        <Route path="/" element={<Navigate to="/weekplanner" replace />} />
        <Route path="/cards" element={<GerechtLijst />} />
        <Route path="/gerechten" element={<Navigate to="/cards" replace />} />
        <Route path="/gerecht/:id" element={<GerechtLijst />} />
        <Route path="/nieuw" element={<GerechtToevoegen />} />
        <Route path="/toevoegen" element={<Navigate to="/nieuw" replace />} />
        <Route path="/weekplanner" element={<Weekplanner />} />
        <Route path="/planner" element={<Navigate to="/weekplanner" replace />} />
        <Route path="/profiel" element={<AuthGuard><Profiel /></AuthGuard>} />
        <Route path="*" element={<Navigate to="/cards" replace />} />
      </Route>
    </Routes>
  );
}
