import Button from "components/Button";
import React, { useEffect, useState } from "react";
import { Cropper } from "react-cropper";
import { PhotoNode } from ".";

export default function CropView(props: { localId: number | null; file: any; onCrop: (d: { localId: number | null; blob: any }) => any; onCancel: () => any }) {
  const { onCancel, onCrop } = props;

  const [uri, setUri] = useState("");
  const [cropper, setCropper] = useState<any>();

  useEffect(() => {
    if (props.file) {
      setUri(URL.createObjectURL(props.file));
    }
  }, [props.file]);

  const onC = () => {
    cropper.getCroppedCanvas().toBlob(async (b: any) => {
      onCrop({ localId: props.localId, blob: b });
    });
  };

  return (
    <div>
      <div
        style={{
          maxWidth: 400,
          margin: "auto",
        }}
      >
        {uri && (
          <Cropper
            style={{ height: 300, width: "auto" }}
            src={uri}
            guides={false}
            // ref={cropRef}
            onInitialized={(instance) => {
              setCropper(instance);
            }}
          />
        )}
      </div>

      <div className="py-3 flex justify-center gap-1 mt-2">
        <Button red onClick={onCancel}>
          Cancel
        </Button>
        <Button primary onClick={onC}>
          Crop
        </Button>
      </div>
    </div>
  );
}
