import { Box } from "@mui/material";
import Link from "next/link";
import Navbar from './_components/Navbar';
// import Galerija from "./_components/Galerija";
import Footer from './_components/foter';
// import Prpark from './_components/Prpark';
import Typography from '@mui/material/Typography';
import Content from './_components/Content';
import Vsebina from './_components/Vsebina';
// import Ravbi from "./_components/Ravbi";
import Zacetek_slika from "./_components/Zacetek_slika";
import Trgovinca from "./_components/Trgovinca";
import Storitve from "./_components/Storitve";
import OLesu from "./_components/OLesu";
import Mail from './_components/Mail';
import Novice from "./_components/Novice";
import Onas from "./_components/Onas";
import Reference from "./_components/Reference";

export default async function HomePage() {
  return (
    <main >
      <Box>
        <Navbar></Navbar>
      </Box>

      <Box>
        <Zacetek_slika></Zacetek_slika>
      </Box>
      <Box>
        <Onas></Onas>
      </Box>
      <Box>
        <OLesu></OLesu>
      </Box>
      <Box>
        <Storitve></Storitve>

      </Box>

      <Box>
        <Trgovinca></Trgovinca>
      </Box>
      <Box>
        <Reference></Reference>
      </Box>

      <Box>
        <Novice></Novice>
      </Box>
      <Box>
        <Mail></Mail>
      </Box>
      <Box>
        <Footer></Footer>
      </Box>

    </main>
  );
}
