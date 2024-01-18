import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const FeaturedPhotosSkelZero = () => {
  return (
    <div style={{ minWidth: "200px" }} className="flex flex-col items-center">
      <Skeleton
        style={{
          height: 300,
          width: 200,
        }}
      />
      <Skeleton
        style={{
          height: 50,
          width: 200,
          borderRadius: 50,
        }}
      />
    </div>
  );
};

export const FeaturedPhotosSkelOne = () => {
  return (
    <div style={{ minWidth: "200px" }} className="flex flex-col items-center">
      <Skeleton
        style={{
          height: 300,
          width: 200,
        }}
      />
      <Skeleton
        style={{
          height: 200,
          width: 200,
        }}
      />
      <Skeleton
        style={{
          height: 50,
          width: 200,
          borderRadius: 50,
        }}
      />
    </div>
  );
};

export const FeaturedPhotosSkelTwo = () => {
  return (
    <div className="flex gap-1">
      <div>
        <Skeleton
          style={{
            height: 300,
            width: 200,
          }}
        />

        <Skeleton
          style={{
            height: 50,
            width: 200,
            borderRadius: 50,
          }}
        />
      </div>

      <div>
        <Skeleton
          style={{
            height: 200,
            width: 200,
          }}
        />
        <Skeleton
          style={{
            height: 200,
            width: 200,
          }}
        />
      </div>
    </div>
  );
};

export const FeaturedPhotosSkelThree = () => {
  return (
    <div className="flex gap-1 items-center">
      <div>
        <Skeleton
          style={{
            height: 300,
            width: 200,
          }}
        />
        <Skeleton
          style={{
            height: 200,
            width: 200,
          }}
        />
      </div>

      <div>
        <Skeleton
          style={{
            height: 200,
            width: 200,
          }}
        />
        <Skeleton
          style={{
            height: 200,
            width: 200,
          }}
        />
        <Skeleton
          style={{
            height: 50,
            width: 200,
            borderRadius: 50,
          }}
        />
      </div>
    </div>
  );
};

export const FeaturedPhotosSkelFour = () => {
  return (
    <div className="flex gap-1">
      <div>
        <Skeleton
          style={{
            height: 300,
            width: 200,
          }}
        />
        <Skeleton
          style={{
            height: 200,
            width: 200,
          }}
        />
        <Skeleton
          style={{
            height: 50,
            width: 200,
            borderRadius: 50,
          }}
        />
      </div>

      <div>
        <Skeleton
          style={{
            height: 200,
            width: 200,
          }}
        />
        <Skeleton
          style={{
            height: 200,
            width: 200,
          }}
        />
        <Skeleton
          style={{
            height: 200,
            width: 200,
          }}
        />
      </div>
    </div>
  );
};

export const PhotoGallerySkel = () => {
  return (
    <div className="grid grid-cols-3 gap-1 md:gap-3 grid-container px-1 sm:px-0 wdt">
      <div
        className="relative gallery-image-container"
        style={{ gridRow: "span 5" }}
      >
        <Skeleton
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <div
          className="absolute hidden md:block"
          style={{ bottom: "-5px", right: "5px" }}
        ></div>
      </div>

      <div
        className="relative gallery-image-container"
        style={{ gridRow: "span 7" }}
      >
        <Skeleton
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <div
          className="absolute hidden md:block"
          style={{ bottom: "-5px", right: "5px" }}
        ></div>
      </div>

      <div
        className="relative gallery-image-container"
        style={{ gridRow: "span 5" }}
      >
        <Skeleton
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <div
          className="absolute hidden md:block"
          style={{ bottom: "-5px", right: "5px" }}
        ></div>
      </div>

      <div
        className="relative gallery-image-container"
        style={{ gridRow: "span 5" }}
      >
        <Skeleton
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <div
          className="absolute hidden md:block"
          style={{ bottom: "-5px", right: "5px" }}
        ></div>
      </div>

      <div
        className="relative gallery-image-container"
        style={{ gridRow: "span 5" }}
      >
        <Skeleton
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <div
          className="absolute hidden md:block"
          style={{ bottom: "-5px", right: "5px" }}
        ></div>
      </div>

      <div
        className="relative gallery-image-container"
        style={{ gridRow: "span 3" }}
      >
        <Skeleton
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <div
          className="absolute hidden md:block"
          style={{ bottom: "-5px", right: "5px" }}
        ></div>
      </div>

      <div
        className="relative gallery-image-container"
        style={{ gridRow: "span 7" }}
      >
        <Skeleton
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <div
          className="absolute hidden md:block"
          style={{ bottom: "-5px", right: "5px" }}
        ></div>
      </div>

      <div
        className="relative gallery-image-container"
        style={{ gridRow: "span 5" }}
      >
        <Skeleton
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <div
          className="absolute hidden md:block"
          style={{ bottom: "-5px", right: "5px" }}
        ></div>
      </div>

      <div
        className="relative gallery-image-container"
        style={{ gridRow: "span 3" }}
      >
        <Skeleton
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <div
          className="absolute hidden md:block"
          style={{ bottom: "-5px", right: "5px" }}
        ></div>
      </div>

      <div
        className="relative gallery-image-container"
        style={{ gridRow: "span 6" }}
      >
        <Skeleton
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <div
          className="absolute hidden md:block"
          style={{ bottom: "-5px", right: "5px" }}
        ></div>
      </div>

      <div
        className="relative gallery-image-container"
        style={{ gridRow: "span 5" }}
      >
        <Skeleton
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <div
          className="absolute hidden md:block"
          style={{ bottom: "-5px", right: "5px" }}
        ></div>
      </div>
    </div>
  );
};

