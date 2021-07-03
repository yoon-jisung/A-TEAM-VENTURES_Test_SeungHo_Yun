import React, { useState, useRef, useEffect } from "react";

function Header() {
  const [isopen, setIsopen] = useState(false);
  const element: any = useRef();

  const handleOpen = () => {
    setIsopen(!isopen);
  };

  const closeModal = () => {
    setIsopen(false);
  };

  const handleClickOutside = (e: any) => {
    if (isopen && !element.current.contains(e.target)) {
      setIsopen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <div className="header">
      {isopen ? (
        <div className="menuwrap" ref={element}>
          <nav id="menu">
            <div className="mobile_company">
              <h1>CAPA</h1>
              <h3>파트너스</h3>
            </div>

            <h2 className="mobile_info">
              <span>
                <i className="far fa-building"></i>파트너정밀가공
              </span>
              <span>로그아웃</span>
            </h2>
          </nav>
        </div>
      ) : null}

      <div className={isopen ? "modal_open" : "header_company"}>
        <h1 className="mobile_header_info">
          <i className="fas fa-bars" onClick={handleOpen}></i>
        </h1>

        <h1>CAPA</h1>
        <span>파트너스</span>
      </div>
      <h2 className="header_info">
        <span>
          <i className="far fa-building"></i>A 가공업체
        </span>
        |<span>로그아웃</span>
      </h2>
    </div>
  );
}

export default Header;
