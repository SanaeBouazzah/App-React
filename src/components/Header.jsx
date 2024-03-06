import { useTheme } from "@emotion/react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Header({title, subtitle}) {
  const theme = useTheme();
  return (
    <div>
      <Box>
        <Typography
          sx={{
            color: theme.palette.secondary.main,
            fontWeight: "bold"
          }} variant="h5">{title}</Typography>
          <Typography variant="body1">{subtitle}</Typography>
      </Box>
    </div>
  )
}
