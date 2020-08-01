import React from 'react';
import { withRoomConsumer } from '../context';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Loading from './Loading';

function RoomsContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

/* const RoomsContainer = () => {
  return (
    <RoomConsumer>
      {(value) => {
        const { loading, sortedRooms, rooms } = value;

        if (loading) {
          return <Loading />;
        }

        return (
          <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
}; */

export default withRoomConsumer(RoomsContainer);
