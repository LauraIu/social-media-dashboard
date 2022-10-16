import MediaLine from "./MediaLine";
import data from "./data";

function PlatformCards() {
  return (
    <div id="section-followers">
      {data.platforms.map((platformElement, index) => (
        <div key={index} className="cards">
          <div className="card-followers">
            <MediaLine media={platformElement.platform} />
            <span className="username">
              <img
                src={"./IMG/" + platformElement.platform + ".png"}
                alt={platformElement.platform + "_icon"}
              />
              @{platformElement.username}
            </span>
            <h2>
              {platformElement.followers > 10000
                ? platformElement.followers.toString().replace(/\d{3}$/, "") +
                  "k"
                : platformElement.followers}
            </h2>
            <p className="followers">FOLLOWERS</p>
            <p
              className={
                platformElement.difference > 0 ? "diff-green" : "diff-red"
              }
            >
              {" "}
              {platformElement.difference < 0
                ? platformElement.difference * -1
                : platformElement.difference}{" "}
              Today
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlatformCards;
