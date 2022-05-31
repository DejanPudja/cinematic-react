import { FormEvent, useState } from 'react';
import Validation from '../../class/Vaildation';
import NewsletterService from '../../domain/newsletter/NewsletterService';
import ToastyNotify from '../../class/ToastyNotify';
import { ToastContainer } from 'react-toastify';

export default function MainFooter() {
  const [email, setEmail] = useState('');
  const sendEmail = (event: FormEvent) => {
    event.preventDefault();

    if (email !== '') {
      let checkEmail = Validation.checkEmail(email);
      if (checkEmail) {
        NewsletterService.newsletter({ email })
          .then(() => {
            ToastyNotify.successMessage('Uspesno ste se prijavili');
            setEmail('');
          })
          .catch(() => {
            ToastyNotify.errorMessage('Došlo je do greške');
          });
      } else {
        ToastyNotify.errorMessage('Email adresa nije ispravna');
      }
    }
  };
  return (
    <footer className="mt-5">
      <div className="container">
        <div className="row">
          {/* Contact */}
          <div className="col-md-4 mt-5">
            <img src="../img/footer_logo.png" alt="footer-logo" />
            <ul className="contact mt-2">
              <li className="address">
                Bul. Mihajla pupina 3<br />
                21000 Novi Sad
                <br />
                Srbija
                <br />
                Radno Vreme:09-23h
                <br />
              </li>
              <li className="phone mt-3">
                Tel: +381 (0) 21 447 690
                <br />
                Fax: +381 (0) 21 521 942
                <br />
              </li>
              <li className="email mt-3">office@arenacineplex.com</li>
              <li className=" mt-1">
                Ovaj sajt je namenjen iskljucivo za vezbanje i usavrsavanje
                vestina vezanih za programiranje.
              </li>
            </ul>
          </div>
          {/* Posts */}
          <div className="col-md-4 mt-5">
            <h5>Najnovije vesti</h5>
            <ul className="posts">
              <li className="pb-3 mb-3">
                <a href="">
                  SRĐAN OLMAN I STAND UP SHOW PRAVDA ZA OLMANA 16. MAJA
                </a>
                <br />
                <small>03/05/2022</small>
              </li>
              <li className="pb-3 mb-3">
                <a href="">
                  POKLONI, SPECIJALAN AMBIJENT I KOKTEL ŽURKA NA ARENA FAN
                  VEČERI 4. MAJA
                </a>
                <br />
                <small>03/05/2022</small>
              </li>
              <li className="pb-3 mb-3">
                <a href="">
                  SUPER PONEDELJAK I CENA KARTE OD 180 DINARA ZA SVE FILMOVE 25.
                  APRILA
                </a>
                <br />
                <small>03/05/2022</small>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div className="col-md-4 mt-5">
            <h5>Newsletter</h5>
            <p>
              Prijavi se na naš Newsletter za najnovije vesti i specijalne
              ponude
            </p>
            <form method="post">
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event: any) => {
                    setEmail(event.target.value);
                  }}
                  className="form-control required"
                  placeholder="Vaša email adresa"
                  autoComplete="off"
                />
                <span className="input-group-btn">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={sendEmail}
                  >
                    Prijavljujem se
                  </button>
                </span>
              </div>
            </form>
            <div className="social mt-5">
              <a href="https://www.facebook.com/bioskopArenaCineplex/">
                <img src="../img/facebook.png" width="40px" alt="footer-logo" />
              </a>
              <a href="https://twitter.com/arenacineplex">
                <img src="../img/twitter.png" width="40px" alt="footer-logo" />
              </a>
              <a href="https://www.instagram.com/arena_cineplex/">
                <img
                  src="../img/instagram.png"
                  width="40px"
                  alt="footer-logo"
                />
              </a>
            </div>
            <div className="row appstore">
              <div className="col-md-12 mt-3">
                <h4>Preuzmi aplikaciju</h4>
                <div className="col-md-6 col-sm-6  col-xs-6 text-center">
                  <a href="https://apps.apple.com/vg/app/arenacineplex/id981869044">
                    <img src="./img/appstore.png" alt="" />
                  </a>
                </div>
                <div className="col-md-6 col-sm-6  col-xs-6 text-center">
                  <a href="https://play.google.com/store/apps/details?id=com.intensnet.intensify.arenacineplex">
                    <img src="./img/gplay.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </footer>
  );
}
