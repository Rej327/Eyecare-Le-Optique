import variable from "@/styles/clinics.module.scss";
import Image from "next/image";
import map from "@/assets/map.png";
import Link from "next/link";
import { STRING } from "../constant/String";

const { clinicPhoto } = STRING;

export default function CatanauanClinic() {
  return (
    <div className={variable.content}>
      <p className={variable.header}>VISIT US</p>
      <div className={variable.location}>
        <Link href="https://goo.gl/maps/jPZHJTca8tKM1aZh6" target="_blank">
          <Image
            src={map}
            alt="location"
            height={350}
            width={500}
            className={variable.map}
          />
        </Link>
        <div className={variable.details}>
          <p className={variable.town}>Catanauan, Quezon</p>
          <p className={variable.address}>Rayodesol Lorem ipsum dolor</p>
          <div className={variable.schedule}>
            <p>Hours</p>
            <p>Monday : 9:00 AM - 6:00 PM</p>
            <p>Monday : 9:00 AM - 6:00 PM</p>
            <p>Monday : 9:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
      <p className={variable.head}>Inside Clinic</p>
      <div className={variable.clinicPhotos}>
        {clinicPhoto.map((data) => (
          <div>
            <Image
              src={data.img}
              alt="clinic"
              height={300}
              width={350}
              className={variable.clinicImages}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
