import React, { useState } from "react";

import CopiedIcon from "../../src/images/copied.png";
import CopyIcon from "../../src/images/copyicon.svg";
import "./style.css";

const CodeBlock = ({
    title,
    codeText,
    copyRef,
    textColor = false,
    animation = false,
    customStyle = {},
}) => {
    const [copied, setCopied] = useState(false);
    return (
        <>
            {title && (
                <div className="quickStartCodeRow">
                    <h4
                        className={`lblOfQuickStartCodeRow ${
                            textColor != false ? "commandColor" : ""
                        }`}
                    >
                        {title}
                    </h4>
                </div>
            )}

            <div className="exampleCommand" style={{ marginTop: "10px" }}>
                <span
                    ref={copyRef}
                    className={` ${animation === true ? "commandEffect" : ""}`}
                    style={customStyle}
                >
                    {codeText}
                </span>
                {copied ? (
                    <div className="copiedCode">
                        <img src={CopiedIcon} alt="Copied Icon" />
                        <div className="customToolTip">
                            <span>Copied!</span>
                        </div>
                    </div>
                ) : (
                    <img
                        src={CopyIcon}
                        alt="Copy Icon"
                        onMouseDown={() => {
                            navigator.clipboard.writeText(
                                copyRef.current.innerText
                            );
                            setCopied(true);
                            setTimeout(() => {
                                setCopied(false);
                            }, 2000);
                        }}
                    />
                )}
            </div>
        </>
    );
};

export default CodeBlock;
