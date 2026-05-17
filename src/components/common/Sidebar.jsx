import { NavLink } from 'react-router-dom';

export default function Sidebar({ brand, links }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">{brand}</div>
      <nav>
        <ul className="sidebar__nav">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `sidebar__link${isActive ? ' sidebar__link--active' : ''}`
                }
                end
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
