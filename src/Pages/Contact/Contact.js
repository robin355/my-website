import React from 'react';
import Address from '../Home/Address/Address';
import ContactAddress from './ContactAddress';
import ContactBanner from './ContactBanner';
import GoogleMap from './Map/GoogleMap';

const Contact = () => {
    return (
        <div>
            <ContactBanner></ContactBanner>
            <ContactAddress></ContactAddress>
            <GoogleMap></GoogleMap>
            <Address></Address>
        </div>
    );
};

export default Contact;