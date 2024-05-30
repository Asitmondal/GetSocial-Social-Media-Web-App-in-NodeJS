import React from "react";
import Stack from "react-bootstrap/Stack";

const HomeGuest = () => {
  return (
    <Stack direction="horizontal" gap={3}>
      <div className="p-2">First item</div>
      <div className="vr" />
      <div className="p-2 ms-auto">
        Second
      </div>
      <div className="vr" />
      <div className="p-2">Third item</div>
    </Stack>
  );
};

export default HomeGuest;
