import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const channelData = await fetchFromAPI(
          `channels?part=snippet&id=${id}`
        );
        setChannelDetail(channelData?.items[0]);

        const channelVideos = await fetchFromAPI(
          `search?channelId=${id}&part=snippet&order=date`
        );
        setVideos(channelVideos?.items);
      } catch (err) {
        console.log(err);
      }
    };
    makeRequest();
  }, [id]);
  return (
    <Box minHeight="95vh">
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206, 3,184, 1) 100%, rgba(0,212, 255,1) 100%)",
          zIndex: 10,
          height: "300px",
        }}
      />
      <div style={{ marginTop: "-110px" }}>
        <ChannelCard channelDetail={channelDetail} />
      </div>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
