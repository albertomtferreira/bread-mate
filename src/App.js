import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Homepage from './components/homepage/homepage.component';
import About from './components/about/about.component';
import HomeLayout from './components/home_layout/home_layout.component';
import Order from './components/order/order.component';
import Contact from './components/contact/contact.component';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLayout />}>
            <Route index element={<Homepage />} />
            <Route path='about' element={<About />} />
            <Route path='order' element={<Order />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;