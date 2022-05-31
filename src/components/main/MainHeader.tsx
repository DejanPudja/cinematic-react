import MainNavBar from '../../pages/navigation/MainNavBar';

export default function MainHeader() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg navigation">
      <a className="navbar-brand ml-5" href="#">
        <img src="../img/arena_logo.png" className="logo" alt="logo" />
      </a>
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
        <MainNavBar />
      </div>
    </nav>
  );
}
