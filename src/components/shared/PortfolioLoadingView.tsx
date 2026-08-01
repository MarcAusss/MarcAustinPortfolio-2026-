type PortfolioLoadingViewProps = {
  theme: "photography" | "developer";
};

export default function PortfolioLoadingView({
  theme,
}: PortfolioLoadingViewProps) {
  const photography = theme === "photography";

  const background = photography ? "#090909" : "#f3f1ec";

  const foreground = photography ? "#f3f0e9" : "#141414";

  const muted = photography ? "rgba(255,255,255,0.32)" : "rgba(20,20,20,0.35)";

  const border = photography ? "rgba(255,255,255,0.10)" : "rgba(20,20,20,0.10)";

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
      className="fixed inset-0 z-[9997] h-[100dvh] overflow-hidden"
      style={{
        background,
        color: foreground,
      }}
    >
      {/* ===============================================
          BACKGROUND GRID
      =============================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden sm:block"
      >
        <span
          className="absolute left-1/4 top-0 h-full w-px"
          style={{
            background: border,
          }}
        />

        <span
          className="absolute left-1/2 top-0 h-full w-px"
          style={{
            background: border,
          }}
        />

        <span
          className="absolute left-3/4 top-0 h-full w-px"
          style={{
            background: border,
          }}
        />
      </div>

      {/* ===============================================
          HEADER
      =============================================== */}

      <div className="absolute left-0 right-0 top-0">
        <div className="site-container">
          <div
            className="flex h-[82px] items-center justify-between border-b lg:h-[92px]"
            style={{
              borderColor: border,
            }}
          >
            <span className="text-[9px] uppercase tracking-[0.24em]">
              Marc Austin
            </span>

            <span
              className="text-[8px] uppercase tracking-[0.24em]"
              style={{
                color: muted,
              }}
            >
              Loading portfolio
            </span>
          </div>
        </div>
      </div>

      {/* ===============================================
          CENTER
      =============================================== */}

      <div className="site-container flex h-full items-center">
        <div className="w-full">
          <p
            className="mb-7 text-[8px] uppercase tracking-[0.3em] sm:text-[9px]"
            style={{
              color: muted,
            }}
          >
            Please wait
          </p>

          <div className="overflow-hidden">
            <h1 className="font-serif text-[clamp(4rem,18vw,13rem)] leading-[0.78] tracking-[-0.06em]">
              {photography ? "Loading" : "Building"}
              <br />

              <em
                className="font-normal"
                style={{
                  color: muted,
                }}
              >
                {photography ? "the frame." : "the view."}
              </em>
            </h1>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <span
              className="h-px w-10 sm:w-12"
              style={{
                background: foreground,
              }}
            />

            <span
              className="text-[8px] uppercase tracking-[0.22em]"
              style={{
                color: muted,
              }}
            >
              {photography
                ? "Stories × Light × Moments"
                : "Code × Systems × Design"}
            </span>
          </div>
        </div>
      </div>

      {/* ===============================================
          BOTTOM
      =============================================== */}

      <div className="absolute bottom-7 left-0 right-0">
        <div className="site-container">
          <div className="flex items-end justify-between">
            <div>
              <p
                className="text-[7px] uppercase tracking-[0.2em] sm:text-[8px]"
                style={{
                  color: muted,
                }}
              >
                Loading content
              </p>

              <div className="mt-3 flex items-center gap-1.5">
                <LoadingDot color={foreground} delay="0s" />

                <LoadingDot color={foreground} delay="0.15s" />

                <LoadingDot color={foreground} delay="0.3s" />
              </div>
            </div>

            <span
              className="font-serif text-xl italic sm:text-2xl"
              style={{
                color: muted,
              }}
            >
              {photography ? "Hold the moment." : "Almost there."}
            </span>
          </div>
        </div>
      </div>

      {/* ===============================================
          PROGRESS LINE
      =============================================== */}

      <div
        className="loading-progress-line absolute bottom-0 left-0 h-[2px]"
        style={{
          background: foreground,
        }}
      />
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| Loading dot
|--------------------------------------------------------------------------
*/

function LoadingDot({ color, delay }: { color: string; delay: string }) {
  return (
    <span
      className="loading-dot h-1.5 w-1.5 rounded-full"
      style={{
        background: color,
        animationDelay: delay,
      }}
    />
  );
}
