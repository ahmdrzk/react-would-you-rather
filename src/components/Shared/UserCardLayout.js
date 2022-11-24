import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { selectUsers } from "../../redux/selectors/usersSelectors";

const UserCardLayout = ({ authorId, children }) => {
  const users = useSelector(selectUsers);

  const authorName = users[authorId].name;
  const authorAvatarUrl = users[authorId].avatarURL;

  return (
    <Card sx={{ border: 1, borderColor: "border.main" }}>
      <CardHeader
        title={<Typography variant="subtitle2">{authorName} asks:</Typography>}
        sx={{ borderBottom: 1, borderColor: "border.main", bgcolor: "secondary.main" }}
      />
      <CardContent sx={{ "&:last-child": { p: 1 } }}>
        <Stack direction="row">
          <Box sx={{ p: 2 }}>
            <Avatar src={authorAvatarUrl} alt={authorName} sx={{ width: 120, height: 120 }} />
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box sx={{ flex: "1 1 auto" }}>{children}</Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default UserCardLayout;