export const InroVideoSkel = () => {
  return (
    <>
      <Skeleton style={{}} />
    </>
  );
};

export const AllVideosSkel = () => {
  return (
    <div className="flex gap-5 flex-wrap">
      <div>
        <Skeleton
          style={{
            height: "260px",
            width: "100%",
            maxWidth: "463px",
          }}
        />
        <div className="mt-3">
          <Skeleton
            style={{
              height: 18,
              width: 200,
            }}
          />
          <Skeleton
            style={{
              height: 18,
              width: 400,
            }}
          />
        </div>
      </div>

      <div>
        <Skeleton
          style={{
            height: "260px",
            width: "100%",
            maxWidth: "463px",
          }}
        />
        <div className="mt-3">
          <Skeleton
            style={{
              height: 18,
              width: 200,
            }}
          />
          <Skeleton
            style={{
              height: 18,
              width: 400,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const AudiosSkel = () => {
  return (
    <>
      <div style={{ flexDirection: "column", display: "flex", gap: 10 }}>
        {[1, 2, 3].map((i) => {
          return (
            <div
              key={i}
              style={{
                width: "100%",
                display: "flex",
                gap: 8,
                alignItems: "center",
              }}
            >
              <div>
                <Skeleton
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: "100%",
                  }}
                />
              </div>
              <div style={{ flex: 0.7 }}>
                <Skeleton
                  style={{
                    height: 16,
                    width: "100%",
                    maxWidth: 400,
                    marginBottom: 2,
                    borderRadius: 6,
                  }}
                />
                <Skeleton
                  style={{
                    height: 16,
                    width: "100%",
                    maxWidth: 700,
                    marginBottom: 2,
                    borderRadius: 6,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export const DocumentSkel = () => {
  return (
    <>
      <div style={{ flexDirection: "column", display: "flex", gap: 10 }}>
        {[1, 2, 3].map((i) => {
          return (
            <div
              key={i}
              style={{
                width: "100%",
                display: "flex",
                gap: 8,
                alignItems: "center",
              }}
            >
              <div>
                <Skeleton
                  style={{
                    height: 64,
                    width: 64,
                    borderRadius: 10,
                  }}
                />
              </div>
              <div style={{ flex: 0.7 }}>
                <Skeleton
                  style={{
                    height: 16,
                    width: "100%",
                    maxWidth: 200,
                    marginBottom: 2,
                    borderRadius: 6,
                  }}
                />
                <Skeleton
                  style={{
                    height: 16,
                    width: "100%",
                    maxWidth: 400,
                    marginBottom: 2,
                    borderRadius: 6,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export const ExperienceSkel = () => {
  return (
    <>
      <Skeleton style={{}} />
    </>
  );
};

export const CreditsSkel = () => {
  return (
    <div>
      {[1, 2].map((i) => (
        <div key={i} className="mb-5">
          <Skeleton
            style={{
              height: 24,
              width: 200,
              marginBottom: 10,
            }}
          />

          <div className="mb-5">
            <Skeleton
              style={{
                height: 18,
                width: 300,
                marginLeft: 10,
                marginBottom: 5,
              }}
            />
            <Skeleton
              style={{
                height: 18,
                width: "100%",
                maxWidth: 500,
                marginLeft: 10,
              }}
            />
            <Skeleton
              style={{
                height: 18,
                width: "100%",
                maxWidth: 500,
                marginLeft: 10,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export const SocialSkel = () => {
  return (
    <div>
      <Skeleton
        style={{ width: "100%", maxWidth: 500, height: 18, marginBottom: 10 }}
      />

      <div className="flex items-center gap-3">
        {[1, 2, 3, 4, 5].map((i: any) => (
          <Skeleton
            key={i}
            style={{ width: 28, height: 28, borderRadius: "100%" }}
          />
        ))}
      </div>
    </div>
  );
};
