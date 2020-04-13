import React from "react";

import { Player, ControlBar } from "video-react";

export default function EyeVideo() {
  return (
    <Player>
      <source src="https://video-mad1-1.xx.fbcdn.net/v/t42.9040-2/92991474_693535984735930_6435654742369632256_n.mp4?_nc_cat=102&_nc_sid=985c63&efg=eyJybHIiOjM0MCwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&_nc_ohc=ri72aZg6B0kAX_PHRXP&rl=340&vabr=189&_nc_ht=video-mad1-1.xx&oh=a35ec99ba16292e814caaa35e23876fd&oe=5E9364A1" />
      <ControlBar autoHide={false} />
    </Player>
  );
}
