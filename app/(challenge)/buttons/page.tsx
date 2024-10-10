import React from "react";
import styles from "./buttons.module.css";
import Image from "next/image";

const buttonsPage = () => {
  return (
    <main className="flex h-screen">
      <div className="flex shrink-0 flex-row items-center justify-center gap-4">
        <button className={styles.btn_primary_md}>Button CTA</button>

        <button className={styles.btn_primary_lg}>
          <Image
            src="/icons/star.svg"
            alt="button icon"
            width={20}
            height={20}
            className="p-[1.667px]"
          />
          Button CTA
        </button>

        <button className={styles.btn_primary_xl}>
          Button CTA
          <Image
            src="/icons/star.svg"
            alt="button icon"
            width={20}
            height={20}
            className="p-[1.667px]"
          />
        </button>

        <button className={styles.btn_primary_2xl}>
          Button CTA
          <Image
            src="/icons/star.svg"
            alt="button icon"
            width={20}
            height={20}
            className="p-[1.667px]"
          />
        </button>
      </div>
    </main>
  );
};

export default buttonsPage;
