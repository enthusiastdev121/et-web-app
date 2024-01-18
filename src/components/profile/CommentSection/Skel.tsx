import Skeleton from "react-loading-skeleton";

export const CommentsSkel = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <Skeleton
          style={{
            height: 40,
            width: 40,
            borderRadius: "100%",
          }}
        />
        <Skeleton style={{ height: 18, width: 100, borderRadius: "4" }} />
        <Skeleton style={{ height: 18, width: 20, borderRadius: "4" }} />
      </div>
      <Skeleton
        style={{
          height: 18,
          width: "100%",
          maxWidth: 700,
          borderRadius: "4",
          marginTop: 10,
        }}
      />

      <div className="flex items-center gap-2">
        <Skeleton style={{ height: 18, width: 50, borderRadius: "4" }} />
        <Skeleton style={{ height: 18, width: 50, borderRadius: "4" }} />
        <Skeleton style={{ height: 18, width: 20, borderRadius: "4" }} />
      </div>
    </div>
  );
};
