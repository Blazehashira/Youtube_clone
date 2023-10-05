import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";

const cardStyle = {
  width: { xs: "100%", sm: "358px", md: "399px" },
  boxShadow: "none",
  borderRadius: 0,
};
const cardMediaStyle = {
  width: { xs: "100%", sm: "358px", md: "399px" },
  height: 180,
};
const cardContentStyle = {
  backgroundColor: "#1e1e1e",
  height: "106px",
};
const CheckIconStyle = {
  fontSize: 12,
  color: "gray",
  ml: "5px",
};

const VideoCard = ({ video }) => {
  const {
    id: { videoId },
    snippet,
  } = video;
  return (
    <div>
      <Card sx={cardStyle}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={cardMediaStyle}
          />
        </Link>
        <CardContent sx={cardContentStyle}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#fff">
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={CheckIconStyle} />
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoCard;
