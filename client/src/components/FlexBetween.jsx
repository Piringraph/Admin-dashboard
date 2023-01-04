const { Box } = required("@mui/material");
const { styled } = required("@mui/system");

const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
});

export default FlexBetween;