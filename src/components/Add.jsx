import Tooltip from "@mui/material/Tooltip";
import {Add as AddIcon,Image, EmojiEmotions, VideoCameraBack, PersonAdd, DateRange} from "@mui/icons-material";
import { Avatar, Button, ButtonGroup, Fab, Modal, styled, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState } from "react";

const StyledModal = styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
})

const UserBox = styled(Box)({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  marginBottom:"20px"
})

const Add = () => {

  const [open, setOpen] = useState(false);
  
  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <>
      <Tooltip title="Add" sx={{position: "fixed", bottom:20, left:{xs:"calc(50% - 25px)", sm:30}}}>
        <Fab color="success" aria-label="add" onClick={handleClick}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={handleClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="background.default" p={3} borderRadius={5} color="text.default">
          <Typography id="modal-modal-title" variant="h6" component="h2" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              sx={{width:30,height:30}}
            />
            <Typography fontWeight={500} variant="span">Jane</Typography>
          </UserBox>
            <TextField
              sx={{width: "100%"}}
              id="standard-multiline-static"
              multiline
              rows={3}
              placeholder="What's on your mind?"
              variant="standard"
            />
            <Stack direction="row" gap={1} mt={2} mb={3} >
              <EmojiEmotions color="primary"/>
              <Image color="secondary" />
              <VideoCameraBack color="error" />
              <PersonAdd color="success" />
            </Stack>
            <ButtonGroup 
              variant="contained" 
              aria-label="outlined success button group" 
              color="success"
              fullWidth
            >
              <Button>Post</Button>
              <Button sx={{width:"100px"}}><DateRange/></Button>
            </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
