import { Routes, Route } from 'react-router-dom';
import Login from './features/auth/Login';
import Signup from './features/auth/Signup';
import BookList from './features/book/BookList';
import BookDetail from './features/book/BookDetail';
import FlashcardList from './features/flashcards/FlashcardList';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<BookList />} />
        <Route path="books/:id" element={<BookDetail />} />
        <Route path="flashcards" element={<FlashcardList />} />
        {/* ...Thêm các route khác */}
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
