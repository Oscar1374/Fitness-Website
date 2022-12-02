import { Route, Routes } from "react-router-dom";
import React from "react";
import "./Profile.css";
import Templates from "./Templates";
import Popup from "./Popup";
import { useState, useEffect } from "react";
import Startpopup from "./Startpopup";
import Modal from "./Modal";

function Profile() {
  const [openModal, setOpenModal] = useState(false);
  const [buttonStartpopup, setButtonStartpopup] = useState(false);
  const [onOpenStart] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      <div>
        <button onClick={() => setOpenModal(true)}></button>
        <Modal open={openModal} />
      </div>
      <header>
        profile
        <h3 className="strtwrkt">Start Workout</h3>
        <h4>
          <button
            onClick={() => setButtonPopup(true)}
            type="button"
            text="text"
            className="startworkout"
          >
            Start an Empty Workout
          </button>
          <Startpopup
            trigger={buttonStartpopup}
            setTrigger={setButtonStartpopup}
          >
            <h1>Start Workout</h1>
          </Startpopup>
        </h4>
      </header>

      <h1 className="h1temp">
        Templates
        <main>
          <button
            onClick={() => setButtonPopup(true)}
            type="button"
            text="text"
            className="addTemplate"
          >
            +Template
          </button>
        </main>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h1>Select Folder</h1>
          <p>None(No folder)</p>
        </Popup>
        <button type="button" text="text" className="Folder">
          <i className="medium material-icons">create_new_folder</i>
        </button>
      </h1>
      <h2>
        My Templates (0)
        <button type="button" text="text" className="more">
          <i className="medium material-icons">more_horiz</i>
        </button>
      </h2>

      
        <h3 className="template">
          <button
            onClick={() => setOpenModal(true)}
            type="button"
            text="text"
            className="newTemplate"
          >
            Tap to Add New Template
          </button>
          <a class="waves-effect waves-light btn modal-trigger" href="#modal1">
            Modal
          </a>

          <Modal open={openModal} />

          <div id="modal1" className="modal">
            <div className="modal-content">
              <h4>New Template</h4>
              <h1>Template name</h1>
              <p>Notes</p>
            </div>
            <div className="modal-footer">
              <a
                href="#!"
                className="modal-close waves-effect waves-green btn-flat"
              >
                Add Exercises
              </a>
            </div>
          </div>
        </h3>
        <h4 className="exmpTemps">
          Example Templates (1)
          <button type="button" text="text" className="more">
            <i className="medium material-icons">more_horiz</i>
          </button>
        </h4>
        <h6>
          <Templates />
        </h6>
      
    </div>
  );
}

export default Profile;
