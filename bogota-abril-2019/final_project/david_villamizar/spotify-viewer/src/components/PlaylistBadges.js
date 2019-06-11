import React from "react";
import { MdGroup, MdLock, MdPublic } from "react-icons/md";
import styles from "./PlaylistBadges.module.css";

export default function PlaylistBadges({ isPublic, collaborative }) {
  return (
    <p className={styles.badges}>
      {isPublic ? (
        <span className={styles.badge}>
          <MdPublic /> Public
        </span>
      ) : (
        <span className={styles.badge}>
          <MdLock /> Private
        </span>
      )}
      {collaborative ? (
        <span className={styles.badge}>
          <MdGroup /> Collaborative
        </span>
      ) : null}
    </p>
  );
}
