import WebSocket from "ws";
export type StatusType = 'miss' | 'killed' | 'shot'
export type SizeType = 'small' | 'medium' | 'large' | 'huge'
export type ResponseType =
  | 'reg'
  | 'turn'
  | 'update_winners'
  | 'create_game'
  | 'update_room'
  | 'start_game'
  | 'attack'
  | 'finish';


export type UserType = {
  id: number;
  name: string;
  password: string;
  wins: number;
};
export type FieldType = {
  roomId: number;
  userId: number;
  field: string[][] | null;
  ships: []
};

export type RoomType = {
  currentPlayer: number;
  roomId: number;
  isSingle?: boolean;
  roomUsers: {name: string, index: number}[],

    roomSockets: CustomWebSocket[];
  fields: {
    [key: string]: string[][] | null
  };
  ships: {
    [key: string]: [] | null
  };
};

export type ShipType = {
  position: {
    x: number;
    y: number;
  };
  direction: boolean;
  length: number;
  type: SizeType;
};


export type CustomWebSocket = WebSocket & { userId: number, room: RoomType };

export type AttackType =  {
  position: {
    x: number,
    y: number,
  },
  currentPlayer: number,
  status: StatusType,
}