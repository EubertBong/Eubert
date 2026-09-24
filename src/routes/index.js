import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import PageLayout from '../layout'
import ScrollToTop from '../components/ScrollToTop'

import NotFound from '../containers/not-found'
import HomePage from '../containers/home';
import ProjectsPage from '../containers/projects';
import ProjectDetail from '../containers/projectDetail';
import BlogsPage from '../containers/blogs';
import AboutPage from '../containers/about';
import ContactPage from '../containers/contactPage';

const MyRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/project/:id' element={<ProjectDetail />} />
          <Route path='/blogs' element={<BlogsPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRouter;
