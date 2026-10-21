import { useState, useEffect } from "react"
import { getPictureOfTheDay } from "../services/api"
import { useSearchParams } from "react-router-dom";

function Home() {
    const [searchParams] = useSearchParams();
    let index = searchParams.get("index") ? searchParams.get("index") : 0;
    const [HDURL, setHDURL] = useState(null);
    const [URL, setURL] = useState(null);
    const [image, setImage] = useState("");
    const [video, setVideo] = useState(null);
    const [media, setMedia] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await getPictureOfTheDay();

            if (response[index].hdurl) {
                setHDURL(response[index].hdurl)
            } else if (response[index].url) {
                setURL(response[index].url)
            }

            if (response[index].hdurl) {
                setImage(response[index].hdurl);
                setVideo(response[index].hdurl);
            } else if (response[index].url) {
                setImage(response[index].url);
                setVideo(response[index].url);
            } else {
                setImage(null);
                setVideo(null);
            }

            if (response[index].media_type) {
                setMedia(response[index].media_type);
            } else {
                setMedia("N/A");
            }
        }
        fetchData();
    }, [])

    return (
        <div style={{padding: `30px`, backgroundColor: `#2d2d35`, borderRadius: `8px`, marginTop: `20px`}}>
            <h1 style={{margin: `0 0 10px 0`, fontSize: `24px`}}>Universe Console V1.0</h1>
            <p style={{color: `#a0a0b0`, margin: `0 0 20px 0`, fontSize: `15px`}}>
                Analytical Computing Environment For Celestial Mechanics And Particle Physics.
            </p>

            <div style={{backgroundColor: `#1e1e24`, padding: `15px`, borderRadius: `6px`, fontFamily: `monospace`, fontSize: `13px`, borderLeft: `4px solid #4a4ae2`}}>
                <p style={{margin: `0 0 5px 0`, color: `#4af626`}}>Local Engine Active</p>
                <p style={{margin: `0 0 5px 0`}}>&gt; Target Institution: Embry-Riddle Aeronautical University</p>
                <p style={{margin: `0`}}>&gt; Current Module: Distance Modulus Analytics (Ready)</p>
            </div>

            <div>
                <h2 style={{margin: `0 0 20px 0`, fontSize: `15px`, marginTop: `40px`}}>Picture Of The Day:</h2>
                {media == "image" ? (
                <img src={image} alt="Some Picture" style={{width: `500px`}}/>
                ) : media == "video" && video.indexOf("youtube") > 0 ? (
                    <iframe
                    width="560"
                    height="315"
                    src={video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    ></iframe>
                ) : media == "video" && video.indexOf("mp4") > 0 ? (
                    <video controls width="75%">
                    <source src = {video} type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                ) : media == "other" && !media.url ? (
                    <h1 id="other">There Is No Content To Be Loaded</h1>
                ) : media == "other" && media.url ? (
                    <h1 id="other">
                    This is just dummy text until a media type of other with a url is
                    seen, so if these words are seen then I'll have extra stuff to do
                    </h1>
                ) : (
                    <p id="fail">
                    No content loaded. Check it out{" "}
                    <a href={URL} target="_blank">
                        here
                    </a>
                    </p>
                )}
            </div>
        </div>
    )
}

export default Home