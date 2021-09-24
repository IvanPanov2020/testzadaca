import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
} from "react-router-dom";
import ScheduleActivity from "./pages/ScheduleActivity";
import TrackActivity from "./pages/TrackActivity";
import Tractiv from "./pages/Tractiv";
function App() {
  return (
    <div>
      <Route exact path="/" component={Tractiv} />
      <Route path="/track-activity" component={TrackActivity} />
      <Route path="/schedule-activity" component={ScheduleActivity} />
    </div>
  );
}

export default App;
