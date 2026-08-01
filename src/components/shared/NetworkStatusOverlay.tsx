"use client";

import { AnimatePresence, motion } from "motion/react";

import { useEffect, useState } from "react";

type NetworkInformation = EventTarget & {
  effectiveType?: "slow-2g" | "2g" | "3g" | "4g";

  saveData?: boolean;

  downlink?: number;
};

type NavigatorWithConnection = Navigator & {
  connection?: NetworkInformation;
  mozConnection?: NetworkInformation;
  webkitConnection?: NetworkInformation;
};

export default function NetworkStatusOverlay() {
  const [online, setOnline] = useState(true);

  const [slowConnection, setSlowConnection] = useState(false);

  const [recentlyReconnected, setRecentlyReconnected] = useState(false);

  /*
  |--------------------------------------------------------------------------
  | Network detection
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const navigatorWithConnection = navigator as NavigatorWithConnection;

    const connection =
      navigatorWithConnection.connection ??
      navigatorWithConnection.mozConnection ??
      navigatorWithConnection.webkitConnection;

    const checkNetwork = () => {
      const currentlyOnline = navigator.onLine;

      setOnline(currentlyOnline);

      if (!currentlyOnline) {
        setSlowConnection(false);
        return;
      }

      if (!connection) {
        setSlowConnection(false);
        return;
      }

      const effectiveType = connection.effectiveType;

      const slow =
        effectiveType === "slow-2g" ||
        effectiveType === "2g" ||
        connection.saveData === true ||
        (typeof connection.downlink === "number" &&
          connection.downlink > 0 &&
          connection.downlink < 0.8);

      setSlowConnection(slow);
    };

    const handleOffline = () => {
      setOnline(false);
      setRecentlyReconnected(false);
    };

    const handleOnline = () => {
      setOnline(true);

      checkNetwork();

      setRecentlyReconnected(true);

      window.setTimeout(() => {
        setRecentlyReconnected(false);
      }, 3000);
    };

    checkNetwork();

    window.addEventListener("online", handleOnline);

    window.addEventListener("offline", handleOffline);

    connection?.addEventListener("change", checkNetwork);

    return () => {
      window.removeEventListener("online", handleOnline);

      window.removeEventListener("offline", handleOffline);

      connection?.removeEventListener("change", checkNetwork);
    };
  }, []);

  return (
    <>
      {/* =====================================================
          OFFLINE VIEW
      ===================================================== */}

      <AnimatePresence>
        {!online && (
          <motion.div
            role="alert"
            aria-live="assertive"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="fixed inset-0 z-[10001] flex h-[100dvh] items-center overflow-hidden bg-[#090909] text-[#f3f0e9]"
          >
            {/* Background */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden sm:block"
            >
              <span className="absolute left-1/4 top-0 h-full w-px bg-white/[0.05]" />

              <span className="absolute left-1/2 top-0 h-full w-px bg-white/[0.05]" />

              <span className="absolute left-3/4 top-0 h-full w-px bg-white/[0.05]" />
            </div>

            <div className="site-container relative">
              <p className="mb-7 text-[9px] uppercase tracking-[0.28em] text-white/35">
                Connection interrupted
              </p>

              <h2 className="font-serif text-[clamp(4rem,17vw,10rem)] leading-[0.8] tracking-[-0.06em]">
                Waiting for
                <br />
                <em className="font-normal text-white/35">connection.</em>
              </h2>

              <div className="mt-10 max-w-md border-t border-white/10 pt-7">
                <p className="text-sm leading-7 text-white/40">
                  Your internet connection appears to be unavailable. The
                  portfolio will continue automatically when your connection
                  returns.
                </p>

                <div className="mt-7 flex items-center gap-4">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-20" />

                    <span className="relative inline-flex h-3 w-3 rounded-full bg-white/70" />
                  </span>

                  <span className="text-[8px] uppercase tracking-[0.22em] text-white/30">
                    Reconnecting
                  </span>
                </div>
              </div>
            </div>

            <div className="loading-progress-line absolute bottom-0 left-0 h-[2px] bg-white" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          SLOW CONNECTION INDICATOR
      ===================================================== */}

      <AnimatePresence>
        {online && slowConnection && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            className="fixed bottom-5 right-5 z-[9990] max-w-[260px] border border-white/10 bg-[#111111]/95 px-5 py-4 text-white shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-white/60" />

              <div>
                <p className="text-[8px] uppercase tracking-[0.2em] text-white/60">
                  Slow connection
                </p>

                <p className="mt-2 text-xs leading-5 text-white/35">
                  Images and pages may take a little longer to load.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          RECONNECTED
      ===================================================== */}

      <AnimatePresence>
        {online && recentlyReconnected && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            className="fixed bottom-5 right-5 z-[10002] border border-white/10 bg-[#111111] px-5 py-4 text-white shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-white" />

              <p className="text-[8px] uppercase tracking-[0.2em] text-white/65">
                Connection restored
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
