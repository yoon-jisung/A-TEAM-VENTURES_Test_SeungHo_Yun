import React, { useState } from "react";

function Header() {
  return (
    <div className="header">
      <div className="header_company">
        <h1>CAPA</h1>
        <span>파트너스</span>
      </div>
      <h2 className="heafer_info">
        <span>
          <i className="far fa-building"></i>A 가공업체
        </span>
        |<span>로그아웃</span>
      </h2>
    </div>
  );
}

export default Header;
