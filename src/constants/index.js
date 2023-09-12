import {
  dsgn_main,
  dsgn_1,
  dsgn_2,
  mushroom_1,
  mushroom_2,
  mushroom_main,
  disco_1,
  disco_2,
  disco_main,
  dsgn_owner,
  mushroom_owner,
  disco_owner
} from "../assets/images";

export const navLinks = [
  {href: "#marketplace", label: "Marketplace"},
  {href: "#ranking", label: "Ranking"},
  {href: "#connect-wallet", label: "Connect Wallet"}
];

export const statistics = [
  {value: "1M+", label: "Total Sale"},
  {value: "100k+", label: "Auctions"},
  {value: "250k+", label: "Artists"}
];

export const trendDetails = [
  {
    imgURL: dsgn_main,
    label: "DSGN Animals",
    sideImgURL_1: dsgn_1,
    sideImgURL_2: dsgn_2,
    ownerImg: dsgn_owner,
    ownerName: "MrFox",
    nftNumber: "8000"
  },
  {
    imgURL: mushroom_main,
    label: "Magic Mushrooms",
    sideImgURL_1: mushroom_1,
    sideImgURL_2: mushroom_2,
    ownerImg: mushroom_owner,
    ownerName: "Shroomie",
    nftNumber: "6550"
  },
  {
    imgURL: disco_main,
    label: "Disco Machines",
    sideImgURL_1: disco_1,
    sideImgURL_2: disco_2,
    ownerImg: disco_owner,
    ownerName: "BeKind2Robots",
    nftNumber: "7000"
  }
];
