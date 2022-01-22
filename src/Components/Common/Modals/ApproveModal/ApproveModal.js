import React from "react";
import "./scss/approveModal.scss";

const ApproveModal = ({ isModalOpen, closeModal }) => {
  return (
    isModalOpen && (
      <div className="modal--background--container">
        <div className="modal--container">
          <h1>Confirma trimiterea mesajului</h1>
          <div>
            <p>
              Mesajele anonime sau cele în care nu sunt trecute datele de
              identificare a petiţionarului nu se iau în considerare (art. 7 din
              OG nr. 27/2002 privind reglementarea activităţii de soluţionare a
              petiţiilor cu modificările ulterioare). Deasemenea mesajele care
              conţin cuvinte injurioase nu se iau în considerare. Petiţionarul
              îsi asumă întreaga responsabilitate pentru datele furnizate.
            </p>
            <p>
              Prin PETIŢIE se înţelege cererea, reclamaţia, sesizarea sau
              propunerea formulată în scris ori prin poşta electronică, pe care
              un cetăţean sau o organizaţie legal constituită o poate adresa
              autorităţilor şi instituţiilor publice centrale şi locale,
              serviciilor publice descentralizate ale ministerelor şi ale
              celorlalte organe centrale, companiilor si societăţilor naţionale,
              societăţilor comerciale de interes judeţean sau local, precum şi
              regiilor autonome, denumite în continuare autorităţi şi instituţii
              publice. (art. 2 din OG nr. 27/2002 privind reglementarea
              activităţii de soluţionare a petiţiilor cu modificările
              ulterioare).
            </p>
          </div>
          <div className="buttons--container">
            <button
              className="buttons button-cancel"
              onClick={() => closeModal(false)}
            >
              Cancel
            </button>
            <button
              className="buttons button-send"
              onClick={() => alert("SEND")}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ApproveModal;
