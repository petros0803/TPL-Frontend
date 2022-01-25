import React, { useState } from "react";
import SearchLanguages from "../Common/SearchLanguage/SearchLanguages";
import {
  PRICES,
  TICKETS,
  FINES,
  LOST_ITEMS,
} from "../../Constants/prices.constants";

//scss
import "./scss/prices.scss";

const Prices = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="prices--container">
      <SearchLanguages />
      <div>
        <div className="buttons--container">
          {PRICES.map((elem) => (
            <button
              key={elem.id}
              className={elem.id === currentPage ? "button-current-page" : ""}
              onClick={() => setCurrentPage(elem.id)}
            >
              {elem.label}
            </button>
          ))}
        </div>
        <div>
          {currentPage === 0 ? (
            <div className="content--div">
              <h1>
                Preţul biletelor şi abonamentelor de călătorie pentru mijloacele
                de transport ale SC TPL SA este stabilit prin Hotărârea
                Consiliului Local Suceava
              </h1>
              <ul>
                <li>
                  Preţul unui bilet pentru o persoană pentru o singură călătorie
                  este 2,50 lei
                </li>
                <li>
                  Biletul se procură la urcarea în mijlocul de transport de la
                  taxator şi este valabil doar în mijlocul de transport
                  respectiv
                </li>
                <li>
                  Călătorii au obligaţia de a solicita şi păstra biletul de
                  călătorie asupra lor pe toată durata călătoriei şi de a-l
                  prezenta organelor de control
                </li>
                {TICKETS.map((ticket) => (
                  <li key={ticket.id}>{`${ticket.label} - ${ticket.value}`}</li>
                ))}
              </ul>
              <p>
                <b>*</b> abonamentul subvenționat pentru elevi se eliberează
                elevilor care urmează cursurile unei unităţi de învăţământ de
                stat din municipiul Suceava
              </p>
              <p>
                <b>**</b> abonamentul subvenționat pentru studenți se eliberează
                numai studenţilor la zi cu domiciliul stabil în municipiul
                Suceava
              </p>
              <p>
                - acte necesare pentru eliberare: adeverinţă de elev/student pe
                anul şcolar în curs - abonamentul pentru elevi/studenţi trebuie
                însoţit de unul din următoarele documente: actul de identitate
                în copie sau original; copie după certificatul de naştere;
                carnetul de elev/legitimaţia de student
              </p>
              <p>
                <b>• Abonament subvenţionat pentru pensionari - 37,50 lei</b>
              </p>
              <p>
                - acte necesare: actul de identitate, cuponul de pensie în
                original si în copie
              </p>
              <p>
                <b>• Abonament cu reducere 50% pentru donatorii de sânge</b>
              </p>
              <p>- acte necesare: actul de identitate, adeverinţa de donator</p>
            </div>
          ) : currentPage === 1 ? (
            <div className="content--div">
              <h1>Gratuitati</h1>
              <h3>
                ÎN CONFORMITATE CU LEGISLAŢIA ÎN VIGOARE ELIBERĂM LEGITIMAŢII DE
                CĂLĂTORIE* PENTRU URMĂTOARELE CATEGORII DE PERSOANE:
              </h3>
              <ul>
                <li>
                  <b>
                    Foşti detinuţi politici (titular sau soţ supravieţuitor)
                  </b>{" "}
                  - Decret-Lege nr.118/1990
                </li>
                <li>
                  <b>Refugiaţi/deportaţi (titular sau soţ supravieţuitor) </b> -
                  Legea nr. 189/2000
                </li>
                <li>
                  <b>Veterani de război/ văduve de veterani</b> - Legea
                  nr.44/1994
                </li>
                <li>
                  <b>
                    Eroi ai Revoluţiei şi urmaşii celor decedaţi în Revoluţia
                    din Decembrie 1989
                  </b>{" "}
                  - Legea nr. 341/2004
                </li>
              </ul>
              <p>
                - acte necesare: hotărârea/decizia emisă de Casa de Pensii (în
                original şi în copie) SAU după caz certificatul de revoluţionar
                (în original şi în copie), actul de identitate (în original şi
                în copie), o fotografie recentă, legitimaţia anterioară
              </p>
              <p>
                <b>LEGITIMAŢIILE DE CĂLĂTORIE TPL</b> se eliberează la punctul
                CENTRU
              </p>
              <p>
                Program:{" "}
                <b>
                  <b>luni - vineri 7.00 - 18.00</b>; sâmbăta, duminica şi
                  sărbătorile legale închis
                </b>
              </p>
              <br />
              <h1>
                LEGITIMAŢIA NU ESTE TRANSMISIBILĂ ŞI TREBUIE ÎNSOŢITĂ DE ACTUL
                DE IDENTITATE
              </h1>
              <ul>
                <li>
                  <b>Persoanele cu handicap</b> - se vor legitima cu un document
                  standard eliberat de Direcţia Generală de Asistenţa Socială şi
                  Protecţie a Copilului din fiecare judeţ, respectiv sector din
                  municipiul Bucureşti, denumit Legitimaţia pentru transportul
                  urban cu mijloace de transport în comun de suprafaţă. Primesc
                  această legitimaţie persoanele cu handicap grav sau accentuat,
                  asistenţii personali ai persoanelor cu handicap grav şi
                  asistenţii personali profesionişti ai persoanelor cu handicap
                  grav sau accentuat. Aceste legitimaţii sunt valabile pentru
                  transportul în comun pe tot teritoriul ţării (indiferent de
                  domiciliu).
                </li>
              </ul>
            </div>
          ) : currentPage === 2 ? (
            <div className="content--div">
              <h1>PUNCTELE DE ELIBERARE A ABONAMENTELOR</h1>
              <p>
                <b>1. CENTRU</b> - Staţia de autobuz <br /> Program:{" "}
                <b>
                  Luni-Vineri 7.00 - 18.00; Sâmbăta, Duminica şi sărbătorile
                  legale închis
                </b>{" "}
                Se eliberează abonamente lunare, de 15 zile, de 7 zile, de o zi,
                nenominale, pentru elevi/studenţi, legitimaţii speciale
              </p>
              <p>
                <b>2. OBCINI</b> - Staţia de autobuz Flori <br /> Program:
                <b>
                  {" "}
                  Luni-Vineri 7.00 - 15.00; Sâmbăta, Duminica şi sărbătorile
                  legale închis
                </b>{" "}
                Se eliberează abonamente lunare, de 15 zile, de 7 zile, de o zi,
                nenominale, pentru elevi/studenţi
              </p>
              <p>
                <b>3. BURDUJENI</b> - Dispecerat capăt linie Gara Burdujeni
                <br />
                Program:{" "}
                <b>
                  Luni-Vineri 5.00 - 22.00; Sâmbăta şi Duminica 8.00 - 16.00
                </b>{" "}
                Se eliberează abonamente lunare, de 15 zile, de 7 zile, de o zi,
                nenominale
              </p>
              <p>
                <b>4. BURDUJENI</b> - Dispecerat capăt linie Cinema Burdujeni
                <br />
                Program:{" "}
                <b>
                  Luni-Vineri 5.00 - 22.00; Sâmbăta şi Duminica 8.00 - 16.00
                </b>{" "}
                Se eliberează abonamente lunare, de 15 zile, de 7 zile, de o zi,
                nenominale
              </p>
              <p>
                <b>5. SEDIUL TPL</b> - str. Traian Vuia nr. 5A <br />
                Program:{" "}
                <b>
                  Luni-Vineri 7.00 - 15.00; Sâmbăta, Duminica şi sărbătorile
                  legale închis
                </b>{" "}
                Se eliberează pe bază de comandă scrisă pentru decont cu factură
                şi chitanţă următoarele abonamente: pentru o lună, de 15 zile,
                de 7 zile, precum şi abonamente cu 50% reducere pentru donatorii
                de sânge
              </p>
            </div>
          ) : currentPage === 3 ? (
            <div className="content--div">
              <h1>Sanctiuni</h1>
              <p>
                Pentru a evita situaţiile neplăcute vă rugăm ca{" "}
                <b>
                  la urcarea în mijlocul de transport să solicitaţi biletul de
                  călătorie
                </b>{" "}
                de la taxator sau să verificaţi că dețineți abonament valabil!
              </p>
              <p>
                Călătorii care nu prezintă la control biletul sau abonamentul
                valabil vor fi <b>sancţionaţi pe loc</b> cu bilet de suprataxă
                în valoare de <b>30 lei</b> sau prin proces verbal cu{" "}
                <b>amendă în valoare de 100-500 lei</b>.
              </p>
              <p>
                <b>EXTRAS</b> din <b>HCL Suceava nr. 98/2011</b> cuprinzând
                NORME PRIVIND BUNA CONVIEŢUIRE, ORDINEA Şl LINIŞTEA PUBLICĂ,
                TRANSPORTUL PUBLIC DE CĂLĂTORI, GOSPODĂRIREA ORAŞULUI ŞI
                PROTECŢIA MEDIULUI ÎN MUNICIPIUL SUCEAVA:
              </p>
              <h1>
                CAPITOLUL 6 Norme privind transportul public local de călători
              </h1>
              <p style={{ textAlign: "center" }}>
                Art.23. Călătorii care utilizează serviciile de transport public
                local au, în principal, următoarele obligaţii:
              </p>
              <ol type="a">
                <li>
                  să deţină asupra lor, pe timpul transportului, legitimaţii de
                  călătorie valabile (bilete, abonamente etc) sau alte documente
                  de transport, stabilite prin acte normative, care le conferă
                  dreptul de a călători cu mijloacele de transport public local
                </li>
                <li>
                  să achite costul legitimaţiilor de călătorie valabile pentru
                  călătoriile pe care le efectuează, conform tarifelor
                  menţionate lizibil pe acestea
                </li>
                <li>
                  să nu aducă prejudicii mijloacelor de transport sau a
                  bunurilor ce aparţin de infrastructura tehnico-edilitară de
                  transport
                </li>
                <li>
                  să aibă un comportament civilizat faţă de personalul deservent
                  şi faţă de ceilalţi călători
                </li>
                <li>
                  să se legitimeze la solicitarea expresă a personalului cu
                  atribuţii de taxare şi control, identificat prin ecuson sau
                  legitimaţie de serviciu
                </li>
              </ol>
              <p style={{ textAlign: "center" }}>
                Art.24. Constituie contravenţie la normele privind transportul
                public de călători în municipiul Suceava săvârşirea de către
                persoanele fizice a oricăreia din următoarele fapte:
              </p>
              <table>
                <thead>
                  <tr>
                    <td style={{ textAlign: "center", fontSize: "18px" }}>
                      Pct.
                    </td>
                    <td style={{ paddingLeft: "10px", fontSize: "18px" }}>
                      Descrierea faptei
                    </td>
                    <td style={{ textAlign: "center", fontSize: "18px" }}>
                      Amenda (lei)
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {FINES.map((fine) => (
                    <tr key={fine.id}>
                      <td style={{ textAlign: "center" }}>
                        {parseInt(fine.id) + 1}
                      </td>
                      <td style={{ width: "950px", paddingLeft: "10px" }}>
                        {fine.label}
                      </td>
                      <td style={{ textAlign: "center" }}>{fine.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            currentPage === 4 && (
              <div className="content--div">
                <h1>Pierdute & Gasite</h1>
                <hr />
                Ultima actualizare: 20 Aprilie 2020
                <hr />
                <h3>
                  <b>
                    În cazul în care se pierd abonamente, acte sau obiecte în
                    mijloacele de transport ale SC TPL SA, dacă acestea sunt
                    găsite, le puteţi ridica de la sediul societăţii.
                  </b>
                </h3>
                <p>
                  <b>
                    Vă punem la dispoziţie lista cu documentele/obiectele
                    găsite:
                  </b>
                </p>
                <table style={{ textAlign: "center" }}>
                  <thead>
                    <tr>
                      <td></td>
                      <td>Documentul / obiectul</td>
                      <td>Nume</td>
                      <td>Observatii</td>
                    </tr>
                  </thead>
                  <tbody>
                    {LOST_ITEMS.map((lost_item) => (
                      <tr key={lost_item.id}>
                        <td>{lost_item.id}</td>
                        <td>{lost_item.doc}</td>
                        <td>{lost_item.name}</td>
                        <td>{lost_item.obs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Prices;
