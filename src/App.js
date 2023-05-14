import React from 'react';
import '../src/scss/App.scss';
import Navbar from './components/Navbar';
import Blogs from './components/Blogs';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom';
import SingleItem from './components/SingleItem';
import About from './components/About';
import Contact from './components/Contact';
import BlogState from './context/BlogState';
import CreateBlog from './components/CreateBlog';
import Login from './components/Login';
import Signup from './components/Signup';
import MyBlogs from './components/MyBlogs'
import AlertState from './context/AlertState';
import AlertWrapper from './components/AlertWrapper';
import AuthState from './context/AuthState'
import ForgotPassword from './components/ForgotPassword';
import ResetPasswordPage from './components/ResetPassword';
import SearchBlogs from './components/SearchBlogs';
import CategoryBlogs from './components/CategoryBlogs';

function App() {
	return (
		<div className="App">
			<AlertState>
				<BlogState>
					<Main>
						<AuthState>
							<Navbar />
							<AlertWrapper />
							<div className="container">
								<Routes>

									<Route exact path='/' element={
										<Blogs></Blogs>
									}></Route>

									<Route exact path="/blog/:id" element={
										<SingleItem />
									}>
									</Route>

									<Route exact path='/about' element={
										<About />
									}></Route>

									<Route exact path='/contact' element={
										<Contact />
									}></Route>

									<Route exact path='/createblog' element={
										<CreateBlog />
									}></Route>

									<Route exact path='myblogs' element={
										<MyBlogs />
									}></Route>

									<Route exact path='/login' element={
										<Login />
									}></Route>

									<Route exact path='/signup' element={
										< Signup />
									}></Route>

									<Route path="/forgot-password" element={<ForgotPassword />} />

									<Route path="/reset-password" element={<ResetPasswordPage />} />

									<Route path="/searchedBlogs" element={<SearchBlogs />} />

									<Route path="/category/:category" element={<CategoryBlogs />} />
								</Routes>
							</div>
							<NewsLetter />
							{/* <Instagram /> */}
							<Footer />
						</AuthState>
					</Main>
				</BlogState>
			</AlertState>

		</div>
	);
}

export default App;
