import React from 'react'
import {Link} from "react-router-dom"

function Footer() {
    return (
        <div>
            <div class="client">
        <div class="container">
            <h4>What Client Say</h4>

            <div class="slider">
                <div id="blog-demo2" class="owl-carousel">

                    <div class="item">
                        <img src="images/coma.png" alt="" class="coma" />
                        <p>Lorem ipsum dolor sit amet, con
                            sectetur adipiscing elit. Fusce sed auctor tortor. Sed tempor maxi
                            mus lacus, non tempus magna. Aliquam sit amet ligula at felis ali
                            quam viverra ut sed elit. Pellen
                            tesque convallis, ex vel laoreet hendrerit, </p>

                        <div class="avter">
                            <img src="images/client.png" alt="" />
                            <h5>Jessy Thomas3 <span>CEO</span></h5>
                        </div>
                    </div>

                    <div class="item">
                        <img src="images/coma.png" alt="" class="coma" />
                        <p>Lorem ipsum dolor sit amet, con
                            sectetur adipiscing elit. Fusce sed auctor tortor. Sed tempor maxi
                            mus lacus, non tempus magna. Aliquam sit amet ligula at felis ali
                            quam viverra ut sed elit. Pellen
                            tesque convallis, ex vel laoreet hendrerit, </p>

                        <div class="avter">
                            <img src="images/client.png" alt="" />
                            <h5>Jessy Thomas3 <span>CEO</span></h5>
                        </div>
                    </div>

                    <div class="item">
                        <img src="images/coma.png" alt="" class="coma" />
                        <p>Lorem ipsum dolor sit amet, con
                            sectetur adipiscing elit. Fusce sed auctor tortor. Sed tempor maxi
                            mus lacus, non tempus magna. Aliquam sit amet ligula at felis ali
                            quam viverra ut sed elit. Pellen
                            tesque convallis, ex vel laoreet hendrerit, </p>

                        <div class="avter">
                            <img src="images/client.png" alt="" />
                            <h5>Jessy Thomas3 <span>CEO</span></h5>
                        </div>
                    </div>


                    {/* <!-- item end --> */}
                </div>
            </div>

        </div>
        {/* <!-- container end --> */}
    </div>

    {/* <!-- client end -->

    <!-- brand start --> */}

    <div class="brand">
        <div class="container">
            <img src="images/brands.png" class="img-fluid brands" alt="" />
        </div>
    </div>

    {/* <!-- brand end -->

    <!-- footer start --> */}

    <div class="footer">
        <div class="container">
            <div class="footer-row">
                <div class="footer1">
                    <Link  to="/" class="footer-logo"><img src="images/footer-logo.png" class="img-fluid"
                            alt="" /></Link>
                    <p>Lorem ipsum dolor sit amet,scing elit. Fusce sed auctor tortor.</p>
                    <ul>
                        <li><Link to="/"><i class="fa fa-brands fa-facebook-f"></i></Link></li>
                        <li><Link to="/"><i class="fa fa-brands fa-twitter"></i></Link></li>
                        <li><Link to="/"><i class="fa fa-brands fa-google-plus-g"></i></Link></li>
                        <li class="last"><Link to="/"><i class="fa fa-brands fa-pinterest-p"></i></Link></li>
                    </ul>
                </div>
                <div class="footer2">
                    <h4>SERVICES</h4>
                    <ul>
                        <li><Link to="/">Stairlifts</Link></li>
                        <li><Link to="/">Mobility Scooters</Link></li>
                        <li class="last"><Link to="/">Riser Recliner Chairs</Link></li>
                    </ul>
                </div>
                <div class="footer2 footer3">
                    <h4>LIMERICK</h4>
                    <ul>
                        <li>Unit 30, Eastlink Business Park, Ballysimon Road, Limerick -> Get Directions.</li>
                        <li class="last">Phone: 061 294529 / 087 0523698</li>
                    </ul>
                </div>
                <div class="footer2 footer3">
                    <h4>TIPPERARY</h4>
                    <ul>
                        <li>1 Bridge Street, Tipperary Town, Co. Tipperary -> Get Directions.</li>
                        <li class="last">Phone: 062 33975 / 087 0523698</li>
                    </ul>
                </div>
            </div>
            {/* <!-- main end --> */}
        </div>
        {/* <!-- container end --> */}
    </div>

    {/* <!-- footer end -->

    <!-- copy start --> */}

    <div class="copy">
        <div class="container">
            <p>© Adapted Living 2020 </p>
        </div>
    </div>
        </div>
    )
}

export default Footer
