import React from "react";
import TripCard from "./TripCard";

export default function TripsList(props) {
  const { items, onTagClick } = props;

  if (!items || items.length === 0) {
    return <p className="muted">ไม่พบรายการที่ตรงกับคำค้นหา</p>;
  }

  return (
    <ul className="trip-list">
      {items.map((t) => (
        <li key={t.eid}>
          <TripCard trip={t} onTagClick={onTagClick} />
        </li>
      ))}
    </ul>
  );
}
