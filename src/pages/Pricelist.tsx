export default function BlocksPricelist() {
  return (
    <div className="container">
      <h4 className="title mt-5 mb-4">Cene bioskopskih ulaznica</h4>
      <div className="row">
        <div className="col-lg-12">
          <table className="table table-dark">
            <thead>
              <tr>
                <th></th>
                <th>Radnim danima (osim utorkom)</th>
                <th>Utorkom</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2D projekcije do 16:55h</td>
                <td>350 din</td>
                <td>270 din</td>
              </tr>
              <tr>
                <td>2D projekcije od 17:00h</td>
                <td>380 din</td>
                <td>270 din</td>
              </tr>
              <tr>
                <td>3D projekcije do 16:50h</td>
                <td>450 din</td>
                <td>380 din</td>
              </tr>
              <tr>
                <td>3D projekcije od 17:00h</td>
                <td>480 din</td>
                <td>380 din</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-12">
          <table className="table table-dark">
            <thead>
              <tr>
                <th></th>
                <th>Subotom i nedeljom</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2D projekcije do 16:55h</td>
                <td>350 din</td>
              </tr>
              <tr>
                <td>2D projekcije od 17:00h</td>
                <td>400 din</td>
              </tr>
              <tr>
                <td>3D projekcije do 16:50h</td>
                <td>450 din</td>
              </tr>
              <tr>
                <td>3D projekcije od 17:00h</td>
                <td>500 din</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h4 className="mt-5 title">
        Porodični paket <small>(subotom, nedeljom i praznikom do 16:59)</small>
      </h4>
      <div className="col-lg-12 mt-5">
        <div className="row">
          <div className="col-lg-5 col-md-5">
            <h5 className="title">2D Film</h5>
            <ul className="ml-5 list">
              <li>3 osobe-870 din</li>
              <li>4 osobe-1160 din</li>
              <li>5 osoba-1450 din</li>
            </ul>
          </div>
          <div className="col-lg-5 col-md-5">
            <h5 className="title">3D Film</h5>
            <ul className="ml-5 list">
              <li>3 osobe-870 din</li>
              <li>4 osobe-1160 din</li>
              <li>5 osoba-1450 din</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="description">
        <p>
          U cene ulaznica za 3D projekcije je uključen i dodatak za naočare.
          <br /> Sve cene se istaknute sa uračunatim PDV-om.
          <br /> Snižene cene ulaznica utorkom (Happy Cinema Day) ne važe
          državnim praznicima.
          <br /> Organizovane grupe od 15 i više posetilaca ostvaruju popust na
          ulaznice u iznosu od 50 dinara.
          <br /> Ponedeljkom i sredom studenti mogu uz važeći index da ostvare
          popust na kupovinu ulaznice u iznosu od 50 dinara.
          <br /> Deca do 2 godine starosti ne plaćaju bioskopsku ulaznicu.
          <br /> Osobe u invalidskim kolicima,zajedno sa pratiocem, plaćaju
          jednu kartu po regularnoj ceni umesto dve.
          <br /> Radno vreme blagajne bioskopa je svaki danom od 09:00 do 23:00h
        </p>
      </div>
      <h6 className="title">
        Karte se putem interneta rezervišu na sledeći način:
      </h6>
      <div className="description">
        1. na pocetnoj strani se odaber tab repertoar ili direktno na baner na
        kome pise ‚‚online rezervacija karata‚‚ <br />
        2. kada se nalazite na stranici repertoar u gornjem delu odaberete datum
        odrzavanja projekcije <br />
        3. Tada ce nam se otvoriti stranica sa svim filmovima koji igraju tog
        dana, te je potrebno da odaberete film koji zelite da gledate. <br />
        4. Nakon odabira kokretnog filma, kliknemo na ‚‚rezervacije karata‚‚ sto
        se nalazi odmah ispod postera filma, tada cemo dobiti sve porjekcije tog
        filma koje se nalaze u sistemu. <br />
        5. Posle odabira tacnog vremena projekcije sistem Vas automatski
        prebacuje na bilet (ova akcija moze potrajati 30-ak sekundi) i dalje se
        samo prati uputstvo za rezervaciju karata
      </div>
      <h6 className="title mt-4">
        LEGENDA <small>za rezervacije:</small>
      </h6>
      <div className="description">
        ZELENO - slobodna mesta za on line rezervaciju <br />
        ZUTO - Dostupno za on line rezervaciju, ali je mesto prodato <br />
        PLAVO - Rezervisana mesta (sve vrste rezervacija) <br />
        SIVO - Mesta koja nisu raspoloziva za on line rezervacije.
      </div>
    </div>
  );
}
