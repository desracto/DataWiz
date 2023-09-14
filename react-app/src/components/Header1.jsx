export default function Header1() 
{
    return (
        <div className="flex">
            <div className="Datawiz w-96 h-28" style={{ position: 'absolute', top: '55px', left: '111px' }}>
                <span style={{ color: 'white', fontSize: '10rem', fontWeight: 'bold' }}>Data</span>
                <span style={{ color: 'white', fontSize: '10rem', fontWeight: 'normal' }}>Wiz.</span>
            </div>
            <div className="ColorBar w-723 h-12 relative flex items-center top-[170px] left-[850px]">
                <div className="Rectangle2 w-96 h-9 left-0 top-0 absolute bg-[#422660] rounded-2xl" />
                <div className="Rectangle2 w-96 h-9 left-[243.93px] top-0 absolute bg-[#663D79] rounded-2xl" />
                <div className="Rectangle2 w-96 h-9 left-[507.06px] top-0 absolute bg-[#8A5A8E] rounded-2xl" />
                <div className="Rectangle2 w-96 h-9 left-[781.71px] top-0 absolute bg-[#A67CA2] rounded-2xl" />
                <div className="Rectangle2 w-96 h-9 left-[1064.05px] top-0 absolute bg-[#BEA3B6] rounded-2xl" />
                <div className="Rectangle2 w-72 h-9 left-[1304.14px] top-0 absolute bg-[#D6D0D2] rounded-2xl" />
            </div>
        </div>
    )
}