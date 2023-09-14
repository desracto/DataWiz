import Header1 from "../components/Header1"
import React from 'react';


export default function LandingPage() 
{
    return (
        <>
            <Header1 />
            <div className="LandingPage" style={{ width: '100%', height: '100vh', opacity: '0.95', position: 'relative' }}>
                 {/* Intro Card */}
                <div className="flex relative">
                    <div className="IntroCard" style={{ width: '100%', height: '1000px', backgroundColor: 'rgba(102, 61, 121, 0.3)', position: 'absolute', top: '400px' }}>
                        <div className="Ellipse" style={{ position: 'absolute', top: '13%', left: '11%', transform: 'translateX(-50%)', width: '650px', height: '650px', backgroundColor: '#663D79', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img
                                src={process.env.PUBLIC_URL + '/images/DataWiz-Logo.png'}
                                alt="DataWiz Logo"
                                style={{ maxWidth: '80%', maxHeight: '80%' }} // Adjust the values as needed
                            />
                        </div>

                        <div className="IntroText" style={{ position: 'absolute', left: 'calc(10% + 500px)', top: '11%' }}>
                            <span style={{ color: 'white', fontSize: '5rem', fontWeight: 'bold', lineHeight: '1.5' }}>
                                Welcome to DataWiz: Unleash the Power of SQL Learning!<br /></span>

                            <div style={{ border: 'solid transparent', margin: '20px 0' }} /> {/* Transparent line */}
                            <span style={{ color: 'white', fontSize: '3.5rem', fontWeight: '600', lineHeight: '1.5' }}>
                                DataWiz is your gateway to mastering SQL effortlessly. Whether you're a curious learner or an educator looking for efficient teaching tools, DataWiz has something for everyone. Explore the world of interactive query animation and auto-grading quizzes for an engaging learning experience.</span>
                        </div>

                    {/* Login/SignUp Buttons */}
                    <div style={{ display: 'flex', position: 'absolute', left: 'calc(30% + 500px)', marginTop: '17%' }}>
                        <button className="LoginButton" style={{ width: 400, height: 180, background: '#8A5A8E', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 10, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="Login" style={{ color: 'white', fontSize: '4rem', fontFamily: 'Poppins', fontWeight: 'bold', wordWrap: 'break-word' }}>Login</div>
                        </button>

                        <button className="SignUpButton" style={{ width: 400, height: 180, background: '#8A5A8E', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 10, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '5%' }}>
                        <div className="SignUp" style={{ color: 'white', fontSize: '4rem', fontFamily: 'Poppins', fontWeight: 'bold', wordWrap: 'break-word' }}>Sign Up</div>
                        </button>
                    </div> {/* Login/SignUp Buttons */}

                    </div>
                </div> {/* Intro Card */}

                {/* Features Card */}
                <div className="flex relative top" style={{ top: 'calc(20% + 400px)' }}>
                    <div className="FeaturesCard" style={{ width: '100%', height: 2000, backgroundColor: 'rgba(102, 61, 121, 0.2)', position: 'absolute', top: 'calc(30% + 400px)' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '1%' }}>
                            <div className="Features" style={{ color: 'white', fontSize: '7rem', fontWeight: 'bold', wordWrap: 'break-word' }}>Features.</div>
                            <div className="ForLearners" style={{ color: 'white', fontSize: '5rem', fontWeight: 'bold', wordWrap: 'break-word' }}>For Learners.</div>
                        </div>

                        {/* Learners Features */}
                        <div className="ForLearnersCard" style={{ width: '100%', height: 1200, background: 'white', boxShadow: '0px 4px 50px rgba(0, 0, 0, 0.25)' , position: 'absolute', top: '16%'}}>
                            <img className="SchemaSelectionLogo" style={{ width: '424px', height: '286px', position: 'absolute', left: '100px', top: '5%' }} src={process.env.PUBLIC_URL + '/images/Schema-Selection-Logo.png'} alt="Schema Selection Logo" />
                            <div style={{ width: 1500, height: '20px', left: '600px', top: '5%', position: 'absolute', textAlign: 'left', color: '#5C5959', fontSize: '3.5rem', fontWeight: 'bold' }}>
                                Schema Selection for Query Animation
                            </div>
                            <div style={{ width: '80%', height: '10%', left: '600px', top: '15%', position: 'absolute', textAlign: 'left', color: '#5C5959', fontSize: '3.5rem', fontWeight: 'normal', lineHeight: '1.5' }}>
                            Begin your SQL journey by selecting from our diverse range of 5 schemas, and witness the power of interactive query animation. Write a query on your chosen schema, and DataWiz will reveal every intricate step inside the database, guiding you to the final result set. For future reference, you have the option to either download the animation as a PDF or conveniently save it within the "Saved Query Animation" feature.
                            </div>

                            <div style={{ backgroundImage: 'linear-gradient(to right, #20002c, #cbb4d4)', margin: '600px auto', height: '14px', width: '90%', borderRadius: '7px' }} /> {/* Colored line */}


                            <img className="SavedQueryAnimationsLogo" style={{ width: '410px', height: '340px', position: 'absolute', left: '87.5%', top: '60%' }} src={process.env.PUBLIC_URL + '/images/Saved-Query Animations-Logo.png'} alt="Schema Selection Logo" />
                            <div style={{ width: '80%', height: '20px', left: '5%', top: '55%', position: 'absolute', textAlign: 'right', color: '#5C5959', fontSize: '3.5rem', fontWeight: 'bold' }}>
                                Saved Query Animations
                            </div>
                            <div style={{ width: '80%', height: '10%', left: '5%', top: '65%', position: 'absolute', textAlign: 'right', color: '#5C5959', fontSize: '3.5rem', fontWeight: 'normal', lineHeight: '1.5' }}>
                            Never lose your valuable query animations with our efficient saving system. Access and manage all your previously animated queries in one organized location. Re-view and analyze previous animations with ease, and if you need to make any adjustments or updates, editing is just a click away. Once you're satisfied with the modifications, feel free to re-save or download the animation for your records.
                            </div>
                        </div>{/* Learners Features */}

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '31.5%' }}>
                            <div className="ForInstructors" style={{ color: 'white', fontSize: '5rem', fontWeight: 'bold', wordWrap: 'break-word' }}>For Instructors.</div>
                        </div>

                        {/* Instructors Features */}
                        <div className="ForInstructorsCard" style={{ width: '100%', height: 1200, background: 'white', boxShadow: '0px 4px 50px rgba(0, 0, 0, 0.25)' , position: 'absolute', top: '87%'}}>
                            <img className="CreateQuizLogo" style={{ width: '343px', height: '435px', position: 'absolute', left: '140px', top: '5%' }} src={process.env.PUBLIC_URL + '/images/Create-Quizzes-Logo.png'} alt="Create Quizzes" />
                            <div style={{ width: 1500, height: '20px', left: '600px', top: '5%', position: 'absolute', textAlign: 'left', color: '#5C5959', fontSize: '3.5rem', fontWeight: 'bold' }}>
                            Create Quiz
                            </div>
                            <div style={{ width: '80%', height: '10%', left: '600px', top: '15%', position: 'absolute', textAlign: 'left', color: '#5C5959', fontSize: '3.5rem', fontWeight: 'normal', lineHeight: '1.5' }}>
                            Empower your teaching experience with our user-friendly quiz creation tool, which allows you to craft engaging quizzes for your students. Add, edit, and arrange quiz questions and their solutions to ensure a comprehensive learning experience. Our powerful "Configure Filters" feature provides you the flexibility to fine-tune the quiz to match your unique teaching requirements, ensuring an effective assessment process.
                            </div>

                            <div style={{ backgroundImage: 'linear-gradient(to right, #20002c, #cbb4d4)', margin: '600px auto', height: '14px', width: '90%', borderRadius: '9px' }} /> {/* Colored line */}

                            <img className="SavedQuizzesLogo" style={{ width: '410px', height: '340px', position: 'absolute', left: '87.5%', top: '60%' }} src={process.env.PUBLIC_URL + 'images/Saved-Quizzes-Logo.png'} alt="Saved Quizzes" />
                            <div style={{ width: '80%', height: '20px', left: '5%', top: '55%', position: 'absolute', textAlign: 'right', color: '#5C5959', fontSize: '3.5rem', fontWeight: 'bold' }}>
                                Saved Quizzes
                            </div>
                            <div style={{ width: '80%', height: '10%', left: '5%', top: '65%', position: 'absolute', textAlign: 'right', color: '#5C5959', fontSize: '3.5rem', fontWeight: 'normal', lineHeight: '1.5' }}>
                                Effortlessly manage your saved quizzes in one convenient location, ensuring easy access and review. Our intuitive interface allows you to make updates, revisit questions and solutions, and generate new quiz links seamlessly. Enhance your teaching experience with streamlined quiz management, saving time for more impactful interactions.
                            </div>
                        </div> {/* Instructors Features */}
                    </div>
                </div> {/* Features Card */}

                {/* Meet The Team Card */}
                <div className="MeetTheTeamCard" style={{ width: '100%', height: 2100, backgroundColor: 'rgba(102, 61, 121, 0.3)', position: 'absolute', top: 'calc(90% + 900px)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '10%', marginTop: '1%' }}>
                        <div className="MeetTheTeam" style={{ color: 'white', fontSize: '7rem', fontWeight: 'bold', wordWrap: 'break-word' }}>Meet The Team.</div>
                    </div>

                    <div className="Ellipse" style={{ position: 'absolute', top: '15%', left: '25%', transform: 'translateX(-50%)', width: '650px', height: '650px', backgroundColor: '#D9D9D9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img
                                src={process.env.PUBLIC_URL + '/images/TehamiChar.png'}
                                alt="Tehami Char"
                                style={{ width: '201.45', height: '251' }} // Adjust the values as needed
                            />
                    </div>
                    <div style={{ width: 700, height: '20px', top: '50%', left: '17%', position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: '3.5rem', fontWeight: 'bold' }}>
                        Muhammad Tehami Nadeem 
                    </div>

                    <div className="Ellipse" style={{ position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)', width: '650px', height: '650px', backgroundColor: '#D9D9D9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img
                                src={process.env.PUBLIC_URL + '/images/HibaChar.png'}
                                alt="Hiba Char"
                                style={{ maxWidth: '80%', maxHeight: '80%' }} // Adjust the values as needed
                            />
                    </div>
                    <div style={{ width: 700, height: '20px', top: '50%', left: '42%', position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: '3.5rem', fontWeight: 'bold' }}>
                        Hiba Ali Gohar 
                    </div>


                    <div className="Ellipse" style={{ position: 'absolute', top: '15%', left: '75%', transform: 'translateX(-50%)', width: '650px', height: '650px', backgroundColor: '#D9D9D9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img
                                src={process.env.PUBLIC_URL + '/images/RidaChar.png'}
                                alt="Rida Char"
                                style={{ maxWidth: '80%', maxHeight: '80%' }} // Adjust the values as needed
                            />
                    </div>
                    <div style={{ width: 700, height: '20px', top: '50%', left: '67%', position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: '3.5rem', fontWeight: 'bold' }}>
                        Rida Fatima Asif 
                    </div>

                    <div className="Ellipse" style={{ position: 'absolute', top: '58%', left: '37.5%', transform: 'translateX(-50%)', width: '650px', height: '650px', backgroundColor: '#D9D9D9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img
                                src={process.env.PUBLIC_URL + '/images/NihalChar.png'}
                                alt="Nihal Char"
                                style={{ maxWidth: '80%', maxHeight: '80%' }} // Adjust the values as needed
                            />
                    </div>
                    <div style={{ width: 700, height: '20px', top: '90%', left: '29.5%', position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: '3.5rem', fontWeight: 'bold' }}>
                        Mohammad Nihal Kattakath 
                    </div>

                    <div className="Ellipse" style={{ position: 'absolute', top: '58%', left: '62.5%', transform: 'translateX(-50%)', width: '650px', height: '650px', backgroundColor: '#D9D9D9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img
                                src={process.env.PUBLIC_URL + '/images/EjazChar.png'}
                                alt="Ejaz Char"
                                style={{ maxWidth: '80%', maxHeight: '80%' }} // Adjust the values as needed
                            />
                    </div>
                    <div style={{ width: 700, height: '20px', top: '90%', left: '54.5%', position: 'absolute', textAlign: 'center', color: '#D9D9D9', fontSize: '3.5rem', fontWeight: 'bold' }}>
                        Mohammed Ejaz Chowdhury 
                    </div>




                </div>{/* Meet The Team Card */}

            </div>
        </>
    )
}

