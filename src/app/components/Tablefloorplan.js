"use client";
import React, { useMemo } from "react";
import { Users, MapPin, Check, X } from "lucide-react";

// ---------------------------------------------------------------------------
// FLOOR DATA — replace with a fetch to /api/tables (id, number, capacity,
// zone, x, y, shape). x/y are percentages (0–100) for responsive positioning.
// ---------------------------------------------------------------------------
const TABLES = [
  { id: "T1", number: 1, capacity: 2, zone: "Window Side", x: 8, y: 16, shape: "round" },
  { id: "T2", number: 2, capacity: 2, zone: "Window Side", x: 22, y: 16, shape: "round" },
  { id: "T3", number: 3, capacity: 4, zone: "Window Side", x: 8, y: 40, shape: "square" },
  { id: "T4", number: 4, capacity: 4, zone: "Window Side", x: 22, y: 40, shape: "square" },
  { id: "T5", number: 5, capacity: 6, zone: "Main Hall", x: 45, y: 20, shape: "rect" },
  { id: "T6", number: 6, capacity: 6, zone: "Main Hall", x: 45, y: 48, shape: "rect" },
  { id: "T7", number: 7, capacity: 2, zone: "Main Hall", x: 68, y: 12, shape: "round" },
  { id: "T8", number: 8, capacity: 2, zone: "Main Hall", x: 82, y: 12, shape: "round" },
  { id: "T9", number: 9, capacity: 4, zone: "Main Hall", x: 68, y: 38, shape: "square" },
  { id: "T10", number: 10, capacity: 4, zone: "Main Hall", x: 82, y: 38, shape: "square" },
  { id: "T11", number: 11, capacity: 8, zone: "Private Section", x: 10, y: 72, shape: "rect-lg" },
  { id: "T12", number: 12, capacity: 8, zone: "Private Section", x: 45, y: 76, shape: "rect-lg" },
  { id: "T13", number: 13, capacity: 4, zone: "Outdoor Patio", x: 76, y: 68, shape: "square" },
  { id: "T14", number: 14, capacity: 2, zone: "Outdoor Patio", x: 90, y: 68, shape: "round" },
];

const SIZE = {
  round: { w: 52, h: 52, radius: "50%" },
  square: { w: 60, h: 60, radius: "10px" },
  rect: { w: 88, h: 52, radius: "10px" },
  "rect-lg": { w: 116, h: 60, radius: "10px" },
};

// Deterministic mock availability so switching date/time actually changes
// the map. Replace with a real call: GET /api/tables?date=...&time=...
function getBookedTableIds(date, time) {
  const seed = `${date}-${time}`;
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  return TABLES.filter((_, i) => (hash >> i) % 5 === 0).map((t) => t.id);
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { weekday: "short", day: "numeric", month: "short" });
}

export default function TableFloorPlan({ date, time, selectedTableId, onSelectTable }) {
  const bookedIds = useMemo(() => (date && time ? getBookedTableIds(date, time) : []), [date, time]);
  const selectedTable = TABLES.find((t) => t.id === selectedTableId);

  if (!date || !time) {
    return (
      <div className="tbl-panel">
        <div className="booking-card-bar" />
        <h4 className="mb-1">Select Your Table</h4>
        <div className="tbl-placeholder">Choose a date and time above to see table availability.</div>
      </div>
    );
  }

  function handleClick(table) {
    if (bookedIds.includes(table.id)) return;
    onSelectTable(table.id === selectedTableId ? null : table);
  }

  return (
    <div className="tbl-panel">
      <div className="booking-card-bar" />
      <h4 className="mb-2">Select Your Table</h4>
      <p className="tbl-current-slot">
        Showing availability for <strong>{time}</strong> on <strong>{formatDate(date)}</strong>
      </p>

      <div className="tbl-floor-canvas">
        {TABLES.map((table) => {
          const isBooked = bookedIds.includes(table.id);
          const isSelected = table.id === selectedTableId;
          const size = SIZE[table.shape];
          const state = isSelected ? "selected" : isBooked ? "booked" : "available";

          return (
            <button
              key={table.id}
              type="button"
              className={`tbl-node ${state}`}
              disabled={isBooked}
              onClick={() => handleClick(table)}
              title={isBooked ? `Table ${table.number} — Booked` : `Table ${table.number} — ${table.capacity} seats`}
              style={{
                left: `${table.x}%`,
                top: `${table.y}%`,
                width: size.w,
                height: size.h,
                borderRadius: size.radius,
              }}
            >
              <span className="tbl-node-num">{table.number}</span>
              <span className="tbl-node-cap">
                <Users size={10} /> {table.capacity}
              </span>
            </button>
          );
        })}
      </div>

      <div className="tbl-legend">
        <span>
          <i className="tbl-dot available" /> Available
        </span>
        <span>
          <i className="tbl-dot booked" /> Booked
        </span>
        <span>
          <i className="tbl-dot selected" /> Selected
        </span>
      </div>

      {selectedTable && (
        <div className="tbl-selected-chip">
          <Check size={14} />
          Table {selectedTable.number} selected — {selectedTable.capacity} seats, {selectedTable.zone}
          <button type="button" onClick={() => onSelectTable(null)} title="Change table">
            <X size={13} />
          </button>
        </div>
      )}
    </div>
  );
}