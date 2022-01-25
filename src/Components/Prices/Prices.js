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
import LocalizedMessage from "../Localization/LocalizedMessage";

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
                <LocalizedMessage of="PRICE_TEXT" />
              </h1>
              <ul>
                <li>
                  <LocalizedMessage of="PRICE_TEXT1" />
                </li>
                <li>
                  <LocalizedMessage of="PRICE_TEXT2" />
                </li>
                <li>
                  <LocalizedMessage of="PRICE_TEXT3" />
                </li>
                {TICKETS.map((ticket) => (
                  <li key={ticket.id}>
                    {ticket.label} - {ticket.value}
                  </li>
                ))}
              </ul>
              <p>
                <b>
                  <LocalizedMessage of="PRICE_TEXT4_BOLD" />
                </b>{" "}
                <LocalizedMessage of="PRICE_TEXT4" />
              </p>
              <p>
                <b>
                  <LocalizedMessage of="PRICE_TEXT5_BOLD" />
                </b>
                <LocalizedMessage of="PRICE_TEXT5" />
              </p>
              <p>
                <LocalizedMessage of="PRICE_TEXT6" />
              </p>
              <p>
                <b>
                  <LocalizedMessage of="PRICE_TEXT7_BOLD" />
                </b>
              </p>
              <p>
                <LocalizedMessage of="PRICE_TEXT8" />
              </p>
              <p>
                <b>
                  {" "}
                  <LocalizedMessage of="PRICE_TEXT9_BOLD" />
                </b>
              </p>
              <p>
                {" "}
                <LocalizedMessage of="PRICE_TEXT10" />
              </p>
            </div>
          ) : currentPage === 1 ? (
            <div className="content--div">
              <h1>
                <LocalizedMessage of="FREE_BTN_TEXT" />
              </h1>
              <h3>
                <LocalizedMessage of="FREE_TEXT1" />
              </h3>
              <ul>
                <li>
                  <b>
                    <LocalizedMessage of="FREE_TEXT2_BOLD" />
                  </b>{" "}
                  <LocalizedMessage of="FREE_TEXT2" />
                </li>
                <li>
                  <b>
                    <LocalizedMessage of="FREE_TEXT3_BOLD" />{" "}
                  </b>{" "}
                  - L<LocalizedMessage of="FREE_TEXT3" />
                </li>
                <li>
                  <b>
                    <LocalizedMessage of="FREE_TEXT4_BOLD" />
                  </b>{" "}
                  <LocalizedMessage of="FREE_TEXT4" />
                </li>
                <li>
                  <b>
                    <LocalizedMessage of="FREE_TEXT5_BOLD" />
                  </b>{" "}
                  <LocalizedMessage of="FREE_TEXT5" />
                </li>
              </ul>
              <p>
                <LocalizedMessage of="FREE_TEXT6" />
              </p>
              <p>
                <b>
                  <LocalizedMessage of="FREE_TEXT7_BOLD" />
                </b>{" "}
                <LocalizedMessage of="FREE_TEXT7" />
              </p>
              <p>
                <LocalizedMessage of="FREE_TEXT8" />{" "}
                <b>
                  <b>
                    <LocalizedMessage of="FREE_TEXT8_BOLD" />
                  </b>
                  ;<LocalizedMessage of="FREE_TEXT8_BOLD2" />
                </b>
              </p>
              <br />
              <h1>
                <LocalizedMessage of="FREE_TEXT9" />
              </h1>
              <ul>
                <li>
                  <b>
                    <LocalizedMessage of="FREE_TEXT10_BOLD" />
                  </b>{" "}
                  <LocalizedMessage of="FREE_TEXT10" />
                </li>
              </ul>
            </div>
          ) : currentPage === 2 ? (
            <div className="content--div">
              <h1>
                <LocalizedMessage of="RELEASE_TEXT1_BOLD" />
              </h1>
              <p>
                <b>
                  <LocalizedMessage of="RELEASE_TEXT2_BOLD" />
                </b>{" "}
                <LocalizedMessage of="RELEASE_TEXT2" /> <br />{" "}
                <LocalizedMessage of="RELEASE_TEXT_PROGRAM" />{" "}
                <b>
                  <LocalizedMessage of="RELEASE_TEXT3_BOLD" />
                </b>{" "}
                <LocalizedMessage of="RELEASE_TEXT3" />
              </p>
              <p>
                <b>
                  <LocalizedMessage of="RELEASE_TEXT4_BOLD" />
                </b>{" "}
                <LocalizedMessage of="RELEASE_TEXT4" /> <br />{" "}
                <LocalizedMessage of="RELEASE_TEXT_PROGRAM" />:
                <b>
                  {" "}
                  <LocalizedMessage of="RELEASE_TEXT5_BOLD" />
                </b>{" "}
                <LocalizedMessage of="RELEASE_TEXT5" />
              </p>
              <p>
                <b>
                  <LocalizedMessage of="RELEASE_TEXT6_BOLD" />
                </b>{" "}
                <LocalizedMessage of="RELEASE_TEXT6" />
                <br />
                <LocalizedMessage of="RELEASE_TEXT_PROGRAM" />:{" "}
                <b>
                  <LocalizedMessage of="RELEASE_TEXT7_BOLD" />
                </b>{" "}
                <LocalizedMessage of="RELEASE_TEXT7" />
              </p>
              <p>
                <b>
                  <LocalizedMessage of="RELEASE_TEXT8_BOLD" />
                </b>
                <LocalizedMessage of="RELEASE_TEXT8" />
                <br />
                <LocalizedMessage of="RELEASE_TEXT_PROGRAM" />:{" "}
                <b>
                  <LocalizedMessage of="RELEASE_TEXT9_BOLD" />
                </b>{" "}
                <LocalizedMessage of="RELEASE_TEXT9" />
              </p>
              <p>
                <b>
                  {" "}
                  <LocalizedMessage of="RELEASE_TEXT10_BOLD" />
                </b>{" "}
                <LocalizedMessage of="RELEASE_TEXT10" />
                <br />
                <LocalizedMessage of="RELEASE_TEXT_PROGRAM" />:{" "}
                <b>
                  <LocalizedMessage of="RELEASE_TEXT11_BOLD" />
                </b>{" "}
                <LocalizedMessage of="RELEASE_TEXT11" />
              </p>
            </div>
          ) : currentPage === 3 ? (
            <div className="content--div">
              <h1>
                <LocalizedMessage of="PENALTY_BTN_TEXT" />
              </h1>
              <p>
                <LocalizedMessage of="PENALTY_TEXT1" />{" "}
                <b>
                  <LocalizedMessage of="PENALTY_TEXT1_BOLD" />
                </b>{" "}
                <LocalizedMessage of="PENALTY_TEXT2" />
              </p>
              <p>
                <LocalizedMessage of="PENALTY_TEXT3" />{" "}
                <b>
                  <LocalizedMessage of="PENALTY_TEXT3_BOLD" />{" "}
                </b>{" "}
                <LocalizedMessage of="PENALTY_TEXT4" />
                <b>
                  <LocalizedMessage of="PENALTY_TEXT4_BOLD" />{" "}
                </b>{" "}
                <LocalizedMessage of="PENALTY_TEXT5" />{" "}
                <b>
                  <LocalizedMessage of="PENALTY_TEXT5_BOLD" />
                </b>
                .
              </p>
              <p>
                <b>
                  <LocalizedMessage of="PENALTY_TEXT6_BOLD" />
                </b>{" "}
                <LocalizedMessage of="PENALTY_TEXT6" />{" "}
                <b>
                  <LocalizedMessage of="PENALTY_HCL_BOLD" />
                </b>{" "}
                <LocalizedMessage of="PENALTY_TEXT7" />
              </p>
              <h1>
                <LocalizedMessage of="PENALTY_TEXT7_BOLD" />
              </h1>
              <p style={{ textAlign: "center" }}>
                <LocalizedMessage of="PENALTY_TEXT8" />
              </p>
              <ol type="a">
                <li>
                  <LocalizedMessage of="PENALTY_TEXT9" />
                </li>
                <li>
                  <LocalizedMessage of="PENALTY_TEXT10" />
                </li>
                <li>
                  <LocalizedMessage of="PENALTY_TEXT11" />
                </li>
                <li>
                  <LocalizedMessage of="PENALTY_TEXT12" />
                </li>
                <li>
                  <LocalizedMessage of="PENALTY_TEXT13" />
                </li>
              </ol>
              <p style={{ textAlign: "center" }}>
                <LocalizedMessage of="PENALTY_TEXT14" />
              </p>
              <table>
                <thead>
                  <tr>
                    <td style={{ textAlign: "center", fontSize: "18px" }}>
                      <LocalizedMessage of="PENALTY_TABLE_TEXT1" />
                    </td>
                    <td style={{ paddingLeft: "10px", fontSize: "18px" }}>
                      <LocalizedMessage of="PENALTY_TABLE_TEXT2" />
                    </td>
                    <td style={{ textAlign: "center", fontSize: "18px" }}>
                      <LocalizedMessage of="PENALTY_TABLE_TEXT3" />
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
                <h1>
                  <LocalizedMessage of="LOST_BTN_TEXT" />
                </h1>
                <hr />
                <LocalizedMessage of="LOST_TEXT" />
                <hr />
                <h3>
                  <b>
                    <LocalizedMessage of="LOST_TEXT_BOLD" />
                  </b>
                </h3>
                <p>
                  <b>
                    <LocalizedMessage of="LOST_TEXT1_BOLD" />
                  </b>
                </p>
                <table style={{ textAlign: "center" }}>
                  <thead>
                    <tr>
                      <td></td>
                      <td>
                        <LocalizedMessage of="LOST_TABLE_TEXT" />
                      </td>
                      <td>
                        <LocalizedMessage of="LOST_TABLE_TEXT1" />
                      </td>
                      <td>
                        <LocalizedMessage of="LOST_TABLE_TEXT2" />
                      </td>
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
