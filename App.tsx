import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Chip,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Avatar,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Tabs,
  Tab,
  Link as HeroLink,
  Divider,
  useDisclosure,
} from "@heroui/react";
import {
  Music,
  Users,
  ShieldCheck,
  Download,
  Zap,
  Headphones,
  Star,
  Github,
  Mail,
  Vote,
  Shuffle,
  Youtube,
  Quote,
} from "lucide-react";
import screenshotLobby from "./assets/screenshot-lobby.png";
import screenshotPlaying from "./assets/screenshot-playing.png";
import screenshotResults from "./assets/screenshot-results.png";

const DOWNLOAD_URL = "https://playlistroulette.com/download";

function NavBar({ onRegister }: { onRegister: () => void }) {
  return (
    <Navbar
      maxWidth="xl"
      isBordered
      className="bg-background/60 backdrop-blur-xl border-white/5"
    >
      <NavbarBrand>
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-600 flex items-center justify-center glow-shadow">
            <Shuffle className="w-5 h-5 text-white" />
          </div>
          <p className="font-display font-extrabold text-xl tracking-tight">
            Playlist Roulette
          </p>
          <Chip
            size="sm"
            variant="flat"
            color="success"
            className="ml-1 hidden sm:flex"
          >
            Beta
          </Chip>
        </div>
      </NavbarBrand>
      <NavbarContent justify="end" className="gap-2 sm:gap-4">
        <NavbarItem className="hidden md:flex">
          <HeroLink href="#features" color="foreground" size="sm">
            Features
          </HeroLink>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <HeroLink href="#how" color="foreground" size="sm">
            How it works
          </HeroLink>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <HeroLink href="#reviews" color="foreground" size="sm">
            Reviews
          </HeroLink>
        </NavbarItem>
        <NavbarItem>
          <Button
            size="sm"
            variant="flat"
            color="default"
            onPress={onRegister}
          >
            Sign in
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as="a"
            href={DOWNLOAD_URL}
            size="sm"
            color="primary"
            startContent={<Download className="w-4 h-4" />}
          >
            Download
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

function Hero({ onRegister }: { onRegister: () => void }) {
  return (
    <section className="relative bg-mesh overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <Chip
            color="success"
            variant="flat"
            startContent={<Zap className="w-3.5 h-3.5 ml-1" />}
            className="mb-6"
          >
            Beta — Now looking for testers
          </Chip>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            <span className="text-gradient">Music battles</span>
            <br />
            with your friends.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-xl">
            Spin up a room, drop your favorite Spotify or YouTube tracks, and
            let the group vote — anonymously. Whoever wins gets the bragging
            rights for the night.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Button
              as="a"
              href={DOWNLOAD_URL}
              size="lg"
              color="success"
              className="font-semibold text-base px-8 h-14"
              startContent={<Download className="w-5 h-5" />}
            >
              Download for Windows · Free
            </Button>
            <Button
              as="a"
              href="#how"
              size="lg"
              variant="bordered"
              className="font-semibold text-base h-14 border-white/20"
            >
              See how it works
            </Button>
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm text-white/50">
            <Button
              variant="light"
              size="sm"
              onPress={onRegister}
              className="text-white/60 underline-offset-4 hover:underline px-2"
            >
              Or sign in to the web beta
            </Button>
            <span>·</span>
            <span>No card. No ads. Just vibes.</span>
          </div>
        </div>

        <div className="lg:col-span-5 relative h-[520px] hidden lg:block">
          <img
            src={screenshotLobby}
            alt="Playlist Roulette lobby with friends and song counts"
            className="absolute left-0 top-4 w-56 rounded-3xl glow-shadow animate-float-slow"
          />
          <img
            src={screenshotPlaying}
            alt="Playlist Roulette playing a song with a vote button"
            className="absolute left-44 top-24 w-60 rounded-3xl glow-shadow animate-float-med z-10"
          />
          <img
            src={screenshotResults}
            alt="Playlist Roulette winner and leaderboard"
            className="absolute right-0 top-12 w-56 rounded-3xl glow-shadow animate-float-fast"
          />
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Real-time room sync",
      desc: "Friends join with a 6-letter code. Songs, votes, and the player all stay in sync, no refresh needed.",
      color: "from-fuchsia-500/20 to-fuchsia-500/0",
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Spotify & YouTube",
      desc: "Paste any Spotify track or YouTube link. We embed the real player so it sounds exactly like the original.",
      color: "from-violet-500/20 to-violet-500/0",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Anonymous voting",
      desc: "No one sees who picked what until the round is over. Pure taste — no friend politics.",
      color: "from-emerald-500/20 to-emerald-500/0",
    },
  ];
  return (
    <section id="features" className="scroll-mt py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <Chip variant="flat" color="primary" size="sm" className="mb-4">
            Why it works
          </Chip>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Built for groups who actually <span className="text-gradient">love music</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <Card
              key={it.title}
              className={`relative overflow-hidden bg-white/[0.03] border border-white/5 backdrop-blur`}
              shadow="none"
            >
              <div
                className={`absolute inset-0 opacity-60 bg-gradient-to-br ${it.color}`}
              />
              <CardBody className="relative p-8">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                  {it.icon}
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">
                  {it.title}
                </h3>
                <p className="text-white/65 leading-relaxed">{it.desc}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Create a room",
      desc: "One tap, no signup. You get a 6-letter code to share.",
    },
    {
      n: "02",
      title: "Everyone drops 3–5 songs",
      desc: "Paste Spotify or YouTube links. The artwork loads instantly.",
    },
    {
      n: "03",
      title: "Host hits shuffle",
      desc: "Songs play one at a time, anonymously, on every screen.",
    },
    {
      n: "04",
      title: "Vote, reveal, and roast",
      desc: "After the last track, the leaderboard reveals who picked what.",
    },
  ];
  return (
    <section id="how" className="scroll-mt py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-2xl mb-14">
          <Chip variant="flat" color="secondary" size="sm" className="mb-4">
            How it works
          </Chip>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            From silence to <span className="text-gradient">screaming the chorus</span> in 90 seconds.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => (
            <Card
              key={s.n}
              className="bg-white/[0.03] border border-white/5"
              shadow="none"
            >
              <CardBody className="p-6">
                <p className="font-display text-3xl font-extrabold text-white/20 mb-3">
                  {s.n}
                </p>
                <h3 className="font-display text-xl font-bold mb-2">
                  {s.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  const shots = [
    { src: screenshotLobby, label: "Lobby", icon: <Users className="w-4 h-4" /> },
    { src: screenshotPlaying, label: "Now playing", icon: <Headphones className="w-4 h-4" /> },
    { src: screenshotResults, label: "Results", icon: <Vote className="w-4 h-4" /> },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <Chip variant="flat" color="primary" size="sm" className="mb-4">
            A peek inside
          </Chip>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            Beautiful on every screen.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {shots.map((s) => (
            <div key={s.label} className="group">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] p-6 border border-white/5">
                <img
                  src={s.src}
                  alt={s.label}
                  className="w-full rounded-2xl glow-shadow group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-2 mt-4 text-white/70">
                {s.icon}
                <span className="font-medium">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      name: "Mira K.",
      role: "Beta tester · Berlin",
      text: "Pre-game ritual is now a Roulette round. The anonymous voting is genius — nobody can fake a reaction once the leaderboard drops.",
      rating: 5,
    },
    {
      name: "Tarek A.",
      role: "Beta tester · Istanbul",
      text: "Used it in a road trip with 6 people on different phones. Zero lag, songs synced perfectly. Way more fun than passing the aux.",
      rating: 5,
    },
    {
      name: "Jules B.",
      role: "Beta tester · Lyon",
      text: "The fact that Spotify and YouTube both work in the same room is the killer feature. Everyone's library shows up.",
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="scroll-mt py-24 sm:py-32 bg-white/[0.015]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <Chip variant="flat" color="success" size="sm" className="mb-4">
            From the beta
          </Chip>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">
            What testers are <span className="text-gradient">saying</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <Card
              key={r.name}
              className="bg-white/[0.03] border border-white/5"
              shadow="none"
            >
              <CardBody className="p-7">
                <Quote className="w-7 h-7 text-fuchsia-400/70 mb-4" />
                <p className="text-white/85 leading-relaxed mb-6">
                  "{r.text}"
                </p>
                <div className="flex items-center gap-3">
                  <Avatar
                    name={r.name}
                    size="sm"
                    className="bg-gradient-to-br from-fuchsia-500 to-violet-600 text-white"
                  />
                  <div>
                    <p className="font-semibold text-sm">{r.name}</p>
                    <p className="text-xs text-white/50">{r.role}</p>
                  </div>
                  <div className="ml-auto flex">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA({ onRegister }: { onRegister: () => void }) {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <Card
          className="relative overflow-hidden bg-gradient-to-br from-fuchsia-600/30 via-violet-700/20 to-emerald-500/20 border border-white/10"
          shadow="none"
        >
          <CardBody className="relative p-10 sm:p-14 text-center">
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Ready for the next party?
            </h2>
            <p className="text-white/75 max-w-xl mx-auto mb-8 text-lg">
              Get the desktop app, or jump into the web beta in two clicks.
              No account needed for room hosts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                as="a"
                href={DOWNLOAD_URL}
                size="lg"
                color="success"
                className="font-semibold text-base h-14 px-8"
                startContent={<Download className="w-5 h-5" />}
              >
                Download for Windows
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="font-semibold text-base h-14 border-white/20"
                onPress={onRegister}
              >
                Join the web beta
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-violet-600 flex items-center justify-center">
                <Shuffle className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-extrabold text-lg">
                Playlist Roulette
              </span>
              <Chip size="sm" variant="flat" color="success">
                Beta
              </Chip>
            </div>
            <p className="text-sm text-white/50">
              Beta version — Looking for testers. Built with care for music
              friends everywhere.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              as="a"
              href="mailto:hello@playlistroulette.com"
              size="sm"
              variant="flat"
              startContent={<Mail className="w-4 h-4" />}
            >
              Contact
            </Button>
            <Button
              as="a"
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              size="sm"
              variant="flat"
              startContent={<Github className="w-4 h-4" />}
            >
              GitHub
            </Button>
          </div>
        </div>
        <Divider className="my-8 bg-white/5" />
        <div className="flex flex-col md:flex-row gap-3 justify-between text-xs text-white/40">
          <p>© {new Date().getFullYear()} Playlist Roulette. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/70 transition">Privacy</a>
            <a href="#" className="hover:text-white/70 transition">Terms</a>
            <a href={DOWNLOAD_URL} className="hover:text-white/70 transition">Get the app</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function AuthModal({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [tab, setTab] = useState<string>("signin");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={(o) => {
        onOpenChange(o);
        if (!o) {
          setSubmitted(false);
          setEmail("");
          setTab("signin");
        }
      }}
      backdrop="blur"
      size="md"
      placement="center"
      classNames={{
        base: "bg-[#0e0820] border border-white/10",
        header: "border-b border-white/5",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <span className="font-display text-xl">Sign in to Playlist Roulette</span>
              <span className="text-xs text-white/50 font-normal">
                Account features are still in private beta.
              </span>
            </ModalHeader>
            <ModalBody className="py-6">
              <Tabs
                selectedKey={tab}
                onSelectionChange={(k) => setTab(String(k))}
                fullWidth
                color="primary"
                variant="solid"
                classNames={{ tabList: "bg-white/5" }}
              >
                <Tab key="signin" title="Sign in" />
                <Tab key="register" title="Register" />
              </Tabs>

              <Card className="bg-amber-500/10 border border-amber-500/20 mt-4" shadow="none">
                <CardBody className="px-4 py-3 text-sm text-amber-200">
                  Sign in and registration are <strong>currently closed</strong> while we
                  finish the beta. Drop your email and we'll let you in as soon as a slot opens up.
                </CardBody>
              </Card>

              {submitted ? (
                <Card className="bg-emerald-500/10 border border-emerald-500/20 mt-4" shadow="none">
                  <CardBody className="px-4 py-4 text-sm text-emerald-200">
                    You're on the list. We'll email <strong>{email}</strong> the moment
                    the beta opens up.
                  </CardBody>
                </Card>
              ) : (
                <Input
                  type="email"
                  label="Email"
                  placeholder="you@example.com"
                  value={email}
                  onValueChange={setEmail}
                  variant="bordered"
                  className="mt-4"
                  classNames={{ inputWrapper: "border-white/15" }}
                />
              )}
            </ModalBody>
            <ModalFooter>
              <Button variant="light" onPress={onClose}>
                Close
              </Button>
              <Button
                color="primary"
                onPress={submitted ? onClose : handleSubmit}
                isDisabled={!submitted && !email.trim()}
              >
                {submitted ? "Done" : "Join the waitlist"}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

function PlatformBadges() {
  return (
    <div className="max-w-7xl mx-auto px-6 -mt-6 pb-12">
      <div className="flex flex-wrap items-center justify-center gap-6 text-white/40">
        <span className="text-xs uppercase tracking-widest">Plays nicely with</span>
        <div className="flex items-center gap-2">
          <Music className="w-5 h-5 text-emerald-400" />
          <span className="font-semibold text-white/70">Spotify</span>
        </div>
        <div className="flex items-center gap-2">
          <Youtube className="w-5 h-5 text-red-400" />
          <span className="font-semibold text-white/70">YouTube</span>
        </div>
        <div className="flex items-center gap-2">
          <Headphones className="w-5 h-5 text-fuchsia-400" />
          <span className="font-semibold text-white/70">Any group of 2–10</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="min-h-screen">
      <NavBar onRegister={onOpen} />
      <Hero onRegister={onOpen} />
      <PlatformBadges />
      <Features />
      <HowItWorks />
      <Showcase />
      <Reviews />
      <CTA onRegister={onOpen} />
      <Footer />
      <AuthModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}

export default App;
