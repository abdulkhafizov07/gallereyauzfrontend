"use client";

import React from "react";
import { useThemeContext } from "@/hooks/theme";
import { Button } from "../ui/button";
import { SunIcon, MoonIcon, LogInIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export const NavbarComponent = () => {
  const { isDark, toggleTheme } = useThemeContext();
  const t = useTranslations("navbar");

  return (
    <nav className="w-full fixed top-0 left-0 z-90" id="navbar">
      <div className="w-full h-28 bg-white/5 dark:bg-black/5 backdrop-blur-xl transition-colors duration-200 ease-in">
        <div className="relative container h-full px-4 mx-auto flex items-center justify-between">
          <a href="/" className="brand">
            <img
              src={`/assets/logo/${isDark ? "dark" : "light"}.svg`}
              alt=""
              className="w-auto h-12"
            />
          </a>

          <div className="flex items-center justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-lg cursor-pointer"
              onClick={toggleTheme}
            >
              <div className="relative w-8 h-8 overflow-hidden">
                <span
                  className={
                    `absolute flex items-center justify-center w-8 h-8 left-0 transition-all duration-500 ease-in ` +
                    String(isDark ? "top-0" : "top-full")
                  }
                >
                  <SunIcon className="w-8 h-8" />
                </span>
                <span
                  className={
                    `absolute flex items-center justify-center w-8 h-8 left-0 transition-all duration-500 ease-in ` +
                    String(!isDark ? "top-0" : "-top-full")
                  }
                >
                  <MoonIcon className="w-8 h-8" />
                </span>
              </div>
            </Button>

            <Button asChild className="h-12">
              <a href="/auth/sign-in/">
                <span className="icon">
                  <LogInIcon />
                </span>
                <span className="text">{t("login")}</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
