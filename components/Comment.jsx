import React from "react";
import Reply from "./Reply";
import LikedCount from "./LikedCount";

export default function Comment(props) {
  return (
    <div>
      {/* Entire Comment div */}
      <div className="d-flex gap-2 my-2">
        <img
          src={props.proFile_img}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#3A3B3C" }}
        >
          <span className="fw-semibold" style={{ color: "#E4E6EB" }}>
            {props.owner}
          </span>
          <br />
          <span style={{ color: "#E4E6EB" }}>{props.content}</span>

          <LikedCount liked={props.liked} />
        </div>
      </div>

      {/*render Reply here... */}
      {props.replies.map((reply, i) => {
        return (
          <Reply
            key={i}
            owner={reply.username}
            content={reply.replyText}
            profile_img={reply.userImagePath}
            liked={reply.likeNum}
          />
        );
      })}
    </div>
  );
}
