import LandingPage from './home/page'
import AboutPage from './about/page';
import ProcedurePage from './procedures/surgeryMovingHighlight';
import TreatmentCard from '@/components/treatmentCard/treatmentCard';
import ProcedureTypes from './procedures/menu/procedureTypes';
import CosmeticSurgeryPage from './resources/pop_cosmeticsurgery/popup_allSurgeries';
import CosmeticSurgeryCard from '@/components/cosmeticSurgeryInfo/cosmeticSurgeryCard';
import BreastImplantInfo from '@/components/cosmeticSurgeryInfo/breastImplant/breastImplant';
import LandingPopup from '@/components/landing/page';
import MotionTest from '@/components/motionTest';

export default function Home() {
    return (
        //  <div className="container">
        <>
        <LandingPopup/>
     <div className="full-flex-centered"> 
            {/* <ProcedureTypes/> */}
            {/* <CosmeticSurgeryPage/>
<BreastImplantInfo/> */}
            <MotionTest/>
            {/* <LandingPage /> */}
     
            {/* <AboutPage/>
            <ProcedurePage/> */}
           

            {/* </div> */}
        </div>
        </>
    );
}
