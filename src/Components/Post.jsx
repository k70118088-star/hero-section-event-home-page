import React, { useState } from "react";
import { Date, Heart, Remove } from "../icons";

const Post = () => {
  const [likes, setLikes] = useState(10);
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");

  const [comments, setComments] = useState([
    {
      id: 1,
      text: "Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.",
    },
    {
      id: 2,
      text: "Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla.",
    },
    {
      id: 3,
      text: "Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.",
    },
  ]);

  const handleLike = () => {
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
    setIsLiked(!isLiked);
  };

  const handleAddComment = () => {
    if (!commentText.trim()) return;
    setComments((prev) => [
      { id: crypto.randomUUID(), text: commentText },
      ...prev,
    ]);
    setCommentText("");
  };

  const handleRemoveComment = (id) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  return (
    <div className="mt-5 flex justify-center px-4 sm:px-6">
      <div className="w-full max-w-325">
        <div className="p-4 sm:p-6 lg:p-8.5 rounded-[30px] shadow-[0px_8px_35px_0px_#0000001A]">
          {/* MAIN CONTENT */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* LEFT */}
            <div className="flex-1 max-w-full lg:max-w-140.75">
              <div className="flex items-center gap-5">
                <img
                  src="/assets/5e8dfb1b961bd1cbad55d0901b2697837d03d6f1.png"
                  className="w-14 h-14 sm:w-20 sm:h-20 rounded-full"
                />
                <div>
                  <h1 className="font-semibold text-xl sm:text-2xl">
                    Username
                  </h1>
                  <p className="text-black/60 text-sm sm:text-base">
                    Post event name
                  </p>
                </div>
              </div>

              <h3 className="font-semibold text-xl sm:text-2xl mt-5 max-w-full lg:max-w-140">
                Fusce adipiscing nunc et tellus eu, tristique sodales sit
                aliquet.
              </h3>

              <p className="text-[#666] mt-4 flex items-center gap-2 text-sm sm:text-base">
                <Date /> 10/02/2022
              </p>

              <p className="mt-5 text-black/60 max-w-full lg:max-w-138.25 text-sm sm:text-base">
                Dictumst vulputate eget quisque iaculis hendrerit quis ut
                fringilla. Senectus gravida sed interdum pretium at quam morbi.
                Nunc, libero nam cursus sem faucibus urna.
              </p>

              <p className="mt-5 text-black/60 max-w-full lg:max-w-138.25 text-sm sm:text-base">
                Sed interdum pretium at quam morbi. Nunc, libero nam cursus sem
                faucibus urna.
              </p>

              <div className="mt-8 flex gap-10">
                <button
                  onClick={handleLike}
                  className={`flex gap-2 ${
                    isLiked ? "text-red-500" : "text-black/60"
                  }`}
                >
                  <Heart />
                  <span>{likes}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowComments((prev) => !prev)}
                  className="flex gap-2 text-black/60"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_34717_1989)">
                      <path
                        d="M6.75018 9.75C5.92049 9.75 5.25018 10.4203 5.25018 11.25C5.25018 12.0797 5.92049 12.75 6.75018 12.75C7.57987 12.75 8.25018 12.0797 8.25018 11.25C8.25018 10.4203 7.57987 9.75 6.75018 9.75ZM12.0002 9.75C11.1705 9.75 10.5002 10.4203 10.5002 11.25C10.5002 12.0797 11.1705 12.75 12.0002 12.75C12.8299 12.75 13.5002 12.0797 13.5002 11.25C13.5002 10.4203 12.8299 9.75 12.0002 9.75ZM17.2502 9.75C16.4205 9.75 15.7502 10.4203 15.7502 11.25C15.7502 12.0797 16.4205 12.75 17.2502 12.75C18.0799 12.75 18.7502 12.0797 18.7502 11.25C18.7502 10.4203 18.0799 9.75 17.2502 9.75ZM12.0002 1.5C5.37206 1.5 0.000181322 5.86406 0.000181322 11.25C0.000181322 13.4812 0.932994 15.525 2.47987 17.1703C1.78143 19.0172 0.328306 20.5828 0.304869 20.6016C-0.00450618 20.9297 -0.0888812 21.4078 0.0892438 21.8203C0.267369 22.2328 0.675181 22.5 1.12518 22.5C4.00799 22.5 6.28143 21.2953 7.64549 20.3297C9.00018 20.7563 10.4627 21 12.0002 21C18.6283 21 24.0002 16.6359 24.0002 11.25C24.0002 5.86406 18.6283 1.5 12.0002 1.5ZM12.0002 18.75C10.7486 18.75 9.51112 18.5578 8.32518 18.1828L7.26112 17.8453L6.34706 18.4922C5.67674 18.9656 4.75799 19.4953 3.65174 19.8516C3.99393 19.2844 4.32674 18.6469 4.58456 17.9672L5.08143 16.65L4.11581 15.6281C3.26737 14.7234 2.25018 13.2281 2.25018 11.25C2.25018 7.11563 6.62362 3.75 12.0002 3.75C17.3767 3.75 21.7502 7.11563 21.7502 11.25C21.7502 15.3844 17.3767 18.75 12.0002 18.75Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_34717_1989">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <span>{comments.length}</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 relative gap-5 max-w-[632px]">
              <img
                src="/assets/Rectangle82.png"
                className="  object-cover rounded-lg"
                alt=""
              />
              <img
                src="/assets/Rectangle83.png"
                className="object-cover  rounded-lg"
                alt=""
              />
              <img
                src="/assets/Rectangle84.png"
                className="  object-cover  rounded-lg"
                alt=""
              />
              <img
                src="/assets/Rectangle85.png"
                className="-mt-5 md:-mt-7 lg:-mt-9 object-cover  rounded-lg"
                alt=""
              />
              <div className="flex flex-col items-center justify-center absolute bottom-6 md:bottom-8 lg:bottom-12 py-2 md:py-3 lg:py-4 px-4 md:px-5 lg:px-7 right-2 md:right-3 lg:right-4 rounded-[15px] md:rounded-[18px] lg:rounded-[20px] bg-white">
                <h1 className="text-[24px] md:text-[30px] lg:text-[36px] font-semibold opacity-60">
                  +15
                </h1>
                <p className="font-normal text-[12px] md:text-[14px] lg:text-[16px] opacity-60">
                  more
                </p>
              </div>
            </div>
          </div>

          {showComments && (
            <div className="mt-12">
              <div className="bg-white border border-[#9CA1BE] md:rounded-full rounded-[5px] p-3 mb-8">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <img
                    src="/assets/5e8dfb1b961bd1cbad55d0901b2697837d03d6f1.png"
                    className="w-10 h-10 rounded-full"
                  />
                  <input
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Add new comment"
                    className="flex-1 outline-none text-sm w-full"
                  />
                  <button
                    onClick={handleAddComment}
                    className="bg-[#2C49FE] text-white px-6 py-2 rounded-full text-sm w-full sm:w-auto"
                  >
                    Post Comment
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {comments.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src="/assets/5e8dfb1b961bd1cbad55d0901b2697837d03d6f1.png"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="bg-[#F1F2F5] rounded-b-[20px] rounded-r-[20px] px-5 py-4 max-w-full">
                        <h4 className="font-semibold text-sm mb-1">Username</h4>
                        <p className="text-sm text-gray-600 break-words">
                          {item.text}
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemoveComment(item.id)}
                        className="text-xs flex items-center text-gray-500 mt-2 ml-4 hover:text-red-500"
                      >
                        <Remove /> Remove Comment
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
