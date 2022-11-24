import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const OptionResult = ({
  isOptionWon,
  optionText,
  optionVotesCount,
  totalVotesCount,
  optionVotesPercentage,
  isMyAnswer,
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        border: 1,
        borderColor: `${isOptionWon ? "primary.main" : "border.main"}`,
        borderRadius: 1,
        p: 2,
        bgcolor: `${isOptionWon ? "primary.50" : "secondary.light"}`,
      }}
    >
      <Typography variant="body1" sx={{ mb: 2, fontWeight: "fontWeightMedium" }}>
        Would you rather {optionText}?
      </Typography>
      <Box sx={{ mb: 1, width: "100%", height: 35, borderRadius: 1, bgcolor: "grey.300" }}>
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "flex-end",
            width: `${optionVotesPercentage}`,
            minWidth: 40,
            height: "100%",
            borderRadius: 1,
            px: 1,
            bgcolor: `${isOptionWon ? "success.light" : "grey.500"}`,
            color: "common.white",
          }}
        >
          {optionVotesPercentage}
        </Stack>
      </Box>
      <Typography variant="body2" sx={{ fontWeight: "fontWeightMedium", textAlign: "center" }}>
        {optionVotesCount} out of {totalVotesCount} votes
      </Typography>
      {isMyAnswer && (
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: -15,
            right: -20,
            width: 55,
            height: 55,
            border: 1,
            borderColor: "primary.dark",
            borderRadius: "50%",
            bgcolor: "primary.main",
            color: "common.white",
            fontSize: "caption.fontSize",
            fontWeight: "fontWeightMedium",
            textAlign: "center",
          }}
        >
          Your Answer
        </Paper>
      )}
    </Box>
  );
};

export default OptionResult;
