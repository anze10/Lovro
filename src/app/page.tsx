import { Box } from "@mui/material";
import Link from "next/link";
import Navbar from './_components/Navbar';
import Galerija from "./_components/Galerija";
import Footer from './_components/foter';

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
          <Footer />
        </Box>
      </Box>

    </main>
  );
}
