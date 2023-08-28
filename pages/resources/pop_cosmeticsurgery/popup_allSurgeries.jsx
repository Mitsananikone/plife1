/** @format */

import React, { useState, useEffect, useRef } from "react";
import styles from "./popup_allSurgeries.module.css";
import CosmeticSurgeryCard from "@/components/cosmeticSurgeryInfo/cosmeticSurgeryCard";
import { BreastImplantInfo } from "@/components/cosmeticSurgeryInfo/breastImplant/breastImplant";


import BreastLiftInfo from "@/components/cosmeticSurgeryInfo/breastLift/breastLift";
import BreastReductionInfo from "@/components/cosmeticSurgeryInfo/breastReduction/breastReduction";
import FaceliftInfo from "@/components/cosmeticSurgeryInfo/faceLift/faceLift";
import LiposuctionInfo from "@/components/cosmeticSurgeryInfo/liposuction/liposuction";
import TransitionInfo from "@/components/cosmeticSurgeryInfo/transition/transition";
import RhinoplastyInfo from "@/components/cosmeticSurgeryInfo/rhinoplasty/rhinoplasty";
import TummyTuckInfo from "@/components/cosmeticSurgeryInfo/tummyTuck/tummyTuck";

function PopupAllSurgeries({ isPopupVisible, onClose, selectedProcedure }) {
  const popupRef = useRef(null);
  const surgeriesPopupRef = useRef(null);

  const [selectedNavProcedure, setSelectedNavProcedure] =
    useState(selectedProcedure);

  useEffect(() => {
    setSelectedNavProcedure(selectedProcedure);
  }, [selectedProcedure]);

  const handleProcedureSelect = (procedureType) => {
    setSelectedNavProcedure(procedureType);
  };

  const getProcedureComponent = (procedure) => {
    const components = {
      breastImplant: BreastImplantInfo,
      breastLift: BreastLiftInfo,
      breastReduction: BreastReductionInfo,
      faceLift: FaceliftInfo,
      liposuction: LiposuctionInfo,
      trans: TransitionInfo,
      rhinoplasty: RhinoplastyInfo,
      tummyTuck: TummyTuckInfo,
    };

    return components[procedure] || null;
  };

  const ProcedureInfoComponent = getProcedureComponent(selectedNavProcedure);

  const handleClosePopup = () => {
    onClose();
  };

  const popupHeight = surgeriesPopupRef.current?.clientHeight;

  return (
    <div
    className={
      isPopupVisible ? styles.popupContainerFull : styles.popupContainerHidden
    }
  >
    <div ref={surgeriesPopupRef} className={styles.popupContainer}>
      <div className={styles.popup_navMenu}>
        <CosmeticSurgeryCard
          onProcedureSelect={handleProcedureSelect}
          selectedProcedure={selectedNavProcedure}
        />
      </div>

      <div
        className={styles.popup_info}
        style={{ maxHeight: "90vh", overflowY: "auto" }} // Adjust maxHeight as needed
      >
        {ProcedureInfoComponent && (
          <ProcedureInfoComponent containerHeight={popupHeight} />
        )}
      </div>

      <button onClick={handleClosePopup} className={styles.closePopup}>
        x
      </button>
    </div>
  </div>
);
}

export default PopupAllSurgeries;

// {
//   selectedNavProcedure === "breastLift" && <BreastLiftInfo />;
// }
// {
//   selectedNavProcedure === "breastReduction" && <BreastReductionInfo />;
// }
// {
//   selectedNavProcedure === "faceLift" && <FaceliftInfo />;
// }
// {
//   selectedNavProcedure === "liposuction" && <LiposuctionInfo />;
// }
// {
//   selectedNavProcedure === "trans" && <TransitionInfo />;
// }
// {
//   selectedNavProcedure === "rhinoplasty" && <RhinoplastyInfo />;
// }
// {
//   selectedNavProcedure === "tummyTuck" && <TummyTuckInfo />;
// }
