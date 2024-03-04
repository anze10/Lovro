import { Box } from "@mui/material";
import Link from "next/link";
import Navbar from './_components/Navbar';
import Galerija from "./_components/Galerija";
import Footer from './_components/foter';
import Prpark from './_components/Prpark';
import Typography from '@mui/material/Typography';

export default function HomePage() {
  return (
    <main >
      <Box sx={{ width: "auto", height: "auto"}}>
        <Box>
          <Navbar />
        </Box>

        <Box sx={{ width: "70", height: "20%",padding:20 }}>
          <Galerija />
        </Box>
        <Box>
          <Typography>Izdelki</Typography>
          <Prpark/>
        </Box>
        <Box>
          <Typography>Storitve</Typography>
          <Prpark/>
        </Box>
        <Box>
          <Typography>O prketu</Typography>
          <Prpark/>
        </Box>
        <Box>
          <Typography>Članki</Typography>
          <Prpark/>
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>

    </main>
  );
}
