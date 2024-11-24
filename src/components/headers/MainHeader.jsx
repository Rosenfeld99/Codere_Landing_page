import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const MainHeader = () => {
    // Menu options
    const menu = [
        { name: "JACKPOTS", route: "#JACKPOTS" },
        { name: "JACKPOTS", route: "#JACKPOTS" },
        { name: "JACKPOTS", route: "#JACKPOTS" },
        { name: "JACKPOTS", route: "#JACKPOTS" },
        { name: "JACKPOTS", route: "#JACKPOTS" },
    ];

    return (
        <div className="bg-[#79C000]">
            {/* Desktop Header */}
            <DesktopHeader menu={menu}/>

            {/* Mobile Header */}
            <MobileHeader menu={menu}/>
        </div>
    );
};

export default MainHeader;
