import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const UserScoreCard = ({ user, index }) => {
  const { name, avatarURL, answers, questions } = user;

  const questionsCount = questions.length;
  const answersCount = Object.keys(answers).length;
  const totalScoreCount = questionsCount + answersCount;

  return (
    <Card
      component="li"
      sx={{
        position: "relative",
        border: 1,
        borderColor: "border.main",
        borderTop: 2,
        borderTopColor: "primary.light",
      }}
    >
      <Paper
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 32,
          height: 32,
          borderTop: 4,
          borderBottom: 4,
          borderColor: "success.light",
          borderRadius: 0,
          bgcolor: "success.main",
          color: "common.white",
          fontWeight: "fontWeightMedium",
        }}
      >
        {index}
      </Paper>
      <CardContent sx={{ "&:last-child": { px: 0, py: 2 } }}>
        <Stack direction="row">
          <Stack sx={{ justifyContent: "center", px: 2 }}>
            <Avatar src={avatarURL} alt={name} sx={{ width: 120, height: 120 }} />
          </Stack>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Stack spacing={1} sx={{ flexGrow: 1, justifyContent: "center", px: 2 }}>
            <Typography variant="h6" mb={1}>
              {name}
            </Typography>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body1">Answered questions</Typography>
              <Typography variant="body1">{answersCount}</Typography>
            </Stack>
            <Divider />
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body1">Created questions</Typography>
              <Typography variant="body1">{questionsCount}</Typography>
            </Stack>
          </Stack>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Stack sx={{ justifyContent: "center", px: 2 }}>
            <Card variant="outlined" sx={{ border: 1, borderColor: "border.main" }}>
              <CardHeader
                title={
                  <Typography variant="subtitle1" sx={{ fontWeight: "fontWeightMedium", textAlign: "center" }}>
                    Score
                  </Typography>
                }
                sx={{ bgcolor: "secondary.main" }}
              />
              <CardContent
                sx={{ display: "flex", justifyContent: "center", alignItems: "center", "&:last-child": { p: 2 } }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 45,
                    height: 45,
                    border: 4,
                    borderColor: "primary.light",
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                    color: "common.white",
                    fontWeight: "fontWeightMedium",
                    textAlign: "center",
                  }}
                >
                  {totalScoreCount}
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default UserScoreCard;
