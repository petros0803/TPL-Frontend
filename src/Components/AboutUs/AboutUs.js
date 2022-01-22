import React from "react";
import SearchLanguages from "../Common/SearchLanguage/SearchLanguages";

//scss
import "./scss/aboutus.scss";

const AboutUs = () => {
  return (
    <div className="aboutus--container">
      <SearchLanguages />
      <div className="text-aboutus--container">
        <div>
          <h1 style={{ textAlign: "center" }}>Scurt Istoric</h1>
        </div>
        <div className="text-aboutus">
          <p>
            <b>SC Transport Public Local SA</b> și-a început activitatea
            propriu-zisă de la data de 1 octombrie 2005, având ca acţionar
            Consiliul Local Suceava, cu scopul de a continua serviciul de
            transport public de persoane pe raza municipiului Suceava, în urma
            intrării în faliment a fostei societăţi de transport SC TPS SA. La
            înfiinţare SC TPL SA a preluat o parte dintre salariaţii fostei
            societăţi precum şi parcul auto (autobuze, troleibuze, microbuze)
            folosit de aceasta.
          </p>
          <p>
            Pentru prima oară în oraşul Suceava, o activitate organizată de
            transport public de persoane a luat fiinţă în anul 1962 în cadrul
            IGO Suceava (Întreprinderea de Gospodărire Orăşenească), devenită
            din 1973 Întreprinderea Judeţeană de Gospodărire Comunală si
            Locativă (IJGCL) şi deservea atât oraşul propriu-zis cât şi
            localităţile limitrofe.
          </p>
          <p>
            Ulterior, în urma înfiinţării în ţară a unităţilor specializate de
            transport local, în anul 1980 şi-a început activitatea în municipiul
            Suceava Întreprinderea Judeţeană de Transport Local (IJTL). Un punct
            de referinţă care trebuie consemnat în această perioada a fost anul
            1987, când a intrat în exploatare reţeaua electrică pentru
            troleibuze în municipiul Suceava, aceasta funcționând până în anul
            2006.
          </p>
          <p>
            După anul 1989, IJTL Suceava a fost reorganizată de câteva ori sub
            diferite forme şi denumiri şi anume: în perioada 1991-1995 Regia
            Autonomă de Transport Urban de Călători (RATUC), în perioada
            1995-1998 Agenţia de Transport Local (ATL) din cadrul RAUCL, iar din
            anul 1998 până în anul 2005 SC Transport Public şi Servicii SA
            (TPS).
          </p>
          <p>
            La sfârşitul anilor 90, în urma apariţiei şi dezvoltării
            necontrolate şi ilegale în acel moment a activităţii de transport
            privat de persoane cu microbuze (dube) de tip maxi-taxi şi implicit
            datorită concurenţei neloiale, SC TPS SA a intrat încet în declin
            iar în toamna anului 2005 a ajuns la faliment.
          </p>
          <p>
            În această situaţie, pentru a veni în sprijinul populaţiei şi
            totodată ca măsură de protecţie socială pentru majoritatea
            locuitorilor municipiului, Consiliul Local Suceava a hotărât în anul
            2005 înfiinţarea actualei societăţi.
          </p>
          <p>
            <b>SC Transport Public Local SA Suceava</b> este subordonată{" "}
            <a href="http://www.primariasv.ro/">
              Primariei Municipiului Suceava
            </a>{" "}
            şi prestează către populaţie serviciul de transport de persoane în
            municipiu.
          </p>
          <p>
            <b>SC Transport Public Local SA</b> este membră din anul 2010 a{" "}
            <a href="http://www.urtp.ro/">
              Uniunii Române de Transport Public - URTP
            </a>{" "}
            - care este asociată la Uniunea Internaţională de Transport Public
            cu sediul la Bruxelles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
