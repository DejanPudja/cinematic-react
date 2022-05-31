export default function Contact() {
  return (
    <div className="container">
      <div className="col-lg-12 mt-5">
        <div className="row">
          <div className="col-lg-4 contact-info">
            <p>
              <strong>Adresa:</strong>
              <br />
              Arena Cineplex <br />
              Bulevar Mihajla Pupina 3 <br />
              21000 Novi Sad
            </p>
            <p className="mt-2">
              <strong>Informacije i rezervacije:</strong>
              <br />
              (021) 447 690
            </p>
            <p className="mt-2">
              <strong>Kontakt e-mail:</strong>
              <br />
              office (at) arenacineplex.com
            </p>
            <p className="mt-2 contact-social">
              <strong>Profili na društvenim mrežama:</strong>
              <br />
              <a href="https://www.facebook.com/bioskopArenaCineplex/">
                Facebook
              </a>
              <br />
              <a href="https://twitter.com/arenacineplex">Twitter</a>
            </p>
          </div>
          <div className="col-lg-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5617.409685085569!2d19.845319!3d45.253761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfb46e6b8df13b361!2sArena%20Cineplex!5e0!3m2!1sen!2sus!4v1651954499261!5m2!1sen!2sus"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              className="map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
