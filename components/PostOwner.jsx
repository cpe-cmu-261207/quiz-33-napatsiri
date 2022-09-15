import React from "react";

export default function PostOwner(props) {
  return (
    <div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src={props.proFile_img}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5 text-white">
          Napatsiri Phetsri 640612181
        </span>
      </div>
      <span className="text-white">
        ขอ A ได้มั้ยวิชานี้ขอวิชาเดียวก็ได้ #261207
      </span>
      <div className="d-flex align-items-center gap-1">
        <img src="/like.svg" width={20}></img>
        <span style={{ color: "#B0B3B8" }}>{props.liked}</span>
      </div>
      <hr className="m-0 border" />
    </div>
  );
}
