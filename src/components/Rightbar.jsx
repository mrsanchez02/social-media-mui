import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  ListItemText,
  Typography,
  ListItem,
  List,
  styled,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";

const MyAvatarGroup = styled(AvatarGroup)({
  display:"flex",
  flexDirection:"row"
})

const ONLINE_CONTACTS = [
  {
    id: 1,
    userName: "Trinity",
    image:
      "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200",
    subject: "Brunch this weekend?",
    text: " — I'll be in your neighborhood doing errands this…",
  },
  {
    id: 2,
    userName: "James",
    image:
      "https://images.pexels.com/photos/733500/pexels-photo-733500.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200",
    subject: "Summer BBQ",
    text: " — Wish I could come, but I'm out of town this…",
  },
  {
    id: 3,
    userName: "Arthur",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb",
    subject: "Oui Oui",
    text: " — Do you have Paris recommendations? Have you ever…",
  },
  {
    id: 4,
    userName: "Krista",
    image:
      "https://images.pexels.com/photos/1559193/pexels-photo-1559193.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200",
    subject: "Brunch this weekend?",
    text: " — I'll be in your neighborhood doing errands this…",
  },
  {
    id: 5,
    userName: "Julius",
    image:
      "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200",
    subject: "Brunch this weekend?",
    text: " — I'll be in your neighborhood doing errands this…",
  },
  {
    id: 6,
    userName: "Julius",
    image:
      "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=200&w=200",
    subject: "Brunch this weekend?",
    text: " — I'll be in your neighborhood doing errands this…",
  },
];

const IMAGE_LIST = [
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1601694090572-98694c8b3b85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1541890289-b86df5bafd81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1145&q=80",
  },
  {
    id: 20,
    src: "https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 30,
    src: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 40,
    src: "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
  },
];

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{ display: { xs: "none", md: "block", sm: "none" } }}
    >
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Online Friends
        </Typography>
        <MyAvatarGroup max={5}>
          {ONLINE_CONTACTS.map((avatar) => {
            return (
              <Avatar
                key={avatar.id}
                alt={avatar.userName}
                src={avatar.image}
              />
            );
          })}
        </MyAvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          {IMAGE_LIST.map((item) => (
            <ImageListItem key={item.id}>
              <img
                src={`${item.src}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {ONLINE_CONTACTS.map((item) => (
            <div key={item.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={item.userName} src={item.image} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.subject}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Ali Connors
                      </Typography>
                      {item.text}
                    </>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
