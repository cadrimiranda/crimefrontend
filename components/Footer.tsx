import {
  FooterProfile,
  SocialNetwork,
  SocialNetworkName,
} from "./FooterProfile";
import RochaAvatar from "../static/1561761123280.jpg";
import CarlosAvatar from "../static/1634818090408.jpg";

const rochaSocial: SocialNetwork[] = [
  {
    name: SocialNetworkName.github,
    url: "https://github.com/RochaOwng",
  },
  {
    name: SocialNetworkName.linkedin,
    url: "https://www.linkedin.com/in/rochamat/",
  },
  {
    name: SocialNetworkName.insta,
    url: "https://www.instagram.com/rochamrsm/",
  },
  {
    name: SocialNetworkName.fb,
    url: "",
  },
];

const carlosSocial: SocialNetwork[] = [
  {
    name: SocialNetworkName.github,
    url: "https://github.com/cadrimiranda",
  },
  {
    name: SocialNetworkName.linkedin,
    url: "https://www.linkedin.com/in/ca-miranda/",
  },
  {
    name: SocialNetworkName.insta,
    url: "https://www.instagram.com/cadrimiranda/",
  },
];

const Footer = () => {
  return (
    <footer className="crime-footer crime-pos-flex crime-pos-center-center">
      <FooterProfile
        name="Matheus Rocha"
        avatar={RochaAvatar.src}
        description="Data professional with solid experience in marketing, sales, product,
          leadership, and team management. Having good communication and dealing
          well with negotiating with teams, from C-level, through middle
          management, as well as operational teams."
        socials={rochaSocial}
      />
      <FooterProfile
        name="Carlos A. Miranda"
        avatar={CarlosAvatar.src}
        description="Front end developer with solid experience in Javascript, Typescript, React and Automated Tests. 
        Passionate about new technologies and enjoy to practice them in free time, among them are Flutter, Python and backed stuffs"
        socials={carlosSocial}
      />
    </footer>
  );
};

export { Footer };
