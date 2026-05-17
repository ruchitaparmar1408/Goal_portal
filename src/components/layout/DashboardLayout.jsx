import { Header, Sidebar } from '../common';

export default function DashboardLayout({ title, brand, links, children }) {
  return (
    <div className="dashboard-layout">
      <Sidebar brand={brand} links={links} />
      <div className="dashboard-layout__main">
        <Header title={title} />
        <main className="dashboard-layout__content">{children}</main>
      </div>
    </div>
  );
}
