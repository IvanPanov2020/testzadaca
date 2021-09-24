import React from "react";
import "../styles/HistoryComponent.css";

export default function HistoryComponent() {
  return (
    <div>
      <div className="history">
        <div className="history-title">Activity History</div>
        <div className="history-rezultat">
          You haven’t tracked any activities yet
        </div>
      </div>
    </div>
  );
}
