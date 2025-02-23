import React from "react";

const WhatsAppButton = ({
    whatsappNumber = "6285782744366",
    buttonColor = "#25D366",
    position = "right",
}) => {
    const buttonStyle = {
        position: "fixed",
        bottom: "20px",
        [position]: "20px",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "50px",
        backgroundColor: buttonColor,
        color: "#fff",
        textDecoration: "none",
        fontSize: "24px",
        borderRadius: "50%",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    };

    return (
        <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp Logo"
                style={{ width: "30px", height: "30px" }}
            />
        </a>
    );
};

export default WhatsAppButton;
