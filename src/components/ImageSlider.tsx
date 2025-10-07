"use client"
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState,useMemo } from "react";

export default function ImageSlider() {

  const images = useMemo(() => [
        'https://163jz9wo57.ufs.sh/f/LDDo8gC5wt4WRqWCjSpJlDntNUcbY0GVyoer7FaQwTW4g6dZ',
        'https://163jz9wo57.ufs.sh/f/LDDo8gC5wt4Wx5YwVGMolMhgkbv7f6CTnQWrF2SJ8ZIpKPXL',
        "https://163jz9wo57.ufs.sh/f/LDDo8gC5wt4W2KNd1wy9jcPzDYrpnuKVFAvkhQg3mSolBsRW",
        "https://163jz9wo57.ufs.sh/f/LDDo8gC5wt4WEBJpqaABsleDQnuFANY4jq23LXOVh687zMKT",
        "https://163jz9wo57.ufs.sh/f/LDDo8gC5wt4WXH18sR6MP5D3keij7B80yuUQItrm1saCl9cE",
        "https://163jz9wo57.ufs.sh/f/LDDo8gC5wt4WQn05LBGMgVl3b1Ohyf0j4PIixnpaZmBoqeLD",
        "https://163jz9wo57.ufs.sh/f/LDDo8gC5wt4WT2J99KWovkbOJNXdUrcz2qHG1e36ZjaPER7L",
        "https://163jz9wo57.ufs.sh/f/LDDo8gC5wt4WXNtjsB6MP5D3keij7B80yuUQItrm1saCl9cE",
        "https://163jz9wo57.ufs.sh/f/LDDo8gC5wt4WK7HYQu8h2WLf4xwUuqHgTzNAsnbQCiJDGBFy",
        "https://163jz9wo57.ufs.sh/f/LDDo8gC5wt4WJTbuBG2m4TKvQ5lRDMWYXuenEx7sLq69brpI",
        "https://163jz9wo57.ufs.sh/f/LDDo8gC5wt4W0UTydkqyCfjdoIrXxQG1zc9KkMDOL2buqNvF",
        "https://163jz9wo57.ufs.sh/f/LDDo8gC5wt4WZrYbTA9QSp80aY9r4wU7yoLVsbxfhg6A3jXl",
        "https://163jz9wo57.ufs.sh/f/LDDo8gC5wt4WOiVUUXw4vTkzeXb3pfCEw4gQt0aNWUS6PcBM",
        "https://163jz9wo57.ufs.sh/f/LDDo8gC5wt4Wo8W5umJoKJD9UQWTctZFdL0sgzpXNk8mn6HS"
    ], []);
    // const [images, setImages] = useState<string[]>(imagesUrl);
    const [currentIndex, setCurrentIndex] = useState(0);
    // map through images and display them in a horizontal scrollable div
    const handlePrev = () => {
        setCurrentIndex( index => {
            if (index === 0) return images?.length - 1;
            return index - 1;
        })
    }
    const handleNext = () => {
          setCurrentIndex( index => {
            if (index === images?.length - 1) return 0;
            return index + 1;
        })
    }
    useEffect(()=>{
        setTimeout(() => {
            if (currentIndex < images.length - 1) {
                setCurrentIndex(currentIndex + 1);
            }else{
                setCurrentIndex(0);
            }
        }, 3000);
    },[images, currentIndex])

  return (
    <div className="max-h-fit flex items-center justify-center gap-4 ">
        <button onClick={handlePrev} className="p-2 bg-yellow-50 text-black rounded-full"><ArrowLeft/></button>
      <div className="relative w-68 h-90 md:w-120 md:h-150 overflow-hidden bg-yellow-200  rounded-md flex ">
   <div
    className="flex transition-transform duration-300 ease-in-out"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {images.map((img, index) => (
      <Image
        key={index}
        src={img}
        width={400}
        height={400}
        alt="gym image"
        className="object-center  w-full h-full shrink-0 grow-0"
      />
    ))}
  </div>
      </div>
        <button onClick={handleNext} className="p-2 bg-yellow-50 text-black rounded-full"><ArrowRight/></button>
    </div>
  )
}
