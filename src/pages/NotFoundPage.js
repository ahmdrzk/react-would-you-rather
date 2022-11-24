import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleNavigateToStart = () => {
    navigate("/", { state: {} });
  };

  return (
    <Stack spacing={2} sx={{ alignItems: "flex-start" }}>
      <Typography variant="h4" component="h1">
        Error 404
      </Typography>
      <Typography variant="subtitle1">Page not found!</Typography>
      <Button variant="contained" onClick={handleNavigateToStart}>
        Go to start page
      </Button>
    </Stack>
  );
};

export default NotFoundPage;
