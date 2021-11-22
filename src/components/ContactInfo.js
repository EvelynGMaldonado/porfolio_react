import React from 'react';
import "../styles/ContactInfo.css";


const ContactInfo = () => {
    return (
        <div class="card mb-3 content" style="max-width:100%;">
        <div class="row no-gutters">
            <div class="col-md-4 content-section" id="contact-me">
                <h2 class="text-center mt-3">Contact me</h2>
            </div>
            <div class="col-md-8">
            <div class="card-body contact-section rounded">
                <ul>
                    <li><strong> Email:</strong> <a href="#">evelyn.gmaldonado@gmail.com</a></li>
                    <li><strong>GitHub:</strong> <a href="#">EvelynGMaldoando</a></li>
                    <li><strong> Phone number:</strong> <a href="#">206 399 7452</a></li>
                    <li><strong>Resume:</strong> <a href="#">Coming soon!</a></li>
                </ul>
            </div>
            </div>
        </div>
        </div>

    );
}

export default ContactInfo;