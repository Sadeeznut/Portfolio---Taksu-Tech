import React from "react";

interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
    const buttonClasses = active
        ? "text-[#1c1c1c] border-b border-black"
        : "text-[#1c1c1c]";
    return (
        <button onClick={selectTab} className={buttonClasses}>
            <p className="mr-3 font-semibold hover:text-[#147CE5]">{children}</p>
        </button>
    );
};

export default TabButton;