import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import AboutUsPage from "./pages/about-us/AboutUsPage.tsx";
import JobOfferPage from "./pages/job-offer/JobOfferPage.tsx";
import BlogListPage from "./pages/blog-list/BlogListPage.tsx";
import Products from "./pages/products/Products.tsx";
import NotFoundPage from "./pages/404/NotFoundPage.tsx";

const theme = createTheme({
    typography: {
        fontFamily: 'Inter, Arial, sans-serif',
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about-us" element={<AboutUsPage />} />
                    <Route path="/job" element={<JobOfferPage/>} />
                    <Route path="/blog" element={<BlogListPage/>} />
                    <Route path="/products" element={<Products/>} />
                    <Route path="*" element={<NotFoundPage/>} />
                    
                    {/* Здесь можно добавить другие маршруты без префикса языка */}
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
