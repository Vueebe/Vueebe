import * as React from "react";
import { Box, Spinner, Stack, Center } from "@chakra-ui/react";
import useComments from "../hooks/useComments";
import Comment from "./Comment";

interface CommentsProps {
  topic: string;
}

const Comments: React.FunctionComponent<CommentsProps> = ({ topic }) => {
  const query = useComments({ topic });
