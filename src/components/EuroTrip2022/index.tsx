import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Paper } from "@mui/material";
import "./style.css";

export const EuroTrip2022 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <div className="trip-container" style={{ backgroundColor: "#fbf8cc" }}>
        <h2>General Overview</h2>

        <div>
          <span style={{ fontSize: "25px", margin: "10px" }}>
            Total distance: 0 Km
          </span>
          |
          <span style={{ fontSize: "25px", margin: "10px" }}>
            Total time: 27h
          </span>{" "}
          |
          <span style={{ fontSize: "25px", margin: "10px" }}>
            Total cost: 0€
          </span>
        </div>
        <br />
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "10px",
            }}
          >
            Constanta,Romania <LocationOnIcon />
          </div>
          . . . . . . . . . . . . . . . . .
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "10px",
            }}
          >
            Groningen,Netherlands <LocationOnIcon />
          </div>
        </div>
      </div>

      <div className="trip-container" style={{ backgroundColor: "#fde4cf" }}>
        <h2>Layovers</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Paper
            elevation={3}
            style={{
              paddingBottom: "15px",
              margin: "10px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                width: "200px",
                height: "200px",
                marginBottom: "10px",
              }}
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/9b/ee/d9/the-old-constanta.jpg?w=700&h=500&s=1"
              alt=""
            />
            Constanta (Romania)
          </Paper>
          <Paper elevation={3} style={{ padding: "20px", margin: "10px" }}>
            Bucharest (Romania)
          </Paper>
          <Paper elevation={3} style={{ padding: "20px", margin: "10px" }}>
            Valea Oltului (Romania)
          </Paper>
          <Paper elevation={3} style={{ padding: "20px", margin: "10px" }}>
            Sibiu (Romania)
          </Paper>
          <Paper elevation={3} style={{ padding: "20px", margin: "10px" }}>
            Timisoara (Romania)
          </Paper>
          <Paper elevation={3} style={{ padding: "20px", margin: "10px" }}>
            Arad (Romania)
          </Paper>
          <Paper elevation={3} style={{ padding: "20px", margin: "10px" }}>
            Szeged (Hungary)
          </Paper>
          <Paper elevation={3} style={{ padding: "20px", margin: "10px" }}>
            Szeged (Hungary)
          </Paper>
          <Paper elevation={3} style={{ padding: "20px", margin: "10px" }}>
            KecsKemet (Hungary)
          </Paper>
          <Paper elevation={3} style={{ padding: "20px", margin: "10px" }}>
            Budapest (Hungary)
          </Paper>
          <Paper elevation={3} style={{ padding: "20px", margin: "10px" }}>
            Gyor (Hungary)
          </Paper>
          <Paper elevation={3} style={{ padding: "20px", margin: "10px" }}>
            Bratislava (Slovakia)
          </Paper>
          <Paper elevation={3} style={{ padding: "20px", margin: "10px" }}>
            Brno (Czechia)
          </Paper>
          <Paper elevation={3} style={{ padding: "20px", margin: "10px" }}>
            Prague (Czechia)
          </Paper>
          <Paper elevation={3} style={{ padding: "20px", margin: "10px" }}>
            Pilsen (Czechia)
          </Paper>
          <Paper elevation={3} style={{ padding: "20px", margin: "10px" }}>
            Nuremberg (Germany)
          </Paper>
          <Paper elevation={3} style={{ padding: "20px", margin: "10px" }}>
            Frankfurt (Germany)
          </Paper>
          <Paper elevation={3} style={{ padding: "20px", margin: "10px" }}>
            Rhine valley (Germany)
          </Paper>
          <Paper elevation={3} style={{ padding: "20px", margin: "10px" }}>
            Groningen (Netherlands)
          </Paper>
        </div>
      </div>

      <div className="trip-container" style={{ backgroundColor: "#ffcfd2" }}>
        <h2>Fuel</h2>

        <div>Cata's Car: 8L/100km</div>
      </div>

      <div className="trip-container" style={{ backgroundColor: "#f1c0e8" }}>
        <h2>Accommodation</h2>
      </div>

      <div className="trip-container" style={{ backgroundColor: "#cfbaf0" }}>
        <h2>Supplies</h2>
      </div>

      <div className="trip-container" style={{ backgroundColor: "#90dbf4" }}>
        <h2>Drivers</h2>
      </div>

      <div className="trip-container" style={{ backgroundColor: "#8eecf5" }}>
        <h2>Road Tolls,Fees & Taxes</h2>
      </div>

      <div className="trip-container" style={{ backgroundColor: "#98f5e1" }}>
        <h2>Adventurers</h2>
      </div>

      <div className="trip-container" style={{ backgroundColor: "#b9fbc0" }}>
        <h2>Lowering costs, tips & tricks, and extra stuff!</h2>
      </div>
    </div>
  );
};
