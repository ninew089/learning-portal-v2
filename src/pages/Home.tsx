// @mui
import { styled } from "@mui/material/styles";
// components
import Page from "../components/Page";
import { Button } from "@mui/material";
// sections

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  height: "100%",
}));

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="The starting point for your next project">
      <RootStyle>
        <Button color="primary" variant="contained">
          adsasd
        </Button>
        <ContentStyle></ContentStyle>
      </RootStyle>
    </Page>
  );
}
