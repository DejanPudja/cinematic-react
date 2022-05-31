import AdminNavBar from '../../../pages/navigation/AdminNavBar';

export default function AdminHeader() {
  return (
    <div className="container">
      <img
        src="../img/auth-img/logo.png"
        className="header-image"
        alt="header-image"
      />
      <nav className="navbar navbar-dark navbar-expand-lg auth-navigation mt-4">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-list-7"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbar-list-7"
        >
          <AdminNavBar />
        </div>
      </nav>
    </div>
  );
}
