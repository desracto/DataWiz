import "./Header2.css";

export default function Header2() 
{
    return (
        <div className="flex">
            <div className="LogoBrandContainer">
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
            </div>

            <div className="NavBarContainer">
                <div className="NavBarCard">
                    <div className="buttonContainer">
                        <img
                        src={process.env.PUBLIC_URL + '/images/HomeIcon.png'}
                        alt="Home Icon"
                        className="iconImage"
                        />
                        <button className="NavBar-HOME-Button">Home</button>
                    </div>

                    <div className="buttonContainer">
                        <img
                        src={process.env.PUBLIC_URL + '/images/AnimationIcon.png'}
                        alt="Animation Icon"
                        className="iconImage"
                        />
                        <button className="NavBar-ANI-Button">Animation</button>
                    </div>

                    <div className="buttonContainer">
                        <img
                        src={process.env.PUBLIC_URL + '/images/QuizzesIcon.png'}
                        alt="Quizzes Icon"
                        className="iconImage"
                        />
                        <button className="NavBar-QUIZZES-Button">Quizzes</button>
                    </div>

                    <div className="buttonContainer">
                        <img
                        src={process.env.PUBLIC_URL + '/images/FAQsIcon.png'}
                        alt="Faqs Icon"
                        className="iconImage"
                        />
                        <button className="NavBar-FAQS-Button">FAQs</button>
                    </div>

                    <div className="buttonContainer">
                        <img
                        src={process.env.PUBLIC_URL + '/images/SettingsIcon.png'}
                        alt="Settings Icon"
                        className="iconImage"
                        />
                        <button className="NavBar-SETTINGS-Button">Settings</button>
                    </div>
                </div>
            </div>
        </div>
    )
}