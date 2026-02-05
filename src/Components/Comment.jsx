import React, { useState } from "react";
import Button from "./Button";
import { Remove } from "../../icons";

const Comment = () => {
  const [comment, setComment] = useState("");
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
    {
      id: 4,
      text: "Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.",
    },
    {
      id: 5,
      text: "Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.",
    },
    {
      id: 6,
      text: "Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.",
    },
    {
      id: 7,
      text: "Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.",
    },
  ]);

  const addComment = () => {
    if (!comment.trim()) return;
    setComments([{ id: Date.now(), text: comment }, ...comments]);
    setComment("");
  };

  const removeComment = (id) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto mt-14 sm:mt-20 mb-20 px-4">
      <div className="text-center mb-8 sm:mb-12">
        <svg width="115" height="8" viewBox="0 0 115 8" className="mx-auto">
          <rect width="115" height="8" fill="#01C8FF" />
          <rect width="101" height="8" fill="#2C49FE" />
        </svg>

        <h1 className="font-semibold text-3xl sm:text-5xl mt-4">Tell Us!</h1>
        <p className="text-gray-500 max-w-3xl mx-auto mt-3 sm:mt-4 text-sm sm:text-base">
          Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla.
          Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam
          cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut
          vitae dolor fringilla urna eget aliquet.
        </p>
      </div>

      <div
        className="
  bg-white border border-[#9CA1BE]
  rounded-2xl sm:rounded-full
  p-3 mb-10
"
      >
        <div className="flex items-center gap-3 sm:gap-4 sm:flex-row">
          <img
            src="https://i.pravatar.cc/44"
            alt="user"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full"
          />

          <input
            type="text"
            placeholder="Add new comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="
        flex-1
        outline-none
        px-2
        text-[12px] sm:text-sm
      "
          />

          <div className="hidden sm:block">
            <Button
              onClick={addComment}
              text="Post Comment"
              bgColor="bg-[#2C49FE]"
              textColor="text-white"
              padding="py-3 px-7"
              rounded="rounded-full"
              textSize="text-sm md:text-base"
            />
          </div>
        </div>

        <div className="mt-3 sm:hidden">
          <Button
            onClick={addComment}
            text="Post Comment"
            bgColor="bg-[#2C49FE]"
            textColor="text-white"
            padding="py-2 px-4"
            rounded="rounded-full"
            textSize="text-xs"
            className="w-full"
          />
        </div>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {comments.map((item) => (
          <div key={item.id} className="flex gap-3 sm:gap-5 items-start">
            <img
              src={`https://i.pravatar.cc/44?u=${item.id}`}
              alt="avatar"
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full"
            />

            <div className="flex-1">
              <div className="bg-[#F1F2F5]  rounded-b-[20px] rounded-r-[20px] px-4 sm:px-5 py-3 sm:py-4">
                <h4 className="font-semibold text-xs sm:text-sm mb-1">
                  Username
                </h4>
                <p className="text-xs max-w-286 break-all sm:text-sm text-gray-600 leading-[150%]">
                  {item.text}
                </p>
              </div>

              <button
                onClick={() => removeComment(item.id)}
                className="flex items-center gap-1 text-xs sm:text-sm text-gray-500 mt-2 ml-3 sm:ml-4 hover:text-red-500"
              >
                <Remove /> Remove Comment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
