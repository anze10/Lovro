'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
  useMediaQuery,
  Chip
} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Menu as MenuIcon, Close as CloseIcon, Phone, Email, Facebook, LocationOn } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6CA748',
    },
    secondary: {
      main: '#5A8E3A',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <AppBar position="static" sx={{ bgcolor: '#1f2937', boxShadow: 2, py: 2 }}>
          <Container>
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, mx: -20 }}>
                <Link href="/">
                  <img src="/C1_LOGOTIP RAVBAR_vodoraven_ no 01.png" alt="Ravbar Parketarstvo Logo" style={{ height: 64 }} />
                </Link>
              </Box>
              {isMobile ? (
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              ) : (
                <Box component="nav" sx={{ mr: -20 }}>
                  <Button
                    component={Link}
                    href="/o-nas"
                    sx={{
                      color: 'white',
                      '&:hover': {
                        color: 'primary.main',
                        bgcolor: 'transparent',
                        border: '2px solid',
                        borderColor: 'primary.main',
                      },
                      mx: 1,
                      px: 2,
                      py: 1,
                      borderRadius: '4px',
                      transition: 'all 0.2s',
                    }}
                  >
                    O NAS
                  </Button>
                  <Button
                    component={Link}
                    href="/storitve"
                    sx={{
                      color: 'white',
                      '&:hover': {
                        color: 'primary.main',
                        bgcolor: 'transparent',
                        border: '2px solid',
                        borderColor: 'primary.main',
                      },
                      mx: 1,
                      px: 2,
                      py: 1,
                      borderRadius: '4px',
                      transition: 'all 0.2s',
                    }}
                  >
                    STORITVE
                  </Button>
                  <Button
                    component={Link}
                    href="/reference"
                    sx={{
                      color: 'white',
                      '&:hover': {
                        color: 'primary.main',
                        bgcolor: 'transparent',
                        border: '2px solid',
                        borderColor: 'primary.main',
                      },
                      mx: 1,
                      px: 2,
                      py: 1,
                      borderRadius: '4px',
                      transition: 'all 0.2s',
                    }}
                  >
                    REFERENCE
                  </Button>
                  <Button
                    component={Link}
                    href="/novice"
                    sx={{
                      color: 'white',
                      '&:hover': {
                        color: 'primary.main',
                        bgcolor: 'transparent',
                        border: '2px solid',
                        borderColor: 'primary.main',
                      },
                      mx: 1,
                      px: 2,
                      py: 1,
                      borderRadius: '4px',
                      transition: 'all 0.2s',
                    }}
                  >
                    NOVICE
                  </Button>
                  <Button
                    component={Link}
                    href="/kontakt"
                    sx={{
                      color: 'white',
                      '&:hover': {
                        color: 'primary.main',
                        bgcolor: 'transparent',
                        border: '2px solid',
                        borderColor: 'primary.main',
                      },
                      mx: 1,
                      px: 2,
                      py: 1,
                      borderRadius: '4px',
                      transition: 'all 0.2s',
                    }}
                  >
                    KONTAKT
                  </Button>
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>

        <Drawer
          anchor="right"
          open={isMobile && isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        >
          <List>
            <ListItem
              button
              component={Link}
              href="/o-nas"
              onClick={() => setIsMenuOpen(false)}
            >
              <ListItemText primary="O NAS" />
            </ListItem>
            <ListItem
              button
              component={Link}
              href="/storitve"
              onClick={() => setIsMenuOpen(false)}
            >
              <ListItemText primary="STORITVE" />
            </ListItem>
            <ListItem
              button
              component={Link}
              href="/reference"
              onClick={() => setIsMenuOpen(false)}
            >
              <ListItemText primary="REFERENCE" />
            </ListItem>
            <ListItem
              button
              component={Link}
              href="/novice"
              onClick={() => setIsMenuOpen(false)}
            >
              <ListItemText primary="NOVICE" />
            </ListItem>
            <ListItem
              button
              component={Link}
              href="/kontakt"
              onClick={() => setIsMenuOpen(false)}
            >
              <ListItemText primary="KONTAKT" />
            </ListItem>
          </List>
        </Drawer>

        <main>
          <Box
            sx={{
              position: 'relative',
              height: '80vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'common.white',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url("/test_slika_1.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.45)',
              },
            }}
          >
            <Box sx={{ position: 'relative', textAlign: 'center' }}>
              <Typography variant="h2" component="h1" gutterBottom>
                Kakovostno polaganje in obnova parketa
              </Typography>
              <Typography variant="h5" paragraph>
                Z več kot 20 leti izkušenj vam zagotavljamo vrhunske rezultate
              </Typography>
              <Button variant="contained" color="primary" size="large" sx={{ color: 'common.white' }}>
                Kontaktirajte nas
              </Button>
            </Box>
          </Box>

          <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography variant="h3" component="h2" align="center" gutterBottom>
              O nas
            </Typography>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography paragraph>
                  Parketarstvo Ravbar je družinsko podjetje s skoraj 30 let izkušenj v svetu lesenih talnih oblog. Naša strast do lesa in predanost kakovosti sta temelj našega dela, ki ga opravljamo z največjo skrbnostjo in natančnostjo.
                </Typography>
                <Typography paragraph>
                  Specializirani smo za polaganje, obnovo in vzdrževanje vseh vrst parketa. Naš tim izkušenih strokovnjakov združuje tradicionalne tehnike z najnovejšimi tehnologijami, kar zagotavlja vrhunske rezultate pri vsakem projektu, ne glede na njegovo velikost ali zahtevnost.
<<<<<<< HEAD
                </p>
                <div className="text-center">
                  <a href="onas">
                  <Button className="bg-[#6CA748] hover:bg-[#5A8E3A] text-white">
                    Izvedi več
                  </Button>
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
              <img
                                alt="Tile Flooring"
                                className="h-full w-full rounded-lg object-cover transition-all duration-300 group-hover:scale-105"
                                height={400}
                                src="/parketar.jpg"
                                style={{
                                    aspectRatio: "600/400",
                                    objectFit: "cover",
                                }}
                                width={600}
                            />
              </div>
            </div>
          </div>
        </section>
=======
                </Typography>
                <Box textAlign="center">
                  <Button variant="contained" color="primary">
                    Izvedi več
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src="/parketar.jpg"
                  alt="Tile Flooring"
                  sx={{
                    width: '100%',
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </Grid>
            </Grid>
          </Container>
>>>>>>> c60105e98b33abc39fbd0f45b4d0dc1ee98246a5

          <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
            <Container maxWidth="lg">
              <Typography variant="h3" component="h2" align="center" gutterBottom>
                Naše storitve
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="h3" gutterBottom align="center">
                        Polaganje parketa
                      </Typography>
                      <Typography variant="body2" color="text.secondary" align="center">
                        Zagotavljamo visoko kakovostno polaganje parketa z uporabo najboljših materialov in tehnik.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="h3" gutterBottom align="center">
                        Brušenje parketa
                      </Typography>
                      <Typography variant="body2" color="text.secondary" align="center">
                        Zagotavljamo visoko kakovostno brušenje parketa z uporabo najboljših materialov in tehnik.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="h3" gutterBottom align="center">
                        Lakiranje parketa
                      </Typography>
                      <Typography variant="body2" color="text.secondary" align="center">
                        Zagotavljamo visoko kakovostno lakiranje parketa z uporabo najboljših materialov in tehnik.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="h3" gutterBottom align="center">
                        Oljenje parketa
                      </Typography>
                      <Typography variant="body2" color="text.secondary" align="center">
                        Zagotavljamo visoko kakovostno oljenje parketa z uporabo najboljših materialov in tehnik.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="h3" gutterBottom align="center">
                        Obnova starega parketa
                      </Typography>
                      <Typography variant="body2" color="text.secondary" align="center">
                        Zagotavljamo visoko kakovostno obnovo starega parketa z uporabo najboljših materialov in tehnik.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="h3" gutterBottom align="center">
                        Vzdrževanje parketa
                      </Typography>
                      <Typography variant="body2" color="text.secondary" align="center">
                        Zagotavljamo visoko kakovostno vzdrževanje parketa z uporabo najboljših materialov in tehnik.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </Box>

          <Box sx={{ bgcolor: '#1f2937', color: 'primary.contrastText', py: 8 }}>
            <Container sx={{ bgcolor: 'primary.main', textAlign: 'center', px: 4, py: 2, borderRadius: 2 }}>
              <Typography variant="h5" align="center" sx={{ color: 'white' }}>
                Z vrhunskim svetovanjem, prilagodljivostjo željam strank in strokovnostjo pri delu zagotavljamo rezultate, ki presegajo pričakovanja.
              </Typography>
            </Container>
          </Box>

          <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography variant="h3" component="h2" align="center" gutterBottom>
              Naše Reference
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
              <Chip
                label="Okrožno sodišče Novo mesto"
                sx={{
                  bgcolor: 'white',
                  boxShadow: 1,
                  m: 0.5,
                  '&:hover': {
                    bgcolor: 'primary.light',
                  },
                }}
              />
              <Chip
                label="Okrožno državno tožilstvo Novo mesto"
                sx={{
                  bgcolor: 'white',
                  boxShadow: 1,
                  m: 0.5,
                  '&:hover': {
                    bgcolor: 'primary.light',
                  },
                }}
              />
              <Chip
                label="Okrožno državno tožilstvo v Ljubljani"
                sx={{
                  bgcolor: 'white',
                  boxShadow: 1,
                  m: 0.5,
                  '&:hover': {
                    bgcolor: 'primary.light',
                  },
                }}
              />
              <Chip
                label="Okrajno sodišče v Grosupljem"
                sx={{
                  bgcolor: 'white',
                  boxShadow: 1,
                  m: 0.5,
                  '&:hover': {
                    bgcolor: 'primary.light',
                  },
                }}
              />
              <Chip
                label="Okrajno sodišče v Kočevju"
                sx={{
                  bgcolor: 'white',
                  boxShadow: 1,
                  m: 0.5,
                  '&:hover': {
                    bgcolor: 'primary.light',
                  },
                }}
              />
              <Chip
                label="Okrožno sodišče v Kranju"
                sx={{
                  bgcolor: 'white',
                  boxShadow: 1,
                  m: 0.5,
                  '&:hover': {
                    bgcolor: 'primary.light',
                  },
                }}
              />
              <Chip
                label="Dolenjska projektiva Novo mesto"
                sx={{
                  bgcolor: 'white',
                  boxShadow: 1,
                  m: 0.5,
                  '&:hover': {
                    bgcolor: 'primary.light',
                  },
                }}
              />
              <Chip
                label="CGP Novo mesto"
                sx={{
                  bgcolor: 'white',
                  boxShadow: 1,
                  m: 0.5,
                  '&:hover': {
                    bgcolor: 'primary.light',
                  },
                }}
              />
              <Chip
                label="Ministrstvo za obrambo – Uprava za obrambo Novo mesto"
                sx={{
                  bgcolor: 'white',
                  boxShadow: 1,
                  m: 0.5,
                  '&:hover': {
                    bgcolor: 'primary.light',
                  },
                }}
              />
              <Chip
                label="Terme Čatež"
                sx={{
                  bgcolor: 'white',
                  boxShadow: 1,
                  m: 0.5,
                  '&:hover': {
                    bgcolor: 'primary.light',
                  },
                }}
              />
              <Chip
                label="Mega d.o.o. Kranj"
                sx={{
                  bgcolor: 'white',
                  boxShadow: 1,
                  m: 0.5,
                  '&:hover': {
                    bgcolor: 'primary.light',
                  },
                }}
              />
              <Chip
                label="Lekarna Novak, Novo mesto"
                sx={{
                  bgcolor: 'white',
                  boxShadow: 1,
                  m: 0.5,
                  '&:hover': {
                    bgcolor: 'primary.light',
                  },
                }}
              />
              <Chip
                label="Vrtec pedenjped Novo Mesto"
                sx={{
                  bgcolor: 'white',
                  boxShadow: 1,
                  m: 0.5,
                  '&:hover': {
                    bgcolor: 'primary.light',
                  },
                }}
              />
              <Chip
                label="Mikrografija d.o.o. Novo Mesto"
                sx={{
                  bgcolor: 'white',
                  boxShadow: 1,
                  m: 0.5,
                  '&:hover': {
                    bgcolor: 'primary.light',
                  },
                }}
              />
              <Chip
                label="AS invest d.o.o."
                sx={{
                  bgcolor: 'white',
                  boxShadow: 1,
                  m: 0.5,
                  '&:hover': {
                    bgcolor: 'primary.light',
                  },
                }}
              />
            </Box>
            <Box sx={{ mt: 4, bgcolor: 'primary.main', color: 'primary.contrastText', p: 3, borderRadius: 2 }}>
              <Typography variant="body1" align="center" sx={{ color: 'white' }}>
                Poleg tega smo uspešno izvedli projekte v več kot 300 hišah in stanovanjih po Sloveniji in širše.
              </Typography>
            </Box>
          </Container>

          <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
            <Container maxWidth="lg">
              <Typography variant="h3" component="h2" align="center" gutterBottom>
                Novice
              </Typography>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/estrihi.jpg"
                      alt="Novi trendi v parketarstvu za leto 2023"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h3">
                        Novi trendi v parketarstvu za leto 2023
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        Odkrijte najnovejše trende v svetu parketa in lesenih talnih oblog za leto 2023.
                      </Typography>
                      <Button component={Link} href="/novice/trendi-2023" variant="contained" color="primary">
                        Preberi več
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/vlaga.jpg"
                      alt="Pravilno vzdrževanje parketa v poletnih mesecih"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h3">
                        Pravilno vzdrževanje parketa v poletnih mesecih
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        Nasveti za ohranjanje lepote vašega parketa med vročimi poletnimi dnevi.
                      </Typography>
                      <Button component={Link} href="/novice/vzdrzevanje-poleti" variant="contained" color="primary">
                        Preberi več
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/estrihi2.jpg"
                      alt="Zaključen projekt: Obnova parketa v Narodnem muzeju"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h3">
                        Zaključen projekt: Obnova parketa v Narodnem muzeju
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        Oglejte si našo najnovejšo obnovo parketa v prestižnem Narodnem muzeju.
                      </Typography>
                      <Button component={Link} href="/novice/projekt-narodni-muzej" variant="contained" color="primary">
                        Preberi več
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </Box>


        </main>

        <Box component="footer" sx={{ bgcolor: 'grey.900', color: 'common.white', py: 6 }}>
          <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: 2, my: 2, width: '80%', alignContent: 'center', margin: 'auto', borderRadius: 2 }}>
            <Container>
              <Typography variant="h4" align="center" sx={{ color: 'white' }}>
                Zaupajte nam, da vaš dom oživimo s kakovostjo, ki traja.
              </Typography>
            </Container>
          </Box>
          <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>
                  Parketarstvo Ravbar
                </Typography>
                <Typography variant="body2">
                  K Roku 139
                  <br />
                  8000, Novo Mesto
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                <img src="/C1_LOGOTIP RAVBAR_vodoraven_ no 01.png" alt="Ravbar Parketarstvo Logo" style={{ height: 80 }} />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="body2" align="right">
                  <Link href="tel:041726602" color="inherit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Phone sx={{ mr: 1 }} /> 041 726 602
                  </Link>
                </Typography>
                <Typography variant="body2" align="right">
                  <Link href="mailto:info@parket-ravbar.com" color="inherit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Email sx={{ mr: 1 }} /> info@parket-ravbar.com
                  </Link>
                </Typography>
                <Typography variant="body2" align="right">
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <Link href="https://www.facebook.com/parketarstvoravbar" target="_blank" rel="noopener noreferrer" color="inherit">
                      <Facebook sx={{ mr: 1 }} /> Facebook
                    </Link>
                  </Box>
                </Typography>
                <Typography variant="body2" align="right">
                  <Link href="#" color="inherit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <LocationOn sx={{ mr: 1 }} /> Prikaži zemljevid
                  </Link>
                </Typography>
              </Grid>
            </Grid>
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                LES JE NARAVEN, PUSTIMO DA TAK TUDI OSTANE
              </Typography>
            </Box>
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Typography variant="body2">
                &copy; {new Date().getFullYear()} parket-ravbar.com | <Link href="/piskotki" color="inherit">Piškotki</Link>
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Lovro Ravbar
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

