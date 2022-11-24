import Box from "@mui/material/Box";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          m: "auto",
          maxWidth: 550,
          px: 2,
          py: 4,
          "& > *": { width: "100%" },
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
