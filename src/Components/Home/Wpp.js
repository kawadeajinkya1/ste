
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import logo from '../../Assets/stelogo.jpg';

export default function Wpp() {
    return (
        <div className="App">
            <FloatingWhatsApp
                phoneNumber="9762439208"
                accountName="Sachin Tools Engineering"
                avatar={logo}
                chatMessage="Please feel free to ask your tools and engineering related questions, and I'll provide detailed responses here."
                allowEsc
                allowClickAway
                notification
                notificationSound
            />
        </div>
    );
}