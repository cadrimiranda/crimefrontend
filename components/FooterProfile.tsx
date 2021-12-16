import Avatar from "antd/lib/avatar";
import Grid from "@material-ui/core/Grid";
import { useCallback } from "react";

export enum SocialNetworkName {
  fb = "facebook",
  github = "github",
  insta = "instagram",
  linkedin = "linkedin",
}

export type SocialNetwork = {
  name: SocialNetworkName;
  url: string;
};

interface IFooterProfile {
  name: string;
  avatar: string;
  socials: SocialNetwork[];
  description: string;
}

const FooterProfile = ({
  socials,
  name,
  avatar,
  description,
}: IFooterProfile) => {
  const getIcon = useCallback(({ name, url }: SocialNetwork) => {
    let iconName = "";
    let color = "";

    switch (name) {
      case SocialNetworkName.fb:
        color = "#166fe5";
        iconName = "bi bi-facebook";
        break;
      case SocialNetworkName.github:
        color = "#24292f";
        iconName = "bi bi-github";
        break;
      case SocialNetworkName.insta:
        color = "#C13584";
        iconName = "bi bi-instagram";
        break;
      default:
        color = "#0a66c2";
        iconName = "bi bi-linkedin";
        break;
    }

    return (
      <button
        className="icon-button"
        style={{ color }}
        onClick={() => window.open(url, "_blank")}
      >
        <i className={iconName} />
      </button>
    );
  }, []);

  return (
    <Grid container className="crime-profile-card">
      <Grid className="profile-social" item sm={12} md={5}>
        <div className="crime-pos-flex crime-pos-center-center crime-pos-column">
          <Avatar size="large" className="profile-photo" src={avatar} />
          <p className="profile-name">{name}</p>
        </div>
        <div className="crime-pos-flex crime-pos-center-center">
          {socials.map(getIcon)}
        </div>
      </Grid>
      <Grid
        className="crime-pos-flex crime-pos-center-center"
        item
        sm={12}
        md={7}
      >
        <p className="footer-profile-description">{description}</p>
      </Grid>
    </Grid>
  );
};

export { FooterProfile };
