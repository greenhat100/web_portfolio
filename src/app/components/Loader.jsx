import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px", // Add padding here
        width: "100%", // Ensure the loader takes full width
        height: "100%", // Ensure the loader takes full height
      }}
    >
      <div
        style={{
          width: "50px", // Adjust width as needed
          height: "50px", // Adjust height as needed
          border: "3px solid #fff", // Add border for visibility
          borderRadius: "50%", // Ensure the loader is circular
          animation: "spin 1s linear infinite", // Add a spin animation
        }}
      ></div>
      <p
        style={{
          fontSize: "16px", // Adjust font size as needed
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: "20px", // Adjust margin as needed
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
