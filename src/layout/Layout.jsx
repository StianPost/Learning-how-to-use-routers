import { AppShell, Button, Header, Navbar } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';

import About from '../routes/about';
import Contact from '../routes/contact';
import Home from '../routes/home';
import { NavLink } from 'react-router-dom';
import Todoitem from '../components/todoitem';
import Todos from '../routes/todos';

export default function Layout() {
  const navlinks = [
    {
      label: 'Home',
      to: '/',
    },
    {
      label: 'About',
      to: '/about',
    },
    {
      label: 'Contact',
      to: '/contact',
    },
    {
      label: 'Todos',
      to: '/todos',
    },
  ];
  return (
    <AppShell
      padding='md'
      navbar={
        <Navbar width={{ base: 300 }} height={500} p='xs'>
          <nav>
            {navlinks.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                style={({ isActive }) => {
                  return {
                    display: 'block',
                    color: isActive ? 'red' : '',
                    margin: '4px 0px',
                  };
                }}
              >
                <Button>{label}</Button>
              </NavLink>
            ))}
          </nav>
        </Navbar>
      }
      header={
        <Header height={60} p='xs'>
          {/* Header content */}
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/todos' element={<Todos />}>
          <Route path=':todoId' element={<Todoitem />} />
        </Route>
        <Route path='*' element={<div>Page not foud</div>} />
      </Routes>
    </AppShell>
  );
}
