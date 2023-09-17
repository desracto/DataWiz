import "./Header2.css";

export default function Header2() 
{
    return (
        <div className="flex">
            <div className="Ellipse">
            <img
                src={process.env.PUBLIC_URL + '/images/DataWiz-Logo.png'}
                alt="DataWiz Logo"
                style={{ maxWidth: '70%', maxHeight: '70%' }} // Adjust the values as needed
            />
            </div>
            <div className="Datawiz w-96 h-28">
            <span style={{ color: 'white', fontSize: '10rem', fontWeight: 'bold' }}>Data</span>
            <span style={{ color: 'white', fontSize: '10rem', fontWeight: 'normal' }}>Wiz.</span>
            </div>
            <div className="NavBarContainer">
                <div className="NavBarCard">
                    <img
                        src={process.env.PUBLIC_URL + '/images/HomeIcon.png'}
                        alt="Home Icon"
                        style={{ maxWidth: '150px', maxHeight: '150px' }} 
                    />
                    <button className="NavBar-HOME-Button">Home</button>

                    <img
                        src={process.env.PUBLIC_URL + '/images/AnimationIcon.png'}
                        alt="Animation Icon"
                        style={{ maxWidth: '150px', maxHeight: '150px' }} 
                    />
                    <button className="NavBar-ANI-Button">Animation</button>

                    <img
                        src={process.env.PUBLIC_URL + '/images/QuizzesIcon.png'}
                        alt="Quizzes Icon"
                        style={{ maxWidth: '150px', maxHeight: '150px' }} 
                    />
                    <button className="NavBar-QUIZZES-Button">Quizzes</button>
                    
                    <img
                        src={process.env.PUBLIC_URL + '/images/FAQsIcon.png'}
                        alt="Faqs Icon"
                        style={{ maxWidth: '150px', maxHeight: '150px' }} 
                    />
                    <button className="NavBar-FAQS-Button">FAQs</button>

                    <img
                        src={process.env.PUBLIC_URL + '/images/SettingsIcon.png'}
                        alt="Settings Icon"
                        style={{ maxWidth: '150px', maxHeight: '150px' }} // Adjust the values as needed
                    />
                    <button className="NavBar-SETTINGS-Button">Settings</button>
                </div>
            </div>
        </div>
    )
}