"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const bannerWebp = "/banner.webp";
const banner375Webp = "/banner-375.webp";
const ul1Webp = "/ul-1.webp";
const ul2Webp = "/ul-2.webp";
const ul3Webp = "/ul-3.webp";
const videoIcon = "/video.svg";
const videoUrl =
  "https://betadin.ru/wp-content/uploads/2025/05/istorii-betadin_semejnyj-rolik.mp4";

const Header: React.FC = () => {
  const t = useTranslations("home.header");
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsVideoOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const body = document.body;

    if (isVideoOpen) {
      body.style.overflow = "hidden";
      videoRef.current?.play().catch(() => undefined);
    } else {
      body.style.overflow = "";
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }

    return () => {
      body.style.overflow = "";
    };
  }, [isVideoOpen]);

  const openVideo = () => {
    if ((window as any).ym) {
      (window as any).ym(37744585, "reachGoal", "watch_video");
    }
    setIsVideoOpen(true);
  };

  const closeVideo = () => setIsVideoOpen(false);

  return (
    <>
      <div className="container betadin-home">
        <div className="bg-green"></div>
        <h1 className="home-title">
          <span>
            {t("brand")}
            <sup>®</sup>
          </span>
        </h1>
        <picture className="home-banner">
          <source media="(max-width: 1023px)" srcSet={banner375Webp} />
          <img decoding="async" src={bannerWebp} alt="" />
        </picture>
        <ul className="home-ul">
          <li>
            <picture>
              <img decoding="async" src={ul1Webp} alt="" />
            </picture>
            <span>{t("features.family_antiseptic")}</span>
          </li>
          <li>
            <picture>
              <img decoding="async" src={ul2Webp} alt="" />
            </picture>
            <span>{t("features.fights_infections")}</span>
          </li>
          <li>
            <picture>
              <img decoding="async" src={ul3Webp} alt="" />
            </picture>
            <span>{t("features.easy_to_use")}</span>
          </li>
        </ul>
        <div className="home-btns">
          <a href="#preimushchestva-betadin" className="btn btn-green-home">
            {t("buttons.learn_more")}
          </a>
          <div className="btn btn-video">
            {t("buttons.video")} <img decoding="async" src={videoIcon} alt="" />
            <button
              type="button"
              className="link-hide glightbox"
              onClick={openVideo}
            >
              {t("buttons.watch")}
            </button>
          </div>
        </div>
      </div>
        {isVideoOpen && (
            <div
            className="home-video-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={t("buttons.video")}
            onClick={closeVideo}
            >
            <div
                className="home-video-dialog"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                type="button"
                className="home-video-close"
                aria-label="Close video"
                onClick={closeVideo}
                >
                ×
                </button>
                <div className="home-video-frame">
                <video ref={videoRef} controls playsInline>
                    <source src={videoUrl} type="video/mp4" />
                    {t("buttons.watch")}
                </video>
                </div>
            </div>
            </div>
        )}
    </>
  );
};

export default Header;
