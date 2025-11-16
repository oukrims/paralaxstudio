"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { localizeHref } from "@/lib/localizeHref";

type CookieBannerProps = {
  locale: Locale;
};

export function CookieBanner({ locale }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    setIsVisible(false);
  };

  const acceptSelected = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    setIsVisible(false);
  };

  const rejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    setIsVisible(false);
  };

  const content = {
    fr: {
      title: "Nous utilisons des cookies",
      description: "Nous utilisons des cookies pour améliorer votre expérience sur notre site. Vous pouvez accepter tous les cookies ou personnaliser vos préférences.",
      acceptAll: "Tout accepter",
      rejectAll: "Tout refuser",
      customize: "Personnaliser",
      savePreferences: "Enregistrer mes préférences",
      necessary: {
        title: "Cookies nécessaires",
        description: "Ces cookies sont essentiels au fonctionnement du site.",
      },
      analytics: {
        title: "Cookies analytiques",
        description: "Ces cookies nous aident à comprendre comment les visiteurs utilisent notre site.",
      },
      marketing: {
        title: "Cookies marketing",
        description: "Ces cookies sont utilisés pour afficher des publicités pertinentes.",
      },
      privacyPolicy: "Politique de confidentialité",
    },
    en: {
      title: "We use cookies",
      description: "We use cookies to improve your experience on our site. You can accept all cookies or customize your preferences.",
      acceptAll: "Accept all",
      rejectAll: "Reject all",
      customize: "Customize",
      savePreferences: "Save my preferences",
      necessary: {
        title: "Necessary cookies",
        description: "These cookies are essential for the site to function.",
      },
      analytics: {
        title: "Analytics cookies",
        description: "These cookies help us understand how visitors use our site.",
      },
      marketing: {
        title: "Marketing cookies",
        description: "These cookies are used to display relevant ads.",
      },
      privacyPolicy: "Privacy Policy",
    },
  };

  const text = content[locale];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-[10000] p-4 sm:p-6"
        >
          <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-[#0a0a0a]/95 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:p-8">
            {!showSettings ? (
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {text.title}
                    </h3>
                    <p className="text-sm text-neutral-400">
                      {text.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Link
                    href={localizeHref(locale, "/privacy")}
                    className="text-sm text-neutral-400 underline transition-colors hover:text-neutral-200"
                  >
                    {text.privacyPolicy}
                  </Link>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      onClick={() => setShowSettings(true)}
                      className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
                    >
                      {text.customize}
                    </button>
                    <button
                      onClick={rejectAll}
                      className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
                    >
                      {text.rejectAll}
                    </button>
                    <button
                      onClick={acceptAll}
                      className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-neutral-200"
                    >
                      {text.acceptAll}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-white">
                    {text.customize}
                  </h3>

                  <div className="space-y-4">
                    {/* Necessary Cookies */}
                    <div className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/5 p-4">
                      <input
                        type="checkbox"
                        checked={preferences.necessary}
                        disabled
                        className="mt-1 h-5 w-5 rounded border-white/20 bg-white/10"
                      />
                      <div className="flex-1">
                        <h4 className="mb-1 text-sm font-semibold text-white">
                          {text.necessary.title}
                        </h4>
                        <p className="text-xs text-neutral-400">
                          {text.necessary.description}
                        </p>
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="flex items-start gap-4 rounded-lg border border-white/10 p-4">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) =>
                          setPreferences({ ...preferences, analytics: e.target.checked })
                        }
                        className="mt-1 h-5 w-5 rounded border-white/20 bg-white/10 accent-white"
                      />
                      <div className="flex-1">
                        <h4 className="mb-1 text-sm font-semibold text-white">
                          {text.analytics.title}
                        </h4>
                        <p className="text-xs text-neutral-400">
                          {text.analytics.description}
                        </p>
                      </div>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="flex items-start gap-4 rounded-lg border border-white/10 p-4">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) =>
                          setPreferences({ ...preferences, marketing: e.target.checked })
                        }
                        className="mt-1 h-5 w-5 rounded border-white/20 bg-white/10 accent-white"
                      />
                      <div className="flex-1">
                        <h4 className="mb-1 text-sm font-semibold text-white">
                          {text.marketing.title}
                        </h4>
                        <p className="text-xs text-neutral-400">
                          {text.marketing.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <button
                    onClick={() => setShowSettings(false)}
                    className="rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
                  >
                    {locale === "fr" ? "Retour" : "Back"}
                  </button>
                  <button
                    onClick={acceptSelected}
                    className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-neutral-200"
                  >
                    {text.savePreferences}
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
