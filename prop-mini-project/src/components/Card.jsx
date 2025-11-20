import { Bookmark } from "lucide-react";

const Card = () => {
  return (
    <div className="card">
      <div>
        <div className="header">
          <div>
            <img
              src="https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg"
              alt=""
            />
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
              Airbnb <span>5 days ago</span>
            </h3>
          </div>
          <div>
            <h1>Junior UI/UX Designer</h1>
          </div>
          <div className="tag">
            <div className="tags">Full Time</div>
            <div className="tags">Remote</div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div>
          <h2>$100/hr</h2>
          <div className="location">Delhi, India</div>
        </div>
        <div>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
