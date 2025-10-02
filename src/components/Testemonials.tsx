import Image from "next/image";
import { AvatarCircles } from "./ui/avatar-circles";

export default function Testemonials() {
  return (
    <div className="w-full min-h-screen bg-zinc-800 text-zinc-50 flex flex-col md:flex-row items-center justify-center gap-10 py-10 relative">
      <div className="flex flex-col items-center justify-around gap-10">

      <div className="flex flex-col items-center justify-center gap-4">

        <h4 className="text-3xl font-bold">
          What our Clients Say About Us
        </h4>
        <p className=" text-md max-w-100 ">Dont just take our word listen to what others have to say</p>
      </div>

      <div className="flex gap-4 items-center justify-center">
         <AvatarCircles
          numPeople={30}
          avatarUrls={[
            {
              imageUrl: "https://lh3.googleusercontent.com/a-/ALV-UjVHQH9BE0aHBU8FloxGfD-DQR05vbFZBdrz0wXl0hLp0s11GTr4=w90-h90-p-rp-mo-ba2-br100",
              profileUrl: "",
            },
            {
              imageUrl: "https://lh3.googleusercontent.com/a-/ALV-UjUgfTkgc6OsE92zw6PEDMLA2K1StnHaLKXSBqFe8237qZDBRdCXYw=w90-h90-p-rp-mo-ba5-br100",
              profileUrl: "",
            },
            {
              imageUrl: "https://lh3.googleusercontent.com/a-/ALV-UjWP-mq94GXl6sD5IZRFxwiy6JBL3ev3aD_ckO_PWOiK2se_qFf7xw=w90-h90-p-rp-mo-ba5-br100",
              profileUrl: "",
            },
          ]}
        />
        <p>⭐⭐⭐⭐ 4.1(94 Reviews) </p>
      </div>

      </div>

      <div>
        <Image
        src={'/arrow.svg'}
        alt="arrow"
        width={100}
        height={100}
        className=" opacity-10 rotate absolute bottom-40 right-[45%]"
        />
      </div>
      <div className="bg-zinc-600 w-80 h-80 p-6 rounded-lg flex flex-col items-start justify-around gap-4">
        <div className="flex flex-col items-start justify-center gap-1">
          <p className="text-bold text-xl">Rahul Jain</p>
          <p className="text-sm">Happy Customer</p>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
        <div>
          <p>going to this gym for about 2 years and i must say it is pretty good</p>
        </div>
      </div>

    </div>
  )
}
