import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import { comments } from "../libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      ></div>
      {/* Entire App Container */}
      <PostOwner
        liked={99}
        owner="Napatsiri Phetsri 640612181"
        content="ขอAได้มั้ยวิชานี้"
        proFile_img="/proFileImages/IMG_1268.png"
      />

      {comments.map((comment, i) => {
        return (
          <Comment
            key={i}
            liked={comment.likeNum}
            owner={comment.username}
            content={comment.commentText}
            proFile_img={comment.userImagePath}
            replies={comment.replies}
          />
        );
      })}
    </div>
  );
}
