import './UserCard.scss';
import { arrowRight } from "../../assets";

const UserCard = () => {
  return (
    <div className="card">
      <div className="card__info">
        <h2>mathers08</h2>
        <h4>Black Mathers</h4>
      </div>
      <img src={arrowRight} alt=""/>
    </div>
  );
};

export default UserCard;