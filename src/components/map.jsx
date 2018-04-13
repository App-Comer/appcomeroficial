import { GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = (props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 19.397806, lng:  -99.171394 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 19.397806, lng:  -99.171394 }} />}
  </GoogleMap>

<MyMapComponent isMarkerShown />// Map with a Marker
<MyMapComponent isMarkerShown={false} />// Just only Map
