import { Axios } from "axios";
import PageProgressLoader from "components/PageProgressLoader";
import { useAuth } from "context/AuthContext";
import { formatPhotoNodeOwn } from "network/apiFormatter/profile";
import { uploadMedia } from "network/apis/ownProfile";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ApiImage, PhotoItemD } from "types/profile";

export default function AutoImageUploader({ onFinish, onCancel, file }: Props) {
  const cancelRef = useRef<any>();
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { token }: any = useAuth();

  const uploadNow = async () => {
    try {
      const raw = new FormData();
      raw.append("type", "1");
      raw.append("file", file);

      cancelRef.current = Axios.CancelToken.source();

      setUploading(true);

      const res = await Axios.post(uploadMedia().photo.route, raw, {
        headers: uploadMedia(token).photo.headers,
        cancelToken: cancelRef.current?.token,
        onUploadProgress: (progressEvent: any) => {
          const p = progressEvent.loaded / progressEvent.total;
          setProgress(p);
        },
      });

      setUploading(false);

      if (res.data?.id) {
        onFinish({
          uri: file.uri,
          data: {
            ...formatPhotoNodeOwn(res.data),
          },
        });
      }
    } catch (err: any) {
      console.log("ERR", err);
    }
  };

  useEffect(() => {
    if (file.uri) {
      uploadNow();
    }
  }, [file.uri]);

  return (
    <Root style={{}}>
      <Left>
        <InfoBar>
          <ImageIcon name="image" />
          <Name>{file?.name}</Name>
        </InfoBar>
      </Left>
      <CancelBtn
        onClick={() => {
          cancelRef.current?.cancel("manual");
          onCancel(file.uri);
        }}
      >
        <CancelIcon name="md-close" />
      </CancelBtn>

      {uploading && (
        <PageProgressLoader
          onCancel={() => {
            cancelRef.current?.cancel();
            setProgress(0);
          }}
          title="Uploading audio"
          progress={progress}
        />
      )}
    </Root>
  );
}

type Props = {
  file: ApiImage;
  onFinish: ({ }: { uri: string; data: PhotoItemD }) => void;
  onCancel: (uri: string) => void;
};

const Root = styled.div`
  border-radius: 12px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  /* height: 60px; */
  background: ${(p) => p.theme.surfaceBase};
`;
const Left = styled.div`
  flex: 1;
  padding-right: 10px;
  /* padding-left: 10px; */
`;
const InfoBar = styled.div`
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
`;
const ImageIcon = styled.div`
  font-size: 20px;
  color: ${(p) => p.theme.base};
  opacity: 0.7;
  margin-right: 4px;
`;
const Name = styled.div`
  font-size: 16px;
  opacity: 0.7;
`;
const BarCover = styled.div`
  width: 100%;
  height: 10px;
  background: #555;
  border-radius: 120px;
  overflow: hidden;
`;
const Bar = styled.div`
  height: 10px;
  background: ${(p) => p.theme.primary};
`;
const CancelBtn = styled.div`
  height: 42px;
  aspect-ratio: 1;
  background: #555;
  border-radius: 120px;
  align-items: center;
  justify-content: center;
`;
const CancelIcon = styled.div`
  color: ${(p) => p.theme.red};
  font-size: 22px;
`;
