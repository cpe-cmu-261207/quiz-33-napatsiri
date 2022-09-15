import React from "react";

export default function LikedCount({ liked }) {
  return (
    <div className={liked > 0 ? "d-flex align-items-center gap-1" : "d-none"}>
      <img src="/like.svg" width={20}></img>
      <span style={{ color: "#B0B3B8" }}>{liked} "คน"</span>
    </div>
  );
}
