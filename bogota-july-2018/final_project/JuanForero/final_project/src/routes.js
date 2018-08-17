import React from 'react';
import{Route, Switch} from 'react-router-dom';
//Components
import App from './components/App';
import Contact from './components/global/FooterComponets/Contact';
import Faqs from './components/global/FooterComponets/Faqs';
const AppRoutes=()=>
<App>
    <Switch>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faqs" component={Faqs} />
    </Switch>
</App>

export default AppRoutes;