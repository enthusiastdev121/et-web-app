import { post } from "network";

/**
 ------------------- 
  HOST APIS 
 ------------------- 
*/

// CREATE CALL
export const startCallApi = ({
  token,
  userId,
  conversationId,
}: {
  token: string;
  userId: any;
  conversationId: any;
}) => {
  return post({
    route: `/v2/call/start_call`,
    data: JSON.stringify({
      user_id: userId,
      conversation_id: conversationId,
      type: "video",
    }),
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    },
  });
};

// FINISH CALL
export const finishCallApi = ({
  token,
  roomId,
}: {
  token: string;
  roomId: string;
}) => {
  return post({
    route: `/v2/call/finish_call`,
    data: JSON.stringify({
      call_room_id: roomId,
    }),
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    },
  });
};

// CANCEL CALL
export const cancelCallApi = ({
  token,
  roomId,
}: {
  token: string;
  roomId: string;
}) => {
  return post({
    route: `/v2/call/cancel_call`,
    data: JSON.stringify({
      call_room_id: roomId,
    }),
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    },
  });
};

/**
 ------------------- 
  GUEST APIS 
 -------------------
*/

// ACCEPT CALL
export const acceptCallApi = ({
  token,
  roomId,
}: {
  token: string;
  roomId: string;
}) => {
  return post({
    route: `/v2/call/accept_call`,
    data: JSON.stringify({
      call_room_id: roomId,
    }),
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    },
  });
};

// REJECT CALL
export const rejectCallApi = ({
  token,
  roomId,
}: {
  token: string;
  roomId: string;
}) => {
  return post({
    route: `/v2/call/reject_call`,
    data: JSON.stringify({
      call_room_id: roomId,
    }),
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    },
  });
};

// LEAVE CALL
export const leaveCallApi = ({
  token,
  roomId,
}: {
  token: string;
  roomId: string;
}) => {
  return post({
    route: `/v2/call/left_call`,
    data: JSON.stringify({
      call_room_id: roomId,
    }),
    config: {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    },
  });
};
