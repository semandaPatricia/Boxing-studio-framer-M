"use client";
import React from "react";
import styles from "./Gallery.module.css";
import CustomImage from "../customImage/CustomImage";

import ImageOne from "../../../public/Images/boxing9.jpg";
import ImageTwo from "../../../public/Images/boxing3.jpg";
import ImageThree from "../../../public/Images/boxing4.jpg";;
import ImageFour from "../../../public/Images/boxing5.jpg";
import ImageFive from "../../../public/Images/boxing6.jpg";
import ImageSix from "../../../public/Images/boxing7.jpg";
const Gallery = () => {
  return (
    <section className={styles.section}>
            <div className={styles.gallery}>
                <div
                    className={styles.imageContainer}
                    style={{ justifyContent: "flex-start" }}
                >
                    <CustomImage
                        imageSource={ImageOne}
                        imageStyle={{ width: "95%" }}
                    />
                </div>
                <div
                    className={styles.imageContainer}
                    style={{ justifyContent: "flex-start" }}
                >
                    <CustomImage
                        imageSource={ImageFive}
                        imageStyle={{ width: "90%" }}
                    />
                </div>
                <div
                    className={styles.imageContainer}
                    style={{ justifyContent: "flex-end" }}
                >
                    <CustomImage
                        imageSource={ImageFour}
                        imageStyle={{ width: "85%" }}
                    />
                </div>
                <div
                    className={styles.imageContainer}
                    style={{ justifyContent: "flex-start" }}
                >
                    <CustomImage
                        imageSource={ImageThree}
                        imageStyle={{ width: "75%" }}
                    />
                </div>
                <div
                    className={styles.imageContainer}
                    style={{ justifyContent: "flex-start" }}
                >
                    <CustomImage
                        imageSource={ImageTwo}
                        imageStyle={{ width: "95%" }}
                    />
                </div>
                <div
                    className={styles.imageContainer}
                    style={{ justifyContent: "flex-start" }}
                >
                    <CustomImage
                        imageSource={ImageSix}
                        imageStyle={{ width: "75%" }}
                    />
                </div>
            </div>
        </section>
  )
}

export default Gallery