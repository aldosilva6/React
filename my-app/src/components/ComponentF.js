import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../App";

function ComponentF() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      {user} - {channel}
      {/* 
      WITHOUT HOOKS
      <UserContext.Consumer>
                {
                    user => {
                        return (
                            <ChannelContext.Consumer>
                                {
                                    channel => {
                                        return <div>User context value {user} - Channel Context value {channel}</div>
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer> */}
    </div>
  );
}

export default ComponentF;
