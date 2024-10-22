import React from "react";
import {
  ButtonPrimaryMd,
  ButtonPrimaryLg,
  ButtonPrimaryXl,
  ButtonPrimary2xl,
} from "../components/buttons";

const buttonsPage = () => {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex flex-row items-center justify-center gap-4">
        <ButtonPrimaryMd>Button CTA</ButtonPrimaryMd>

        <ButtonPrimaryLg icon="/icons/star.svg">Button CTA</ButtonPrimaryLg>

        <ButtonPrimaryXl icon="/icons/star.svg">Button CTA</ButtonPrimaryXl>

        <ButtonPrimary2xl>Button CTA</ButtonPrimary2xl>
      </div>
    </main>
  );
};

export default buttonsPage;
