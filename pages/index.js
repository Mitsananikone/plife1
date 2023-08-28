import LandingPage from './home/page'

import LandingPopup from '@/components/landing/page';


export default function Home() {
    return (
        
        <LandingPopup/>
     <div style={{display: 'flex', alignItems: 'center', justifyItems: 'center'}}> 
         
             <LandingPage /> 
     
        </div>
        </>
    );
}
