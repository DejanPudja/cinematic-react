import UserNavBar from '../../../pages/navigation/UserNavBar';

export default function UserHeader() {
  return (
    <div className="container">
      <img
        src="../img/auth-img/logo.png"
        className="header-image"
        alt="header-image"
      />
      <h4 className="mt-5 title">Online rezervacije</h4>
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
          <UserNavBar />
        </div>
      </nav>
    </div>
  );
}
