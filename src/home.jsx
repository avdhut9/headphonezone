import { Allroutes } from './Allroutes';

import { Footer } from './footer';
import { Headphones } from './headphones';
import { Music } from './music';
import { Navbar } from './navbar';
import { Bajaj } from './simpl and bajajfin.';
import { Slider } from './slider1';
import { Journy } from './startyourjourny';

function Home(){
    return(
        <div>
    <Navbar/>
    <Slider/>
    <Journy/>
    <Music/>
    <Bajaj/>
    <Headphones/>
    <Footer/>
        </div>
    )
}
export{Home}