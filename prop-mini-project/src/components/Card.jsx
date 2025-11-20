import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="card">
      <div>
        <div className="header">
          <div>
            <img src={props.brandLogo} alt="" />
          </div>
          <div>
            <button>
              Save
              <span>
                <Bookmark size={16} strokeWidth={0.5} />
              </span>
            </button>
          </div>
        </div>
        <div className="main">
          <div>
            <h3>
              {props.companyName} <span>{props.datePosted}</span>
            </h3>
          </div>
          <div>
            <h1>{props.post}</h1>
          </div>
          <div className="tag">
            <div className="tags">{props.tag1}</div>
            <div className="tags">{props.tag2}</div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div>
          <h2>{props.pay}</h2>
          <div className="location">{props.location}</div>
        </div>
        <div>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
