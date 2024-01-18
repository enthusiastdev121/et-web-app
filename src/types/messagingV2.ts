type SocketMessageD = {
  conversation_id: string;
  created_at: string;
  type: "text" | "picture" | "audio" | "video";
  body?: string;
  media_path_full: string;
  total_unread_count: { unread_count: number };
};

export type SocketDataD = {
  message: SocketMessageD;
};

export type CallDataD = {
  roomId: string;
  authToken: string;
  name: string;
  pic: string;
  talentnum: number;
  status?: "accepted" | "rejected" | null;
};

export type IndboxItem = {};

export type ConversationMessage = {};

export type CallStatusD = "calling" | "incoming" | "accepted" | "rejected" | "canceled" | "left" | "finished" | "joined" | null;

export type HostCallStatusD = "joined" | "finished" | "";
export type GuestCallStatusD = "calling" | "accepted" | "rejected" | "incoming" | "joined" | "left" | "finished" | "";

export type CallUserD = {};

type MessageFileType = "text" | "audio" | "localMedia" | "capturedMedia";
// localMedia: photos and videos from device
// caputredMedia: photos and videos from webcam

export type onMessageArgs = {
  type: MessageFileType;
  file: any;
};

export type ChatboxActionsProps = {
  // conversationId: number;
  onMessage: ({}: onMessageArgs) => void;
};

type roomD = {
  duration: number;
  startBy: string;
  startTime: number;
  endTime: number;
  host: boolean;
  status: "finished" | "started" | "canceled";
};

export type MessageItemTypeD = {
  id: number;
  body: string;
  createdAt: string;
  userId: string;
  position: 1 | 2;
  type: "picture" | "audio" | "video" | "text" | "call";
  mediaPath?: string;
  otherPersonName: string;
  seen: boolean;
  uploading?: boolean;
  local_media_path?: string;
  localMediaPath?: string;
  readStatus: 0 | 1 | 2;
  localId: number;
  showProgress: boolean;
  room: roomD;
};

export type ActiveChatD = {
  conversationId: number;
  user: {
    id: number;
    name: string;
    talentlogin: string;
    pic: string;
    talentnum: any;
  };
};

export type TabTypeD = "" | "invitations" | "messages";

export type UpdateIndboxArg = {
  conversationId: any;
  body?: string;
  type: "picture" | "video" | "audio" | "text";
  name?: string;
  pic?: string;
};

export type FloatingMessageItemD = {
  text: string;
  type: "picture" | "video" | "audio" | "text";
};

export type FloatingMessageTypeD = {
  items: FloatingMessageItemD[];
  user: {
    name: string;
    pic: string;
  };
  unread: number;
  conversationId: number;
};

export type MessagingContextV2D = {
  activeTab: TabTypeD;
  setActiveTab: React.Dispatch<React.SetStateAction<TabTypeD>>;

  // Messages
  socketData: SocketDataD;
  messageCount: number;
  activeChat: ActiveChatD;
  setActiveChat: React.Dispatch<React.SetStateAction<ActiveChatD>>;
  onMessageRemove: ({ conversationsId, id }: { conversationsId: number; id: number }) => any;
  indbox: IndboxItem[];
  indboxLoading: boolean;
  markSeen: (id: number) => any;
  fetchMoreIndboxMessages: () => any;
  updateIndbox: ({ conversationId, body, type }: UpdateIndboxArg) => void;
  indboxMessagesPage: {};
  clearUnreadCount: (d: { conversationId: any }) => any;
  floatingMessage: FloatingMessageTypeD;

  //INVITES
  invites: any[];
  invitesLoading: boolean;
  invitesLoadingMore: boolean;
  activeInvite: any;
  setActiveInvite: React.Dispatch<React.SetStateAction<any>>;
  fetchInvites: () => any;
  fetchMoreInvites: () => any;
  invitePage: {
    current: any;
    total: any;
  };

  //Notifications
  notificationCount: number;
  setNotificationCount: React.Dispatch<React.SetStateAction<number>>;

  //CALL
  callSocketData: CallDataD;
  setCallSocketData: React.Dispatch<React.SetStateAction<CallDataD>>;
  isHost: boolean;
  setIsHost: React.Dispatch<React.SetStateAction<boolean>>;
  openVideoCalling: boolean;
  setOpenVideoCalling: React.Dispatch<React.SetStateAction<boolean>>;
  roomId: string;
  setRoomId: React.Dispatch<React.SetStateAction<string>>;
  acceptCall: () => void;
  rejectCall: () => void;
  startCall: () => void;
  cancelCall: () => void;
  leaveCall: () => void;
  finishCall: () => void;
  callStatus: CallStatusD;
  callUsers: CallUserD[];
  callSocketMessage: CallDataD;
  hostCallStatus: HostCallStatusD;
  guestCallStatus: GuestCallStatusD;
  callStatusData: any;
};
