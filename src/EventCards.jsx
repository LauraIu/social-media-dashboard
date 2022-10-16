import data from "./data";

function EventCards() {
  return (
    <div id="section-overview">
      {data.events.map((event, index) => (
        <div key={index} className="cards">
          <div className="card-overview">
            <div className="overview-left-col">
              <p>{event.type}</p>
              <h3 className="ev-amount">{event.amount}</h3>
            </div>
            <div className="overview-right-col">
              <img src={"./IMG/" + event.platform + ".png"} alt={event.platform + "_icon"} />
              <p
                className={
                  event.modifier > 0 ? "diff-green-today" : "diff-red-today"
                }
              >
                {" "}
                {event.modifier < 0
                  ? event.modifier * -1 + "%"
                  : event.modifier + "%"}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventCards;
