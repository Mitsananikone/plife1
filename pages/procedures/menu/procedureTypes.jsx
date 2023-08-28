/** @format */

import React, { useState, useEffect } from "react";
import TreatmentCard from "@/components/treatmentCard/treatmentCard";
import styles from "./procedureTypes.module.css";
import PopupAllSurgeries from "@/pages/resources/pop_cosmeticsurgery/popup_allSurgeries";

export default function ProcedureTypes() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedProcedure, setSelectedProcedure] = useState(null);

  const handleClick = (procedureType) => {
    console.log("Clicked on:", procedureType);
    setSelectedProcedure(procedureType);
    setIsPopupVisible(true);
};

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className={styles.procedureContainer}>
      <h1>VIEW PROCEDURES AND TREATMENTS</h1>
      <div className={styles.bothGroups}>
        <div className={styles.tCardGroup1}>
          <TreatmentCard
            onClick={() => handleClick("breastImplant")}
            imageUrl="/images/types/breastImplant.png"
            description="BREAST IMPLANT"
            // className={styles.tCard}
          />
          <TreatmentCard
             onClick={() => handleClick("breastLift")}
            imageUrl="/images/types/breastLift.png"
            description="BREAST LIFT"
            // className={styles.tCard}
          />
          <TreatmentCard
             onClick={() => handleClick("breastReduction")}
            imageUrl="/images/types/breastReduction.png"
            description="BREAST REDUCTION"
            // className={styles.tCard}
          />
          <TreatmentCard
             onClick={() => handleClick("faceLift")}
            imageUrl="/images/types/faceLift.png"
            description="FACE LIFT"
            // className={styles.tCard}
          />
        </div>
        <div className={styles.tCardGroup2}>
          <TreatmentCard
             onClick={() => handleClick("liposuction")}
            imageUrl="/images/types/liposuction.png"
            description="LIPOSUCTION"
            // className={styles.tCard}
          />
          <TreatmentCard
             onClick={() => handleClick("trans")}
            imageUrl="/images/types/trans.png"
            description="GENDER TRANSITION"
            // className={styles.tCard}
          />
          <TreatmentCard
             onClick={() => handleClick("rhinoplasty")}
            imageUrl="/images/types/rhinoplasty.png"
            description="RHINOPLASTY"
            // className={styles.tCard}
          />
          <TreatmentCard
             onClick={() => handleClick("tummyTuck")}
            imageUrl="/images/types/tummyTuck.png"
            description="TUMMY TUCK"
            // className={styles.tCard}
          />
        </div>
      </div>
      {console.log("isPopupVisible: " + isPopupVisible)}

      <PopupAllSurgeries
    className={isPopupVisible ? "popup visible" : "popup"}
    isPopupVisible={isPopupVisible}
    onClose={() => setIsPopupVisible(false)}
    selectedProcedure={selectedProcedure}
/>
    </div>
  );
}
