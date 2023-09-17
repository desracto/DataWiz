import React from 'react';  
/* import { Grid, Link } from 'semantic-ui-react';  */

export default function Footer() {
    return (
        <div className="footer-container"> 
            <div className="body"> 
                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column computer={6} mobile={16}>
                            <div className="logo"> {/* Use your own CSS class */}
                                <h1><b>Pellerex</b></h1>
                                <div>
                                    <a href="mailto:info@pellerex.com" target="_blank" rel="noopener noreferrer">
                                        <img src={'https://cdn.pellerex.com/public/ecosystem/web/home/pellerex-email.svg'} alt="Email link to send a message to DataWiz." />
                                    </a>
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column computer={5} mobile={16}>
                            <div className="links"> {/* Use your own CSS class */}
                                <div className="title">LINKS</div> {/* Use your own CSS class */}
                                <div className="policies">Use of our platform is subject to <br />our <Link to="/terms">terms</Link> and <Link to="/policies">policies.</Link></div>
                                <a href="/contact-us">Contact Us</a>
                            </div>
                        </Grid.Column>
                        <Grid.Column computer={5} mobile={16}>
                            <div className="notices"> {/* Use your own CSS class */}
                                <p className="title">NOTICES</p> {/* Use your own CSS class */}
                                <div className="copyRight"> {/* Use your own CSS class */}
                                    Copyright © <a href="https://technologyleads.io" target="_blank" rel="noopener noreferrer">Technology Leads</a> {new Date().getFullYear()}.
                                    <br /> All rights reserved.
                                </div>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    );
}
