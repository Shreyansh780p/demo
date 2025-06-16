import Header from "../components/Header/Header";

const HomePage = () => {
    return(
        <div>
            <Header/>
            <center>
                 <h1>Welcome To Vivekanand College</h1>
                 <p><b>Your journey to excellence starts here.</b></p>
            </center>
            <p>Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential.</p>

            <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
            <h2>Why Choose Vivekanand College?</h2>
            <ul>
            <li><b>Legacy of Excellence</b>: Decades of commitment to quality education.</li>
            <li><b>Experienced Faculty</b>: Learn from renowned experts and passionate educators.</li> 
            <li><b>Modern Facilities</b>: Well-equipped labs, expansive library, and comfortable campus.</li>
            <li>Holistic Development: Focus on co-curricular activities, sports, and community service.</li>
            <li>Strong Placements: Excellent career opportunities with leading companies.</li>
            </ul>
            <h2>Campus Life & Facilities</h2>
            <div class="image-gallery">
                <img alt="vivekanad college kolhapur" src="C:\Users\patil\OneDrive\Pictures\whatsapp image 2025-05-15 at 10.31.26 am.jpeg"></img>
                <img alt="vivekanand college campus" src="C:\Users\patil\OneDrive\Pictures\images.jpg"></img>
            </div>
            <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
            <div class="call-to-action">
                <center>
                <p>Ready to explore our courses.?</p>
                <a class="btn" href="/courses" data discover="true">Explore courses</a>
                </center>
            </div>
        </div>
    )
}

export default HomePage;