import React from "react";

export default function SearchBar(props) {
  const { value, onChange, onSearch } = props;

  return (
    <div className="search-wrap">
      <label className="search-label" htmlFor="search">
        ค้นหาที่เที่ยว
      </label>

      <input
        id="search"
        className="search-input"
        placeholder="หาที่เที่ยวแล้วไปกัน ..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSearch();
        }}
      />

      <button className="btn" onClick={onSearch}>
        ค้นหา
      </button>
    </div>
  );
}
