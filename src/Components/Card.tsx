import "./Card.css";
import { useEffect, useState } from "react";
import mblimg from "../ph/mbl.svg";
import bblimg from "../ph/bbl.png";
import mannlifimg from "../ph/mannlif.svg";
import vbimg from "../ph/vb.svg";
import nutiminnimg from "../ph/nutiminn.svg";
import dvimg from "../ph/DV.jpg";
import hbimg from "../ph/hb.png";
import heimildinimg from "../ph/heimildin.png";
import samstodinimg from "../ph/samstodin.jpg";
import visirimg from "../ph/visir.png";
import ruvimg from "../ph/ruv.jpg";

type Data = {
  title: string;
  image: string;
};

type CardProps = {
  url: string;
};

const MBL = "https://www.mbl.is/frettir/";
const BBL = "https://www.bbl.is";
const MANNLIF = "https://www.mannlif.is";
const VB = "https://www.vb.is";
const NUTIMINN = "https://www.nutiminn.is";
const DV = "https://www.dv.is";
const HB = "https://www.hringbraut.is";
const HEIMILDIN = "https://www.heimildin.is";
const SAMSTODIN = "https://www.samstodin.is";
const VISIR = "https://www.visir.is";
const RUV = "https://www.ruv.is";

export default function Card({ url }: CardProps) {
  const [previewData, setPreviewData] = useState<Data | null>(null);
  var image: string, title: string;
  useEffect(() => {
    switch (url) {
      case RUV:
        title = "Ríkisútvarpið";
        image = ruvimg;
        break;
      case MBL:
        title = "Morgunblaðið";
        image = mblimg;
        break;
      case BBL:
        title = "Bændablaðið";
        image = bblimg;
        break;
      case MANNLIF:
        title = "Mannlíf";
        image = mannlifimg;
        break;
      case VB:
        title = "Viðskiptablaðið";
        image = vbimg;
        break;
      case NUTIMINN:
        title = "Nútíminn";
        image = nutiminnimg;
        break;
      case DV:
        title = "DV";
        image = dvimg;
        break;
      case HB:
        title = "Hringbraut";
        image = hbimg;
        break;
      case HEIMILDIN:
        title = "Heimildin";
        image = heimildinimg;
        break;
      case SAMSTODIN:
        title = "Samstöðin";
        image = samstodinimg;
        break;
      case VISIR:
        title = "Vísir";
        image = visirimg;
        break;
      default:
        title = "No title";
        image = "No image";
        break;
    }

    setPreviewData({ title, image });
  }, []);

  function onClick() {
    window.open(url, "_blank");
  }

  if (!previewData) {
    return <p>Failed to fetch link preview.</p>;
  }
  return (
    <div className="card" onClick={onClick}>
      <h4>{previewData?.title}</h4>
      <img src={previewData?.image} />
      <p className="url">{url}</p>
    </div>
  );
}
