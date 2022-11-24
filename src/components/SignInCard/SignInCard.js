import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

import SignInForm from "./SignInForm";

const SignInCard = () => {
  return (
    <Card sx={{ border: 1, borderColor: "border.main" }}>
      <CardHeader
        title={
          <Typography variant="h6" component="h1">
            Welcome To The Would You Rather Game!
          </Typography>
        }
        subheader={<Typography variant="subtitle1">Please sign in to continue</Typography>}
        sx={{
          bgcolor: "secondary.main",
          textAlign: "center",
        }}
      ></CardHeader>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h5" color="primary" sx={{ mb: 2, fontWeight: "fontWeightBold", textAlign: "center" }}>
          Sign In
        </Typography>
        <SignInForm />
      </CardContent>
    </Card>
  );
};

export default SignInCard;
