import { Button } from "@mui/material";

function App() {
  return (
    <div className="w-full gap-5 flex flex-col items-center">
      <h1 className=" w-full bg-gray-700 py-4 text-center text-white text-[2rem]">
        Welcome Tailwind and Material-UI (MUI) are installed
      </h1>
      <Button
        sx={{
          backgroundColor: "blue",
          color: "white",
          "&:hover": {
            backgroundColor: "darkblue", // Darken background on hover
          },
          "&:active": {
            backgroundColor: "navy", // Even darker background when clicked
            transform: "scale(0.98)", // Add a "pressed" effect
          },
          "&:focus": {
            outline: "2px solid black", // Add focus outline for accessibility
          },
        }}
      >
        Button
      </Button>
    </div>
  );
}

export default App;
