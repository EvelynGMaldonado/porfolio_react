import '../styles/AboutMe.css';
const styles ={
    contentStyles: {
        maxWidth:"100%",
    },
};

const AboutMe = () => {
    return (
        <div className="card mb-3 content" style={styles.contentStyles}>
            <div className="row no-gutters">
                <div className="col-md-4 content-section" id="about-me">
                    <h2 className="text-center mt-3">About me</h2>
                </div>
                <div className="col-md-8">
                    <div className="card-body rounded" id="background">
                        <p className="card-text">The About Me or Profile section of your portfolio, is a short summary about yourself in relation to the type of role you are applying for. 
                In the sample portfolio, the student has highlighted their program, the projects they’ve worked on and their specific area of interest in their field.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutMe;