import React from 'react';
import '../styles/Work.css';


// const styles = {
//   sectionStyles: {
//     background: 'orange',
//   },
// };

// We use JSX curly braces to evaluate the style object on the JSX tag

const Work = () => {
  return (
    <div className="card mb-3 content" style="max-width:100%;">
        <div className="row no-gutters">
            <div className="col-md-4 content-section" id="work">
                <h2 className="text-center mt-3">Work</h2>
            </div>
            <div className="col-md-8">
                <div className="card-body rounded" id="background">
                    <div className="row">
                        <div className="card mb-3 text-white" id="image1" style="max-width:100%;">
                                <img class="card-img" src="https://prod-discovery.edx-cdn.org/media/programs/card_images/e0de6882-c5d1-43f3-99e0-17e386489dca-9c3bda2df48f.jpg" className="card-img-top" style="max-width:100%;" alt="Project1"/>
                            <a id="link1" href="https://github.com/EvelynGMaldonado/Project2" className="card-title">Let's play chess</a>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="card mb-3 text-white secondaryimage" id="image2" style="max-width:24%;">
                            <img className="card-img" src="https://www.gratistodo.com/wp-content/uploads/2016/10/imagenes-oto%c3%b1o-fondos-hd-gratis.jpg" className="card-img-top" style="max-width:100%;" alt="Project1"/>
                            <a id="link1" href="https://github.com/EvelynGMaldonado/tech_blog_MVC" className="card-title">Tech Blog MVC</a>
                        </div>
                        <div clasName="card mb-3 text-white secondaryimage" id="image3" style="max-width:24%;">
                            <img className="card-img" src="https://blablaocio.com/wp-content/uploads/sites/7/2017/01/EL-INVIERNO-ALEM%C3%81N-1-1024x640.jpg" className="card-img-top" style="max-width:100%;" alt="Project1"/>
                            <a id="link1" href="https://github.com/EvelynGMaldonado/password_generator" className="card-title">Password Generator</a>
                        </div>
                        <div className="card mb-3 text-white secondaryimage" id="image4" style="max-width:24%;">
                            <img className="card-img" src="https://www.gratistodo.com/wp-content/uploads/2017/02/Primavera-Wallpapers-15.jpg" className="card-img-top" style="max-width:100%;" alt="Project1"/>
                            <a id="link1" href="https://github.com/EvelynGMaldonado/weather_dashboard" className="card-title">Weather Dashboard</a>
                        </div>
                        <div className="card mb-3 text-white secondaryimage" id="image5" style="max-width:24%;">
                            <img className="card-img" src="https://image.freepik.com/foto-gratis/paisaje-palma-tropical-vacaciones-verano_1203-5352.jpg" className="card-img-top" style="max-width:100%;" alt="Project1"/>
                            <a id="link1" href="https://github.com/EvelynGMaldonado/Employee-tracker" className="card-title">Employee Managment System</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Work;
