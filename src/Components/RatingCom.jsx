import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const RatingCom = ({ children }) => {
  return (
    <Rating
      initialRating={children}
      emptySymbol={<AiOutlineStar className=" ml-1 text-orange-500" />}
      fullSymbol={<AiFillStar className=" ml-1 text-orange-500" />}
      readonly
    />
  );
};

export default RatingCom;
