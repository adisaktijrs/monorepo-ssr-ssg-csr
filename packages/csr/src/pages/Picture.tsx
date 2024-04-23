import { ChangeEvent, useRef, useState } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";

const Picture = () => {
  const [predictions, setPredictions] = useState<cocoSsd.DetectedObject[]>([]);
  const [loading, setLoading] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageElement = imageRef.current!;
      imageElement.src = URL.createObjectURL(file);
      setLoading(true);
      const model = await cocoSsd.load();
      const predictions = await model.detect(imageElement);
      setPredictions(predictions);
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4 p-2 border rounded-md"
      />
      <img
        ref={imageRef}
        alt="Selected"
        className="mt-4 max-w-32 rounded-md shadow-md"
        src={undefined}
      />
      <div className="mt-4">
        {loading ? (
          <p className="mt-4">Loading...</p>
        ) : (
          <div>
            <div className="mt-4">
              <h2 className="font-bold mb-2">Predictions:</h2>
              <ul className="list-disc pl-4">
                {predictions.map((prediction, index) => (
                  <li key={index} className="mb-1">
                    {prediction.class} - Confidence:{" "}
                    {(prediction.score * 100).toFixed(2)}%
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Picture;
