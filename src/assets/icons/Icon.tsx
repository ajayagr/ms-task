import KidsIcon from "./KidsIcon";
import ElderlyIcon from "./ElderlyIcon";
import WomenIcon from "./WomenIcon";
import FriendsIcon from "./FriendsIcon";
import MenIcon from "./MenIcon";
import React from "react";
import Default from "./Default";

const icons: Record<
  string,
  (props: React.SVGProps<SVGSVGElement>) => JSX.Element
> = {
  kids: KidsIcon,
  elderly: ElderlyIcon,
  women: WomenIcon,
  friends: FriendsIcon,
  men: MenIcon,
};

interface IIconProps {
  iconName: string;
  props: React.SVGProps<SVGSVGElement>;
}

const Icon = ({ iconName, props }: IIconProps) => {
  // if icon found
  if (icons[iconName]) {
    return React.createElement(icons[iconName], {
      ...props,
    });
  } else {
    // if not found, return default
    return <Default {...props} />;
  }
};

export default Icon;
