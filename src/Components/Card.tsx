import "./Card.css"
import { useEffect, useState } from "react";
import mblimg from "../ph/mbl.svg"
import bblimg from "../ph/bbl.png"
import mannlifimg from "../ph/mannlif.svg"
import vbimg from "../ph/vb.svg"
import nutiminnimg from "../ph/nutiminn.svg"

type Data = {
    title:string;
    description:string;
    image:string;
}

type CardProps = {
    url: string;
}

const MBL = "https://www.mbl.is/frettir/";
const BBL = "https://www.bbl.is";
const MANNLIF = "https://www.mannlif.is";
const VB = "https://www.vb.is";
const NUTIMINN = "https://www.nutiminn.is";

export default function Card({url}:CardProps) {
    const [previewData, setPreviewData] = useState<Data | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const urlproxy = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(url);
    
  useEffect(() =>{
    const fetchData = async () => {
      try {
        const res = await fetch(urlproxy);
        const data = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        const title = doc.querySelector('title')?.textContent || '';
        const description = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
        var image = doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';
        if(image == ""){
            switch (url) {
                case MBL:
                    image = mblimg;
                    break;
                case BBL:
                    image = bblimg;
                    break;
                case MANNLIF:
                    image = mannlifimg;
                    break;
                case VB:
                    image = vbimg;
                    break;
                case NUTIMINN:
                    image = nutiminnimg;
                    break;
                default:
                    break;
            }
            
        }
        setPreviewData({ title, description, image });    
        setLoading(false);
      }
      catch (error ){
        console.error(error);
      }
    }
    fetchData();
  },[]
  )
  
  function onClick(){
    window.open(url, '_blank');
  }
  if (loading) {
    return <div className="card" onClick={onClick}>
    <h1>Loading {url}</h1>
</div>;
  }
  if (!previewData) {
    return <p>Failed to fetch link preview.</p>;
  }
  return (
    <div className="card" onClick={onClick}>
        <h4>{previewData?.title}</h4>
        <img src={previewData?.image}/>
        <p className="url">{url}</p>
    </div>
  )
}
