import React from 'react';
import{Route, Switch} from 'react-router-dom';
//Components
import App from './components/App';
import Contact from './components/global/FooterComponets/Contact';
import Faqs from './components/global/FooterComponets/Faqs';
import Home from './components/global/HeaderComponents/Home';
import OurProducts from './components/global/HeaderComponents/OurProducts';
import Cart from './components/global/HeaderComponents/Cart';
import ShoppingCarts from './components/global/HeaderComponents/ShoppingCarts'
const AppRoutes=()=>
<App>
    <Switch>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faqs" component={Faqs} />
        <Route exact path="/products" component={OurProducts} />
        <Route exact path="/weather" component={Cart} />
        <Route exact path="/cart" component={ShoppingCarts} />
        <Route path="/" component={Home} />
      
    </Switch>
</App>

export default AppRoutes;