import React from "react"
import { JitsiMeeting } from "@jitsi/react-sdk"
const JitsiMeet = () => {
  return (
    <div>
      <JitsiMeeting
        domain={"meet.jit.si"}
        roomName="Career Counselling"
        configOverwrite={{
          startWithAudioMuted: true,
          disableModeratorIndicator: true,
          startScreenSharing: true,
          enableEmailInStats: false,
        }}
        interfaceConfigOverwrite={{
          DISABLE_JOIN_LEAVE_NOTIFICATIONS: false,
        }}
        userInfo={{
          displayName: "COUNSELLOR",
        }}
        onApiReady={(externalApi) => {
          // here you can attach custom event listeners to the Jitsi Meet External API
          // you can also store it locally to execute commands
        }}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.height = "100vh"
        }}
      />
    </div>
  )
}

export default JitsiMeet
